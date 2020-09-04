import * as types from '../types'
import { getPosts, likePost } from '../../api/post'

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

function likePostSuccess(postId) {
  return {
    type: types.LIKE_POST,
    payload: {
      postId
    }
  }
}

export function likePostDispatch(postId) {
  return dispatch => {
    return likePost({postId}).then(() => {
      dispatch(likePostSuccess(postId))
    })
  }
}