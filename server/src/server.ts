// setup server

const http = require('http')
const express = require('express')
const path = require('path')
const socketio = require('socket.io')

const socketHandler = require('./utils/MainController')
// const roomHandler = require('./utils/RoomController')
// const gameHandler = require('./utils/GameController')


const app = express()
const server = http.createServer(app)
const io = socketio(server, {
  cors: {
    origin: '*',
  },
})




io.on('connection', async (socket) => {
  socket.on('join-room', async (roomId, userId) => {
    // console.log(roomId, 'room')
    // console.log(userId, 'user')
    await socket.join(roomId)

    socket.to(roomId).emit('user-connected', userId)

    socket.on('disconnect', () => {
      socket.to(roomId).emit('user-disconnected', userId)
    })
  })
})


// set static folder
app.use(express.static(path.join(__dirname, 'index.html')))

const PORT = process.env.PORT || 9000

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})