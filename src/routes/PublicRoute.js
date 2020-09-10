import React from 'react'
import { Route, Redirect } from "react-router-dom";

export default function PublicRoute({ component: Component, auth, redir, ...rest }) {
  
  return (
      <Route {...rest} render={(props) => (
        auth === false
          ? <Component {...props} />
          : <Redirect to={redir} />
      )} />
  )
}
