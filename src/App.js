import React, { useEffect, useState } from 'react';
import PublicRoute from './routes/PublicRoute';
import ProtectedRoute from './routes/ProtectedRoute'
import LoginPage from './pages/LoginPage/LoginPage';
import { Redirect, Route, Switch } from 'react-router-dom';
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
        <Route exact path='/'>
          {!(userLoggedIn||localAuth) ? <LoginPage/> : <NavigationPage activePage='home' page={NewsFeedPage}/>}
        </Route>
        <Route exact path='/watch'>
          {localAuth ? <NavigationPage activePage='watch' page={WatchPage}/> : <Redirect to='/'/>}
        </Route>
        <Route exact path='/marketplace'>
          {localAuth ? <NavigationPage activePage='marketplace' page={NewsFeedPage}/> : <Redirect to='/'/>}
        </Route>
        <Route exact path='/group'>
          {localAuth ? <NavigationPage activePage='group' page={NewsFeedPage}/> : <Redirect to='/'/>}
        </Route>
        <Route exact path='/game'>
          {localAuth ? <NavigationPage activePage='game' page={NewsFeedPage}/> : <Redirect to='/'/>}
        </Route>
        <Route path='/profile/:userId'>
          {localAuth ? <NavigationPage page={ProfilePage}/> : <Redirect to='/'/>}
        </Route>
      </Switch>
    </ThemeProvider>
  );
}
export default withTheme(App);
