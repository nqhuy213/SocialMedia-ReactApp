import React, { Fragment } from 'react';
import PublicRoute from './routes/PublicRoute';
import LoginPage from './pages/LoginPage/LoginPage';
import NewsFeedPage from './pages/NewsFeedPage/NewsFeedPage';



function App({userLoggedIn}) {
  return (
    <Fragment>
      <PublicRoute exact path='/' component={LoginPage} auth={userLoggedIn} redir='/news-feed'/>
    </Fragment>
  );
}

export default App;
