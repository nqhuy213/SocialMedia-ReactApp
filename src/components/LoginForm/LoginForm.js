import React from 'react'
import './LoginForm.scss'
import { Segment, Form, Button, Divider } from 'semantic-ui-react'

export default function LoginForm() {
  return (
    <Segment className='form-container'>
      <Form className='form-entries'>
        <Form.Field>
          <input placeholder='Email' className='login-entry'/>
        </Form.Field>
        <Form.Field>
          <input placeholder='Password' className='login-entry' />
        </Form.Field>
      </Form>
      <Button className='login-button' fluid>Log in</Button>
      <a href='#' className='forget-link'>Forget password?</a>
      <Divider/>
      <Button className='open-register-button'>Create new account</Button>
    </Segment>
  )
}
