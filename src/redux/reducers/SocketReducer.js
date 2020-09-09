import * as types from '../types'

const initialState = {
  socket: null,
  socketConnected: false
}

export default function Socket(state = initialState, action = { }){
  switch (action.type){
    case types.OPEN_NEW_SOCKET:
      return {
        ...state,
        socket: action.payload,
        socketConnected:true
      }

    case types.CLOSE_SOCKET:
      return {
        ...state,
        socket: null,
        socketConnected: false
      }

      
    default: return state
  }
  
}