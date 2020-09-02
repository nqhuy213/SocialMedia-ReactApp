import React, { useState } from 'react'
import './LoginForm.scss'
import { Segment, Form, Button, Divider } from 'semantic-ui-react'
import { login } from '../../api/auth'
import { setToken } from '../../utils/token'

export default function LoginForm({openRegisterForm}) {
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
      window.location.reload()
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
