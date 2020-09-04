import io from 'socket.io-client'
import socketEvent from './socketEvent'
var socket

export const initialSocket = (room) => {
  socket = io(process.env.REACT_APP_API_URL)
  console.log('Connecting to socket...');

  if(socket && room){
    socket.emit(socketEvent.join, room)
    return socket
  }
}