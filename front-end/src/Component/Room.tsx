import React, { useState } from "react";
import cam from "../assets/camera.svg";
import exit from "../assets/app-name/exit.svg";
import mic from "../assets/app-name/mic.svg";
import ss from "../assets/app-name/sshare.svg";
import ash from "../assets/app-name/ash.png";

const Room: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [sc, setSc] = useState<boolean>(false);

  // For storing joining
  const [joiners, setJoiners] = useState<number>(0);

  const joinHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShow(!show);
    setJoiners((prevJoiners) => prevJoiners + 1);
  };
  //console.log(joiners)
  const handleExit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShow(!show);
    setSc(!sc);
  };

  const screenhandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSc(!sc);
  };

  return (
    <>
      <div className="flex justify-between w-[100%]  flex-1 overflow-y-scroll  ">
        <div className="w-[15%] hidden md:flex flex-col border-r border-white">
          <div className="w-full h-full ">
            <p className="text-white text-md bg-slate-700   px-[10%] relative">
              Participants
              <strong className="bg-black absolute top-1/2 transform -translate-y-1/2 right-[10%]">14</strong>
            </p>
          </div>
        </div>
        <div className="sm:w-[70%] w-[100%] relative  ">
          <button
            className={`absolute bottom-0  mx-[40%] w-[20%] rounded-lg bg-[#845695] mb-[4%] text-sm sm:text-xl p-[0.5%]  ${show ? `hidden` : `block`}`}
            onClick={joinHandler}
          >
            Join Stream
          </button>
          <div className={`flex absolute bottom-0  justify-center w-full gap-[1%] ${show ? 'block' : 'hidden'} mb-[4%]`}>
            <button className="bg-[#845695] rounded-lg w-[8%] pl-[2%]">
              <img src={cam} alt="Camera" className="w-[70%] h-[70%]" />
            </button>
            <button className="bg-[#845695] rounded-lg w-[8%] pl-[2%]">
              <img src={mic} alt="Microphone" className="w-[70%] h-[70%]" />
            </button>
            <button className="bg-[#845695] rounded-lg w-[8%] pl-[2%] " onClick={screenhandler}>
              <img src={ss} alt="Screenshot" className="w-[70%] h-[70%]" />
            </button>
            <button className="bg-red-400 rounded-lg w-[8%] pl-[2%]" onClick={handleExit}>
              <img src={exit} alt="Exit" className="w-[70%] h-[70%]" />
            </button>
          </div>

          {/* Screen-share container */}
          <div className={`bg-slate-900 flex w-full h-[60%] flex-1 absolute ${sc ? 'block' : 'hidden'}`}>
            {/* Screen Share Content here.... */}
          </div>

          {/* Profiles here on joining stream */}
          <div className="flex-2 bg-green-300 w-full h-full  overflow-y-auto ">
          {Array.from({ length: joiners }).map((_, index) => (
              <div key={index}>
                <h1 className="text-xl text-black">img : {index}</h1>
               <img src={ash}
                alt="profile" 
                className="rounded-full "
               />
              </div>
            ))}
          </div>
        </div>
        <div className="w-[20%] h-full hidden sm:block bg-black/25 relative ">
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
