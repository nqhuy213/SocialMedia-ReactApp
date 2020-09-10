import * as types from '../types'

const initialState = {
  token: null,
  userLoggedIn: false
}

export default function Auth(state = initialState, action = { }){
  switch (action.type){
    case types.LOGIN_SUCCESS:
    
      return {
        ...state,
        token: action.payload,
        userLoggedIn: true
      }

    default: return state
  }
}