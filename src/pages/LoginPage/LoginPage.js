import React, {useState, Fragment} from 'react'
import LoginForm from './LoginForm/LoginForm'
import RegisterForm from './RegisterForm/RegisterForm'
import { Modal } from 'semantic-ui-react'
import ChatBox from '../../components/ChatBox/ChatBox'

export default function LoginPage() {

  const [state, setState] = useState(
    {
      registerForm: false
    }
  )

  const closeRegisterForm = () => {
    setState({...state, registerForm:false})
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
