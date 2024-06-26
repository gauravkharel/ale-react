const express = require('express');
const { createServer } = require('node:http');
const {join} = require('node:path')
const {Server} = require('socket.io')
const app = express();
const server = createServer(app);
const io = new Server(server, {
  connectionStateRecovery:{}
})

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'public/index.html'))
});



io.on('connection', (socket) => {
  console.log('a user connection')
  // socket.on('disconnect',() => {
  //   console.log('user disconnected')
  // })
  socket.on('chat message', (msg) => {
    // emit to all the users connected
    io.emit('chat message', msg)
    console.log('message: ' + msg);
  });
 
})

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});