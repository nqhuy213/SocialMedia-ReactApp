import * as types from '../types'

export const openChat = (host, guest) => {
  return dispatch => {
    /** Fetch API to get the chat data of the host and the guest */

    dispatch({
      type: types.OPEN_CHAT,
      payload: {host,guest}
    })
  }
}

export const closeChat = (guest) => {
  return dispatch => {
    dispatch({
      type: types.CLOSE_CHAT,
      payload: {guest}
    })
  }
}