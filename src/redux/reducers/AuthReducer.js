import * as types from '../types'

const initialState = {
  token: null,
  userLoggedIn: false
}

export default function Auth(state = initialState, action = { }){
  switch (action.type){
    case types.LOGIN_SUCCESS:
      var finalState = state
      finalState.token = action.payload
      finalState.userLoggedIn = true
      return finalState

    default: return state
  }
}