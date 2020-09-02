import React, { Fragment } from 'react'
import { Route, Redirect } from "react-router-dom";
import NavigationBar from '../components/NavigationBar/NavigationBar';

export default function ProtectedRoute({ component: Component, auth, redir, ...rest }) {

  return (
      <Route {...rest} render={(props) => (
        auth === true
          ? <Component page={rest.path.slice(1)} />
          : <Redirect to={redir} />
      )} />
    
  )
}
