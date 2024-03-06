const { Server } = require('socket.io')

const io = new Server(3000,{
    cors:true
});
const EtoS= new Map();
const StoE=new Map();
io.on("connection", (socket) => {
    console.log("connected Aashish",socket.id)
    socket.on("room:join",(args)=>{
       // console.log(args)
        const {email,room} = args;
        EtoS.set(email,socket.id);
        StoE.set(socket.id,email)
        io.to(room).emit("user:joined",{email,id:socket.id})
        socket.join(room)
        io.to(socket.id).emit("room:join",args)
        socket.on("user:offer",({to,offer})=>{
                //console.log("offer-ash",offer)
             //console.log("to-ash",to)
        io.to(to).emit("user:accept",{from:socket.id,offer})
      })
      socket.on("user:anser",({ to,ans })=>{
        io.to(to).emit("user:anser",{from:socket.id,ans})
      })
    })
})

//var express = require('express');
// var app = express();
// var port = 3001;
// app.get('/', function (req, res) {
//     res.send('Server is running');
    
// });
// // app.listen(port, function () {
//     console.log("Server is running on http://localhost:".concat(port));
// });
