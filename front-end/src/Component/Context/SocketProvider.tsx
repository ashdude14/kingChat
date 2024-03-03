/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useMemo } from "react";
import { io, Socket } from "socket.io-client";

const SocketContext = createContext<Socket | null>(null);

export const useSocket = (): Socket | null => {
  const socket = useContext(SocketContext);
  if (!socket) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return socket;
};

export const SocketProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const socket = useMemo(() => io("localhost:3000"), []);
  // const socket=io("localhost:3000")
  return (
    <SocketContext.Provider value={socket}>
      {props.children}
    </SocketContext.Provider>
  );
};
