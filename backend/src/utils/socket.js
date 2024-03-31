import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId = (pincode) => {
  return userSocketMap[pincode];
};

const userSocketMap = {}; // { pincode: socketId }

io.on("connection", (socket) => {
  console.log("An admin has connected", socket.id);

  const pincode = socket.handshake.query.pincode;
  if (pincode != "undefined") userSocketMap[pincode] = socket.id;
  console.log("User socket map", userSocketMap);
  socket.on("disconnect", () => {
    console.log("Admin has disconnected", socket.id);
    delete userSocketMap[pincode];
  });
});

export { app, io, server };
