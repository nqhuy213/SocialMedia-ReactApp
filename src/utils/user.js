import jwt from 'jsonwebtoken'
import { getToken } from './token'

export const getUserId = () => {
  const token = getToken('token')
  const userId = jwt.verify(token, process.env.REACT_APP_JWT_SECRET_KEY)
  
  return userId._id
}