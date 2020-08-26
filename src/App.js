import React, { Fragment } from 'react';
import PublicRoute from './routes/PublicRoute';
import ProtectedRoute from './routes/ProtectedRoute'
import LoginPage from './pages/LoginPage/LoginPage';
import NewsFeedPage from './pages/NewsFeedPage/NewsFeedPage';
import WatchPage from './pages/WatchPage/WatchPage';
import { history } from './history';
import { Router } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import NavigationPage from './pages/NavigationPage';



function App({userLoggedIn}) {
  return (
    <Fragment>
      <ProtectedRoute path='/home' component={NavigationPage} auth={userLoggedIn}/>
      <ProtectedRoute path='/watch' component={NavigationPage} auth={userLoggedIn}/>
      <ProtectedRoute path='/marketplace' component={NavigationPage} auth={userLoggedIn}/>
      <ProtectedRoute path='/group' component={NavigationPage} auth={userLoggedIn}/>
      <ProtectedRoute path='/game' component={NavigationPage} auth={userLoggedIn}/>
      <PublicRoute exact path='/' component={LoginPage} auth={userLoggedIn} redir='/home'/>
    </Fragment>
  );
}
export default App;
