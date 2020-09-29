import React, {useState, Fragment, useEffect} from 'react'
import LoginForm from './LoginForm/LoginForm'
import RegisterForm from './RegisterForm/RegisterForm'
import { Modal } from 'semantic-ui-react'
import ChatBox from '../../components/ChatBox/ChatBox'
import { getToken } from '../../utils/token'
import { Redirect } from 'react-router-dom'

export default function LoginPage() {
  const token = getToken('token')
  const [state, setState] = useState(
    {
      registerForm: false
    }
  )

  const closeRegisterForm = () => {
    setState({...state, registerForm:false})
  }

  if(token){
    return <Redirect to='home'/>
  }
  return (
    <Fragment>
      <div className='login-form-container'>
        <LoginForm openRegisterForm={() => setState({...state, registerForm: true})}/>
      </div>
      {/* <ChatBox>
        <ChatBox.Header>
          alo
        </ChatBox.Header>
      </ChatBox> */}
      <Modal size='mini' basic dimmer='inverted' open={state.registerForm} onClose={closeRegisterForm }>
          <RegisterForm closeRegisterForm={closeRegisterForm}/>
      </Modal>
    </Fragment>
    
  )
}
