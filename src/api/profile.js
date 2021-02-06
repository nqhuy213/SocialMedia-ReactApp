import {callAPI} from './base'

export const getProfile = async (userId) => callAPI(`profile/${userId}`)