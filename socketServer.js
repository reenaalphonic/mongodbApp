const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  // socket.on("join_room", (data) => {
  //   socket.join(data);
  //   console.log(`User with ID: ${socket.id} joined room: ${data}`);
  // });

  socket.on("send_message", (data) => {
      console.log(data)
      
     socket.to(data.room).emit("receive_message", data);
     socket.broadcast.emit("receive_message", data);
    // socket.to().emit("receive_message", data);

   


  });

  socket.on('typing', (data)=>{   
    console.log(data)
    socket.broadcast.emit('typing', data)
      })

socket.on("stopTyping", (data) => {
    console.log(data)
  socket.broadcast.emit("stopTyping", data);
});

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});


 


server.listen(3001, () => {
  console.log("SERVER RUNNING");
});