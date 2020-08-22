const jwt = require('jsonwebtoken')

/**
 * Store token got from server in localStorage with expiry
 * @param {string} token - Token returned from server
 * @param {string} ttl - Time to live
 */
export const setToken = (auth, token) => {
  localStorage.setItem(auth, token)
}

/**
 * Check if token exist in localStorage
 */
export const getToken = (auth) => {
  const token = localStorage.getItem(auth)
  // if the item doesn't exist, return null
  if (!token) {
    return ''
  }
  return token
}

export const deleteToken = (auth) => {
  localStorage.removeItem(auth)
}



export const generateToken = (object) => {
  const {_id} = object
  const payload = {
    _id
  }
  return jwt.sign(payload, process.env.REACT_APP_JWT_SECRET_KEY)
}

export const verifyToken = (token) => {
  const _id = jwt.verify(token, process.env.REACT_APP_JWT_SECRET_KEY)
  return _id
}