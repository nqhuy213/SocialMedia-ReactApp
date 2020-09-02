import React, { useState } from 'react'
import './RegisterForm.scss'
import { Segment, Divider, Grid, Form, GridColumn, Select, Radio, Button } from 'semantic-ui-react'
import { register } from '../../api/auth'

export default function RegisterForm({closeRegisterForm}) {
  const [registerEntries, setRegisterEntries] = useState({
    lastName: '',
    firstName: '',
    email: '',
    password: ''
  })

  const handleOnChange = (e) => {
    const name = e.target.name
    setRegisterEntries({...registerEntries, [name] : e.target.value})
    
  }

  const handleOnSubmit = async (e) => {
    const result = await register(registerEntries)
    console.log(result);
    if (result.success){
      closeRegisterForm()
    }else{

    }
  }

  return (
    <Segment className='form-container'>
      <h1 className='title'>Register</h1>
      <p className='subtitle'>Quick and easy</p>
      <Divider/>
      <Form onSubmit={handleOnSubmit}>
        <Grid>
          <Grid.Row columns={2} className='grid-row'>
            <Grid.Column>
              <input placeholder='Last Name' className='register-entry' name='lastName' 
                onChange={handleOnChange} value={registerEntries.lastName}/>
            </Grid.Column>
            <Grid.Column>
              <input placeholder='First Name' 
                className='register-entry' value={registerEntries.firstName}
                name='firstName' onChange={handleOnChange}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1} className='grid-row'>
            <Grid.Column>
              <input placeholder='Email' className='register-entry' 
                name='email' onChange={handleOnChange} value={registerEntries.email}/>
              <input placeholder='Password' className='register-entry' value={registerEntries.password}
                name='password' type='password' onChange={handleOnChange}/>
            </Grid.Column>
          </Grid.Row>
          <label  className='description-label'>Date of Birth</label>
          <Grid.Row columns={3} className='grid-row'>
            <Grid.Column className='grid-col'>
              <select name='day' placeholder='Day' className='register-entry dob'>
                <option value='day'>Day</option>
                <option value={1}>1</option>
              </select>
            </Grid.Column>
            <Grid.Column className='grid-col'>
              <select placeholder='Month' className='register-entry dob' >
                <option value='month'>Month</option>
                <option value={1}>January</option>
              </select>
            </Grid.Column>
            <Grid.Column className='grid-col'>
              <select placeholder='Year' className='register-entry dob'>
                <option value='year'>Year</option>
                <option value={2020}>2020</option>
              </select>
            </Grid.Column>
          </Grid.Row>
          <label className='description-label'>Gender</label>
          <Grid.Row columns={2} className='grid-row'>
            <Grid.Column>
              <Radio label='Male' name='genderGroup' className='register-entry' />
            </Grid.Column>
            <Grid.Column>
              <Radio label='Female' name='genderGroup' className='register-entry'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Button className='register-button' type='submit'>Register</Button>
      </Form>
      
    </Segment>
  )
}
