import * as types from '../types'

export const openChat = (chat) => {
  return dispatch => {
    /** Fetch API to get the chat data of the host and the guest */

    dispatch({
      type: types.OPEN_CHAT,
      payload: chat
    })
  }
}

export const updateChat = (chat) => {
  return dispatch => {
    dispatch({
      type: types.UPDATE_CHAT,
      payload: chat
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