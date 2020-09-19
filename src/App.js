import React, { useEffect, useState } from 'react';
import PublicRoute from './routes/PublicRoute';
import ProtectedRoute from './routes/ProtectedRoute'
import LoginPage from './pages/LoginPage/LoginPage';
import { Switch } from 'react-router-dom';
import NavigationPage from './pages/NavigationPage/NavigationPage';
import {getToken} from './utils/token'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, loginSuccess } from './redux/actions/auth';
import { openNewSocket } from './redux/actions/socket';
import {fetchActiveFriends, updateActiveFriend, deleteActiveFriend} from './redux/actions/newsFeed'
import { getUserId } from './utils/user';


const token = getToken('token')
const localAuth = token ? true : false
function App() {
  const dispatch = useDispatch()
  const userLoggedIn = useSelector(state => state.Auth.userLoggedIn)
  const socket = useSelector(state => state.Socket.socket)

  useEffect(() => {
    if (token && !userLoggedIn) {
      dispatch(loginSuccess(token))
      dispatch(openNewSocket())
    }
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
  },[userLoggedIn, socket])

  return (
    <Switch>
      <ProtectedRoute path='/home' component={NavigationPage} auth={userLoggedIn || localAuth}/>
      <ProtectedRoute path='/watch' component={NavigationPage} auth={userLoggedIn || localAuth}/>
      <ProtectedRoute path='/marketplace' component={NavigationPage} auth={userLoggedIn || localAuth}/>
      <ProtectedRoute path='/group' component={NavigationPage} auth={userLoggedIn || localAuth}/>
      <ProtectedRoute path='/game' component={NavigationPage} auth={userLoggedIn || localAuth}/>
      <PublicRoute exact path='/' component={LoginPage} auth={userLoggedIn || localAuth} redir='/home'/>
    </Switch>
  );
}
export default App;
