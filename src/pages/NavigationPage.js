import React, { Fragment, useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import NewsFeedPage from './NewsFeedPage/NewsFeedPage'
import './NavigationPage.scss'
import WatchPage from './WatchPage/WatchPage'
import { getUserId } from '../utils/user'
import { openNewSocket } from '../redux/actions/socket'

export default function NavigationPage({page}) {

  const [activePage, setActivePage] = useState(page)
  const socket = useSelector(state => state.Socket.socket)
  
  useEffect(() => {
    if(socket){
      socket.emit('user_login', {userId: getUserId()})
    }
  },[socket])

  const handleChangePage = (page) => {
    setActivePage(page)
  }

  var page;
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
