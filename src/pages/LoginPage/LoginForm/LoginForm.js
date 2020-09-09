import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import './LoginForm.scss'
import { Segment, Form, Button, Divider } from 'semantic-ui-react'
import { login } from '../../../api/auth'
import { setToken } from '../../../utils/token'
import PropTypes from 'prop-types'
import { history } from '../../../history'
import { withRouter } from 'react-router-dom'
import { loginSuccess } from '../../../redux/actions/auth'
import { openNewSocket } from '../../../redux/actions/socket'

function LoginForm({openRegisterForm, ...props}) {

  const dispatch = useDispatch()

  const [loginEntries, setLoginEntries] = useState({
    email: '',
    password: ''
  })

  const handleOnChange = (e) => {
    const name = e.target.name
    setLoginEntries({...loginEntries, [name] : e.target.value})
  }

  const handleOnSubmit = async () => {
    const result = await login(loginEntries)
    if(result.success){
      setToken('token', result.token)
      dispatch(loginSuccess(result.token))
      dispatch(openNewSocket())
      history.push('/home')
    }else{

    }
  }

  return (
    <Segment className='form-container'>
      <Form className='form-entries' onSubmit={handleOnSubmit}>
        <Form.Field>
          <input placeholder='Email' className='login-entry' name='email' value={loginEntries.email} onChange={handleOnChange}/>
        </Form.Field>
        <Form.Field>
          <input placeholder='Password' className='login-entry' name='password' value={loginEntries.password} onChange={handleOnChange} />
        </Form.Field>
        <Button className='login-button' fluid type='submit'>Log in</Button>
      </Form>
      
      <a href='#' className='forget-link'>Forget password?</a>
      <Divider/>
      <Button className='open-register-button' onClick={openRegisterForm}>Create new account</Button>
    </Segment>
  )
}

LoginForm.propTypes = {
  openRegisterForm: PropTypes.func.isRequired,
}

export default withRouter(LoginForm) 