import * as types from '../types'
import { getPosts, likePost, getPostComments } from '../../api/post'

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

function fetchCommentsSuccess({postId,comments}){
  return{
    type: types.FETCH_COMMENTS_SUCCESS,
    payload: {postId, comments}
  }
}

function updatePostSuccess(post) {
  return{
    type: types.UPDATE_POST_SUCCESS,
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

export function fetchComments(params) {
  return dispatch => {
    return getPostComments(params).then(data => {
      dispatch(fetchCommentsSuccess({postId: params.postId, comments: data}))
    })
  }
}

export function updatePost(post) {
  return dispatch => {
    dispatch(updatePostSuccess(post))
  }
}