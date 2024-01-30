import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface RoomContextProps {
  room: string;
  setRoom: Dispatch<SetStateAction<string>>;
}

const RoomContext = createContext<RoomContextProps | undefined>(undefined);

export const RoomProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [room, setRoom] = useState<string>('');

  return (
    <RoomContext.Provider value={{ room, setRoom }}>
      {children}
    </RoomContext.Provider>
  );
};

export const useRoomContext = (): RoomContextProps => {
  const context = useContext(RoomContext);
  if (!context) {
    throw new Error('useRoomContext must be used within a RoomProvider');
  }
  return context;
};
    