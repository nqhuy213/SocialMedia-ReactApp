import React from 'react';
import './ActiveUserBar.scss';
import PropTypes from 'prop-types';
import ActiveUserItem from './ActiveUserItem/ActiveUserItem';
import {useDispatch, useSelector} from 'react-redux'
import { openChat } from '../../../redux/actions/chat';

export default function ActiveUserBar({activeUsers}) {
  const dispatch = useDispatch()
  const host = useSelector(state => state.Auth.user)

  const openChatWith = (guest) => {
    dispatch(openChat(host, guest))
  }



  return (
    <div className='active-user-bar-container'>
      <h1>Active users</h1>
      {
        activeUsers.map(user => 
          <ActiveUserItem key={user._id} user={user} onClick={openChatWith}/>   
        )
      }
    </div>
  )
}

ActiveUserBar.propTypes = {
  activeUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
};