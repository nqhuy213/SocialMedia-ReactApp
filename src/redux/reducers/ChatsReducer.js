import * as types from "../types";

const initialState = {
  inbox: []
};

const MAX_INBOXS = 3

export default function Chat(state = initialState, action = {}) {
  switch(action.type) {
    case (types.OPEN_CHAT):
      var index = state.inbox.findIndex(c => c.guest._id === action.payload.guest._id)
      if(index === -1){
        if(state.inbox.length < MAX_INBOXS){
          return{
            ...state,
            inbox: [...state.inbox, action.payload]
          }
        }else{
          return {
            ...state,
            inbox: [
              ...state.inbox.slice(1),
              action.payload
            ]
          }
        }
      }else{
        return state
      }
    
    case (types.CLOSE_CHAT):
      var index = state.inbox.findIndex(c => c.guest._id === action.payload.guest._id)
      return {
        ...state,
        inbox : [...state.inbox.slice(0, index), ...state.inbox.slice(index + 1)]
      }
      
    default:
      return state
  }
}
