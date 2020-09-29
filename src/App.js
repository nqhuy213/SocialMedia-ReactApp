import React, { useEffect, useState } from 'react';
import PublicRoute from './routes/PublicRoute';
import ProtectedRoute from './routes/ProtectedRoute'
import LoginPage from './pages/LoginPage/LoginPage';
import { Route, Switch } from 'react-router-dom';
import NavigationPage from './pages/NavigationPage/NavigationPage';
import {getToken} from './utils/token'
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from './redux/actions/auth';
import { openNewSocket } from './redux/actions/socket';
import { ThemeProvider, withTheme } from 'styled-components';
import theme from './styles/theme';
import { history } from './history';
import NewsFeedPage from './pages/NewsFeedPage/NewsFeedPage';
import WatchPage from './pages/WatchPage/WatchPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
 

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
        <ProtectedRoute path='/home' component={NavigationPage} page={NewsFeedPage} activePage='home' auth={userLoggedIn} redir='/'/>
        <ProtectedRoute path='/watch' component={NavigationPage} page={WatchPage} activePage='watch' auth={userLoggedIn} redir='/'/>
        <ProtectedRoute path='/marketplace' component={NavigationPage} page={NewsFeedPage} activePage='marketplace' auth={userLoggedIn} redir='/'/>
        <ProtectedRoute path='/group' component={NavigationPage} page={NewsFeedPage} activePage='group' auth={userLoggedIn} redir='/'/>
        <ProtectedRoute path='/game' component={NavigationPage} page={NewsFeedPage} activePage='game' auth={userLoggedIn} redir='/'/>
        <ProtectedRoute path='/:userId' component={ProfilePage} auth={userLoggedIn} redir='/'/>
      </Switch>
      <Route exact  component={LoginPage}/>
    </ThemeProvider>
  );
}
export default withTheme(App);
