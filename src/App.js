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
import { ThemeProvider, withTheme } from 'styled-components';
import theme from './styles/theme';
import TextBox from './components/TextBox/TextBox';


const token = getToken('token')

const localAuth = token ? true : false

function App() {
  const dispatch = useDispatch()
  const userLoggedIn = useSelector(state => state.Auth.userLoggedIn)
  const socket = useSelector(state => state.Socket.socket)

  useEffect(() => {
    if (localAuth && !userLoggedIn) {
      dispatch(loginSuccess(token))
      dispatch(openNewSocket())
    }
    
  },[userLoggedIn, socket])

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <ProtectedRoute path='/home' component={NavigationPage} auth={userLoggedIn}/>
        <ProtectedRoute path='/watch' component={NavigationPage} auth={userLoggedIn}/>
        <ProtectedRoute path='/marketplace' component={NavigationPage} auth={userLoggedIn}/>
        <ProtectedRoute path='/group' component={NavigationPage} auth={userLoggedIn}/>
        <ProtectedRoute path='/game' component={NavigationPage} auth={userLoggedIn}/>
        <PublicRoute exact path='/' component={LoginPage} auth={userLoggedIn || localAuth} redir='/home'/>
      </Switch>
    </ThemeProvider>
  );
}
export default withTheme(App);
