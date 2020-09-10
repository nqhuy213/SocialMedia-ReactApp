import React from 'react';
import PublicRoute from './routes/PublicRoute';
import ProtectedRoute from './routes/ProtectedRoute'
import LoginPage from './pages/LoginPage/LoginPage';
import { Switch } from 'react-router-dom';
import NavigationPage from './pages/NavigationPage/NavigationPage';



function App({userLoggedIn}) {
  return (
    <Switch>
      <ProtectedRoute path='/home' component={NavigationPage} auth={userLoggedIn}/>
      <ProtectedRoute path='/watch' component={NavigationPage} auth={userLoggedIn}/>
      <ProtectedRoute path='/marketplace' component={NavigationPage} auth={userLoggedIn}/>
      <ProtectedRoute path='/group' component={NavigationPage} auth={userLoggedIn}/>
      <ProtectedRoute path='/game' component={NavigationPage} auth={userLoggedIn}/>
      <PublicRoute exact path='/' component={LoginPage} auth={userLoggedIn} redir='/home'/>
    </Switch>
  );
}
export default App;
