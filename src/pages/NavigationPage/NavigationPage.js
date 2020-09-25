import React, { Fragment, useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import NavigationBar from './NavigationBar/NavigationBar'
import NewsFeedPage from '../NewsFeedPage/NewsFeedPage'
import './NavigationPage.scss'
import WatchPage from '../WatchPage/WatchPage'
import { getUserId } from '../../utils/user'
import ChatBox from '../../components/ChatBox/ChatBox'
import { fetchUser } from '../../redux/actions/auth'
import { deleteActiveFriend, fetchActiveFriends, updateActiveFriend } from '../../redux/actions/newsFeed'
import { openNewSocket } from '../../redux/actions/socket'

export default function NavigationPage({page}) {

  const [activePage, setActivePage] = useState(page)
  const socket = useSelector(state => state.Socket.socket)
  const dispatch = useDispatch()

  useEffect(() => {
    if(socket){
      socket.emit('user_login', {userId:getUserId()})
      socket.on('user_info', user => {
        dispatch(fetchUser(user))
      })
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
  }, [socket])
  const handleChangePage = (page) => {
    setActivePage(page)
  }

  switch (activePage){
    case 'home':
      page = <NewsFeedPage/>
      break
    case 'watch':
      page = <WatchPage/>
      break
    default:
      page = <NewsFeedPage/>
      break
  }
  
  return (
    <Fragment>
      <NavigationBar activePage={activePage} handleChangePage={handleChangePage}/>
      <div className='page-container'>
        {page}
      </div>
    </Fragment>
  )
}
