import React, {useEffect } from 'react'
import { Route, Redirect } from "react-router-dom";
import NavigationBar from '../pages/NavigationPage/NavigationBar/NavigationBar';
import {useSelector, useDispatch } from 'react-redux'
import { loginSuccess } from '../redux/actions/auth';
import { getToken } from '../utils/token';
import { openNewSocket } from '../redux/actions/socket';


function ProtectedRoute({ component: Component, auth, redir, ...rest }) {
  const dispatch = useDispatch()
  const uAuth = useSelector(state => state.Auth.userLoggedIn)

  useEffect(() => {
    if(auth && !uAuth){
      dispatch(loginSuccess(getToken('token')))
      dispatch(openNewSocket())
    }
  }, [])

  
  return (
      <Route {...rest} render={(props) => (
        auth || uAuth === true
          ? <Component page={rest.path.slice(1)} />
          : <Redirect to={redir} />
      )} />
  )
}


export default ProtectedRoute
