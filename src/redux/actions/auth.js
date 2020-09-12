import * as types from '../types'

export function loginSuccess(token) {
  return dispatch => {
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: token
    })
  }
}

export function logoutSuccess(){
  return dispatch => {
    dispatch({
      type: types.LOGOUT_SUCCESS
    })
  }
}