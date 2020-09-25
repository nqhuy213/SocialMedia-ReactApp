import * as types from '../types'
import { getPosts} from '../../api/post'

function fetchNewsFeedBegin() {
  return {
    type: types.FETCH_NEWSFEED_BEGIN
  }
}

function fetchNewsFeedSucess(data) {
  return {
    type: types.FETCH_NEWSFEED_SUCCESS,
    payload: {
      result: data
    }
  }
}

function fetchNewsFeedMoreSuccess(data) {
  return {
    type: types.FETCH_NEWSFEED_MORE_SUCCESS,
    payload: {
      result: data
    }
  }
}

function fetchNewsFeedFailure(error) {
  return {
    type: types.FETCH_NEWSFEED_FAILURE,
    payload: {error}
  }
}

function addNewPostSuccess(post){
  return{
    type: types.ADD_NEW_POST,
    payload: {post}
  }
}

function updatePostSuccess(post) {
  return{
    type: types.UPDATE_NEWSFEED_POST_SUCCESS,
    payload: {post}
  }
}
export function fetchNewsFeed(){
  return dispatch => {
    dispatch(fetchNewsFeedBegin())
    return getPosts().then(
      data => {
        dispatch(fetchNewsFeedSucess(data))
      }
    ).catch(error => {
      return dispatch(fetchNewsFeedFailure(error))
    })
  }
}

export function fetchNewsFeedMore(params) {
  return dispatch => {
    dispatch(fetchNewsFeedBegin())
    return getPosts(params).then(data => {
      dispatch(fetchNewsFeedMoreSuccess(data))
    }).catch(error => {
      return dispatch(fetchNewsFeedFailure(error))
    })
  }
}

export function addNewPost(post) {
  return dispatch => {
    return dispatch(addNewPostSuccess(post))
  }
}

export function updateNewsFeedPost(post) {
  return dispatch => {
    dispatch(updatePostSuccess(post))
  }
}

export function fetchActiveFriends(activeFriends) {
  return dispatch => {
    dispatch({
      type: types.FETCH_ACTIVE_FRIENDS,
      payload: activeFriends
    })
  }
}

export function updateActiveFriend (activeFriend) {
  return dispatch => {
    dispatch ({
      type: types.UPDATE_ACTIVE_FRIEND,
      payload: activeFriend
    })
  }
}

export function deleteActiveFriend (userId) {
  return dispatch => {
    dispatch ({
      type: types.DELETE_ACTIVE_FRIEND,
      payload: userId
    })
  }
}