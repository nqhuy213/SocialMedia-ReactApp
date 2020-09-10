import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserId } from '../../utils/user'

export default function useActiveUser() {
  const dispatch = useDispatch()
  const activeUsers = useSelector(state => state.NewsFeed.data.activeUsers)
  const socket = useSelector(state => state.Socket.socket)

  useEffect(() => {
    if(socket){
      socket.emit('user_login', {userId:getUserId()})
    }
  },[socket])
  
  return {activeUsers}
}
