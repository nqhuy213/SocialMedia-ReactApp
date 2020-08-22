import React from 'react'
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute({ component: Component, auth, redir, ...rest }) {
  return (
    <Route {...rest} render={(props) => (
      auth === true
          ? <Component {...props} />
          : <Redirect to={redir} />
  )} />
  )
}
