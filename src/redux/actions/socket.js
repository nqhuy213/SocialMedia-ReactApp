import * as types from '../types'
import io from 'socket.io-client'

export const openNewSocket = (serverURL = process.env.REACT_APP_API_URL) => {
  return dispatch => {
    const socket = io(serverURL)
    return dispatch({
      type: types.OPEN_NEW_SOCKET,
      payload: socket
    })
  }
}

export const closeSocket = (socket) => {
  return dispatch => {
    socket.disconnect()
    return dispatch({
      type: types.CLOSE_SOCKET,
      payload: null
    })
  }
}