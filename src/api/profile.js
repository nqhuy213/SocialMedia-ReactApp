import {callAPI} from './base'

export const getProfile = async (userId) => callAPI(`profile/${userId}`)

export const editProfileImage = async (userId, body) => callAPI(`profile/${userId}/edit-profile-image`, 'POST', body)