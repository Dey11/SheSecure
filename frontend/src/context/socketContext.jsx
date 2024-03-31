import React, { createContext, useState, useEffect } from "react";
import io from "socket.io-client";
import { useContext } from "react";
import { UserContext } from "./userContext";

export const SocketContext = createContext(null);
export const SocketProvider = ({ children }) => {
  const { currentUser } = useContext(UserContext);
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const newSocket = io("http://localhost:3000", {
      query: { token: currentUser?.token, pincode: currentUser.pincode },
    });
    setSocket(newSocket);

    return () => newSocket.disconnect();
  }, [currentUser.pincode]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
