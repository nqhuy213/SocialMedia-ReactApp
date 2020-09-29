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
      {/* <Switch>
        <PublicRoute exact path='/' auth={userLoggedIn || localAuth} redir='/home' component={LoginPage}/>
        <ProtectedRoute exact path='/home' component={NavigationPage} page={NewsFeedPage} activePage='home' auth={userLoggedIn} redir='/'/>
        <ProtectedRoute exact path='/watch' component={NavigationPage} page={WatchPage} activePage='watch' auth={userLoggedIn} redir='/'/>
        <ProtectedRoute exact path='/marketplace' component={NavigationPage} page={NewsFeedPage} activePage='marketplace' auth={userLoggedIn} redir='/'/>
        <ProtectedRoute exact path='/group' component={NavigationPage} page={NewsFeedPage} activePage='group' auth={userLoggedIn} redir='/'/>
        <ProtectedRoute exact path='/game' component={NavigationPage} page={NewsFeedPage} activePage='game' auth={userLoggedIn} redir='/'/>
        <ProtectedRoute exact path='/:userId' component={ProfilePage} auth={userLoggedIn} redir='/'/>
      </Switch> */}
      <Switch>
        <Route exact path='/'>
          {!(userLoggedIn || localAuth) ? <LoginPage/> : <Redirect to='/home'/>}
        </Route>
        <Route exact path='/home'>
          {localAuth ? <NavigationPage activePage='home' page={NewsFeedPage}/> : <Redirect to='/'/>}
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
      </Switch>
    </ThemeProvider>
  );
}
export default withTheme(App);
