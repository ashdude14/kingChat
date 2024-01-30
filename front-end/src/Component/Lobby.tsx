import { useNavigate } from "react-router-dom";
import { ChangeEvent } from "react";
import {useRoomContext} from "./Context/RoomContext"

const Lobby: React.FC = () => {
  const navigate = useNavigate();
 

  const { room, setRoom } = useRoomContext(); 
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRoom(event.target.value);
  };

  const handleClick = () => {
    navigate("/room");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-black/15 sm:h-[65%] h-[60%] w-[50%]">
        <p className="flex items-center justify-center h-[15%] bg-black/20 text-sm sm:text-2xl text-center mb-4">
          👋 Create or Join Room
        </p>
        <label htmlFor="name" className="h-[15%] text-lg sm:text-xl px-[10%] ">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          className="h-[10%] w-[80%] bg-black/25 px-[5%] mx-[10%] mb-[5%] mt-[5%] cursor-pointer"
          placeholder="Enter your name..."
        />
        <label htmlFor="room" className="h-[15%] text-lg sm:text-xl px-[10%] ">
          Room Name
        </label>
        <input
          type="text"
          name="room"
          value={room}
          onChange={handleChange}
          className="h-[10%] w-[80%] bg-black/25 px-[5%] mx-[10%] mb-[10%] mt-[5%] cursor-pointer"
          placeholder="Enter room name..."
        />
        <button
          className="mx-[10%] w-[80%] h-[10%] bg-[#845695] text-lg sm:text-xl"
          onClick={handleClick}
        >
          Go to room!
        </button>
      </form>
    </div>
  );
};

export default Lobby;
