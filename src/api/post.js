import {callAPI} from './base'

export const getPosts = (params) => {callAPI('/post', 'GET', params)}
