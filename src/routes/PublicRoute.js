import React from 'react'
import { Route, Redirect } from "react-router-dom";
import {getToken } from '../utils/token'


export default function PublicRoute({ component: Component, auth, redir, ...rest }) {
  return (
      <Route {...rest} render={(props) => (
        auth === false
          ? <Component {...props} />
          : <Redirect to={redir} />
      )} />
  )
}
