import React, { ChangeEvent, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRoomContext } from "./Context/RoomContext";
import { useSocket } from "./Context/SocketProvider";

const Lobby: React.FC = () => {
  const navigate = useNavigate();
  const { room, setRoom, email, setEmail } = useRoomContext();
  const socket=useSocket()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRoom(event.target.value);
  };

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
     socket?.emit("room:join",{
      email,
      room
     })
    navigate("/room");
  };
   useEffect(()=>{
    socket?.emit("room:join1",(data: unknown) =>{
      console.log(`data coming from Back-end ${data}`)
    })
   },[socket])
  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="bg-black/15 sm:h-[65%] h-[60%] w-[50%] relative"
        onSubmit={handleSubmit} // Use onSubmit to handle form submission
      >
        <p className="flex items-center justify-center h-[15%] bg-black/20 text-sm sm:text-2xl text-center mb-4">
          👋 Create or Join Room
        </p>
        <label htmlFor="email" className="h-[15%] text-lg sm:text-xl px-[10%]">
          Your Email
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
          className="h-[10%] w-[80%] bg-black/25 px-[5%] mx-[10%] mb-[2%] mt-[2%] cursor-pointer"
          placeholder="Enter your email..."
          required
        />
        <label htmlFor="room" className="h-[15%] text-lg sm:text-xl px-[10%]">
          Room Name
        </label>
        <input
          type="text"
          name="room"
          value={room}
          onChange={handleChange}
          className="h-[10%] w-[80%] bg-black/25 px-[5%] mx-[10%] mb-[2%] mt-[2%] cursor-pointer"
          placeholder="Enter room name..."
          required
        />
        <button
          type="submit"
          className="mx-[10%] w-[80%] h-[10%] bg-[#845695] text-lg sm:text-xl absolute bottom-0 right-0  mt-[5%] mb-[4%]"
        >
          Go to room!
        </button>
      </form>
    </div>
  );
};

export default Lobby;
