import React, { useCallback, useEffect, useState } from "react";
import cam from "../assets/camera.svg";
import exit from "../assets/app-name/exit.svg";
import mic from "../assets/app-name/mic.svg";
import ss from "../assets/app-name/sshare.svg";
import { useRoomContext } from "./Context/RoomContext";
import { useSocket } from "./Context/SocketProvider";
import peer from "./Services/peer.ts";
// to be stotred in .env

const Room: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [sc, setSc] = useState<boolean>(false);
  const [remoteSocketId, setRemoteSocketId] = useState<string | number>("");
  const [chkrem, setChkrem] = useState<boolean>(false);
  // const { room } = useRoomContext(); //
  const { participants, setParticipants } = useRoomContext();
  const socket = useSocket();
  const [mediaStream, setMediaStream] = useState<MediaStream>();
  const [remoteMediaStream, setRemoteMediaStream] = useState<MediaStream>();
  // const roomId=room;
  // console.log("I am from room.tsx roomid ,socket  ", room, socket?.id);

  const getMediaStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setMediaStream(stream);
    } catch (error) {
      console.error("Error accessing media devices: ", error);
    }
  };
  // For storing joining (front-end)
  const [joiners, setJoiners] = useState<number>(0);

  const joinHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    //alert("I am Ash!")
    setShow(!show);
    setJoiners((prevJoiners) => prevJoiners + 1);
    getMediaStream();
    const offer = await peer.getOffer(); // Await here
    // setChkrem(true);
    socket?.emit("user:offer", { to: remoteSocketId, offer });
  };

  console.log("im chrm", chkrem);
  const handleExit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShow(!show);
    setSc(false);
   // socket?.off();
    setMediaStream(undefined)
  };

  const screenhandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSc(!sc);
  };

  const handleUserJoined = useCallback(
    (data: { email: string; id: string | number }) => {
      const { email, id } = data;
      console.log(`user : ${email} joined room with socketid: ${id}`);
      setRemoteSocketId(id);
      console.log("remoteSocketId", remoteSocketId);
      setParticipants((data) => {
        return data + 1;
      });
    },
    [remoteSocketId, setRemoteSocketId, setParticipants]
  );

  const handleAcceptOffer = useCallback(
    async (data: {
      from: string | number;
      offer: RTCSessionDescriptionInit;
    }) => {
      const { from, offer } = data;
      //getMediaStream();
      setChkrem(true);
      // setShow(!show)
      setRemoteSocketId(from);
      console.log("accept offer", from, offer);
      const ans = await peer.getAnswer(offer);
      console.log("answer", ans);
      socket?.emit("user:anser", { to: from, ans });
    },
    [socket]
  );

  // useEffect(() => {
  // const getMediaStream = async () => {
  //   try {

  //     const stream = await navigator.mediaDevices.getUserMedia({
  //       video: true,
  //     });
  //     setMediaStream(stream);
  //   } catch (error) {
  //     console.error("Error accessing media devices: ", error);
  //   }
  // };

  // getMediaStream();

  // return () => {
  //   if (mediaStream) {
  //     mediaStream
  //       .getTracks()
  //       .forEach((track: { stop: () => unknown }) => track.stop());
  //   }
  // };
  // }, []);
  const handleAnswer = useCallback(() => {
    (data: { from: string | number; ans: RTCSessionDescriptionInit }) => {
      const { from, ans } = data;
      peer.setLocalDesc(ans);
      console.log("answer done callback , from : ", from);

      // eslint-disable-next-line no-unsafe-optional-chaining
      mediaStream?.getTracks().forEach((track) => {
        peer.peer?.addTrack(track, mediaStream);
      });
    };
  }, [mediaStream]);

  useEffect(() => {
    peer.peer?.addEventListener("track", async (ev) => {
      setRemoteMediaStream(ev.streams[0]);
      //setRemoteMediaStream(ev.streams);
    });
  }, []);
  useEffect(() => {
    socket?.on("user:joined", handleUserJoined);
    socket?.on("user:accept", handleAcceptOffer);
    socket?.on("user:answer", handleAnswer);
    console.log("remoteSocketId useEffect", remoteSocketId);
    return () => {
      socket?.off("user:joined", handleUserJoined);
      socket?.off("user:accept", handleAcceptOffer);
      socket?.off("user:answer", handleAnswer);
    };
  }, [
    socket,
    handleUserJoined,
    handleAcceptOffer,
    remoteSocketId,
    handleAnswer,
  ]);

  return (
    <>
      <div className="flex justify-between w-[100%]  flex-1 overflow-hidden  h-screen">
        <div className="w-[15%] hidden md:flex flex-col border-r border-white">
          <div className="w-full h-full ">
            <p className="text-white text-md bg-slate-700   px-[10%] relative">
              Participants
              <strong className="bg-black absolute top-1/2 transform -translate-y-1/2 right-[10%]">
                {participants}
              </strong>
            </p>
          </div>
        </div>

        <div
          className={`sm:w-[70%] w-[100%]  overflow-y-auto scroll-smooth scrollbar-hide ${
            sc ? "" : "mt-[2%] mb-[5%]"
          }`}
        >
          {/* Here is the two div want to modify */}

          <div
            className={`bg-slate-900   w-full h-[60%]  ${
              sc ? "block" : "hidden"
            }`}
          >
            {/* Screen Share Content here.... */}
          </div>

          {/* Profiles here on joining stream margin left margin bottom flex for profile */}

          <div
            className={` w-full mb-[10%] sm:mb-[13%]  ${
              sc ? "h-[40%]" : ""
            } overflow-y-auto scroll-smooth scrollbar-hide justify-center items-center  flex flex-wrap`}
          >
            {Array.from({ length: joiners }).map((_, index) => (
              <div
                key={index}
                className="  bg-black/40 border  relative rounded-full border-[#845695] flex overflow-hidden cursor-pointer  items-center w-[80px] h-[80px] md:w-[200px] md:h-[200px] sm:w-[150px] sm:h-[150px] "
              >
                <div className="w-full h-full absolute mb-[20%]">
                  {mediaStream && (
                    <video
                      ref={async (videoRef) => {
                        if (videoRef) {
                          videoRef.srcObject = mediaStream;
                          console.log("remoteMediaStream",remoteMediaStream)
                          console.log("MediaStream",mediaStream)
                          await videoRef.play();
                        }
                      }}
                      autoPlay
                      playsInline
                      className="h-[105%] w-[110%] scale-x-[-1] scale-150"
                    />
                  )}
                </div>
                <div className="w-full h-full absolute mb-[20%]">
                 
                  {remoteMediaStream && (
                    <video
                      ref={async (videoRef) => {
                        if (videoRef) {
                          videoRef.srcObject = remoteMediaStream;
                           
                          await videoRef.play();
                        }
                      }}
                      autoPlay
                      playsInline
                      className="h-[105%] w-[110%] scale-x-[-1] scale-150"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className={`absolute bottom-0 mx-[40%] w-[20%] rounded-lg bg-[#845695] mb-[4%] text-sm sm:text-xl p-[0.5%] ${
            (!show   && remoteSocketId) ? "block" : "hidden"
          } `}
          onClick={joinHandler}
        >
          Join Stream
        </button>

        <div
          className={`flex absolute bottom-0 sm:h-[5%] justify-center w-[100%] gap-[1%] ${
            show ? "block" : "hidden"
          } mb-[4%]`}
        >
          <button className="bg-[#845695] rounded-lg sm:w-[4%] sm:pl-[1%] w-[8%] pl-[2%]">
            <img src={cam} alt="Camera" className=" w-[70%]  h-[70%]" />
          </button>
          <button className="bg-[#845695] rounded-lg w-[8%] pl-[2%] sm:w-[4%] sm:pl-[1%] ">
            <img src={mic} alt="Microphone" className="w-[70%] h-[70%]" />
          </button>
          <button
            className="bg-[#845695] rounded-lg w-[8%] pl-[2%] sm:w-[4%] sm:pl-[1%] "
            onClick={screenhandler}
          >
            <img src={ss} alt="Screenshot" className="w-[70%] h-[70%]" />
          </button>
          <button
            className="bg-red-400 rounded-lg w-[8%] pl-[2%] sm:w-[4%] sm:pl-[1%]"
            onClick={handleExit}
          >
            <img src={exit} alt="Exit" className="w-[70%] h-[70%]" />
          </button>
        </div>

        <div className="w-[20%] h-full hidden sm:block bg-black/25 relative overflow-hidden ">
          <input
            className="absolute rounded-lg  bottom-0 m-[5%] w-[94%] h-[6%] p-[3%]  bg-slate-700"
            placeholder="Send a message"
          />
        </div>
      </div>
    </>
  );
};

export default Room;
