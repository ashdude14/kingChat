import React, { useState } from "react";
import cam from "../assets/camera.svg"
import exit from "../assets/app-name/exit.svg"
import mic from "../assets/app-name/mic.svg"
import ss from "../assets/app-name/sshare.svg"
const Room = () => {
  const [show, setShow] = useState<boolean>(false);

  const joinHandler=(e: React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
     setShow(!show)
  }

  const handleExit=(e: React.MouseEvent<HTMLButtonElement>)=> {
    e.preventDefault();
    setShow(!show)
   }
  return (
    <>
      <div className="flex justify-between w-[100%]  flex-1 ">
        <div className="w-[15%] hidden md:flex flex-col border-r border-white">
          <div className="w-full h-full ">
          <p className="text-white text-md bg-slate-700   px-[10%] relative">
            Participants
            <strong className="bg-black absolute top-1/2 transform -translate-y-1/2 right-[10%]">14</strong>
          </p>
        </div>
        </div>
        <div className="sm:w-[70%] w-[100%] relative  ">
         <button className={`absolute bottom-0 h-[10%] mx-[46%] w-[18%] rounded-lg bg-[#845695] mb-[1%] text-lg p-[0.5%] ${show ? `hidden`:`block`}`} onClick={joinHandler}>Join Stream</button>
         <div className={`flex absolute bottom-0  m-[2%] justify-center w-full gap-[0.5%] ${show ? `block`:`hidden`}`}>
          <button className=" bg-[#845695] rounded-lg w-[4%] h-auto z-0 "> vid
          <img src={cam} className="w-[4%] h-[4%] z-1" />
          </button>
          <button className=" bg-[#845695] rounded-lg w-[4%] ">
          <img src={mic} className="w-[4%] h-[4%] z-1" />
          </button>
          <button className=" bg-[#845695] rounded-lg w-[4%] ">
          <img src={ss} className="w-[4%] h-[4%] z-1" />
          </button>
          <button className=" bg-red-400 rounded-lg w-[4%]" onClick={handleExit}>
          <img src={exit} className="w-[4%] h-[4%] z-1" />
          </button>
         </div>
        </div>
        <div className="w-[20%] h-full hidden sm:block bg-black/25 relative ">
        <input className="absolute rounded-lg  bottom-0 m-[5%] w-[94%] h-[6%] p-[3%]  bg-slate-700" placeholder="Send a message"></input>
        </div>
      </div>
    </>
  );
}

export default Room;
