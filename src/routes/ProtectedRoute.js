import React, {useEffect } from 'react'
import { Route, Redirect } from "react-router-dom";
import {useSelector, useDispatch } from 'react-redux'
import { fetchUser, loginSuccess } from '../redux/actions/auth';
import { getToken } from '../utils/token';
import { openNewSocket } from '../redux/actions/socket';
import { fetchActiveFriends, updateActiveFriend, deleteActiveFriend } from '../redux/actions/newsFeed'
import {getUserId} from '../utils/user'


function ProtectedRoute({ component: Component, auth, redir, ...rest }) {
  return (
      <Route {...rest} render={(props) => (
        auth === true
          ? <Component page={rest.path.slice(1)} />
          : <Redirect to={redir} />
      )} />
  )
}


export default ProtectedRoute
