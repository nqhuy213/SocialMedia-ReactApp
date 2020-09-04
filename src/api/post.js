import {callAPI} from './base'

export const getPosts = (params) => callAPI('/post', 'GET', params)

export const getPostComments = (params) => callAPI('/post/comment', 'GET', params)


export const postPost = (body) => callAPI('/post', 'POST', body)

export const likePost = (body) => callAPI('/post/like', 'POST', body)