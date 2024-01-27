const Room = () => {
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
         
         <button className="absolute bottom-0 h-[10%] mx-[46%] w-[18%] rounded-lg bg-[#845695] mb-[1%] text-lg p-[0.5%]">Join Stream</button>
        </div>

        <div className="w-[20%] h-full hidden sm:block bg-black/25 relative ">

          <input className="absolute rounded-lg  bottom-0 m-[5%] w-[94%] h-[6%] p-[3%]  bg-slate-700" placeholder="Send a message"></input>
        </div>
      </div>
    </>
  );
}

export default Room;
