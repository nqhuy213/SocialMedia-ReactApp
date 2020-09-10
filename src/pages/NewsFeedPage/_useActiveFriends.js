import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserId } from '../../utils/user'
import { fetchActiveFriends, updateActiveFriend, deleteActiveFriend } from '../../redux/actions/newsFeed'

export default function useActiveFriends() {
  const dispatch = useDispatch()
  const activeFriends = useSelector(state => state.NewsFeed.data.activeFriends)
  const socket = useSelector(state => state.Socket.socket)

  useEffect(() => {
    if(socket){
      socket.emit('user_login', {userId:getUserId()})
      socket.on('active_friends', (data) => {
        dispatch(fetchActiveFriends(data))
      })
      socket.on('friend_online', (data) => {
        dispatch(updateActiveFriend(data))
      })
      socket.on('friend_offline', ({userId}) => {
        dispatch(deleteActiveFriend(userId))
      })
    }
  },[socket])
  
  return {activeFriends}
}
