
import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface RoomContextProps {
  room: string;
  setRoom: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  participants:number;
  setParticipants:Dispatch<SetStateAction<number>>;
}

const RoomContext = createContext<RoomContextProps | undefined>(undefined);

export const RoomProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [room, setRoom] = useState<string>('');
  const[email,setEmail]= useState<string>('');
  const[participants,setParticipants]=useState<number>(1);

  return (
    <RoomContext.Provider value={{ room, setRoom ,email,setEmail,participants,setParticipants}}>
      {children}
    </RoomContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useRoomContext = (): RoomContextProps => {
  const context = useContext(RoomContext);
  if (!context) {
    throw new Error('useRoomContext must be used within a RoomProvider');
  }
  return context;
};
    