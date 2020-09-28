import React, { useEffect } from 'react';
import './ActiveUserBar.scss';
import PropTypes from 'prop-types';
import ActiveUserItem from './ActiveUserItem/ActiveUserItem';
import {useDispatch, useSelector} from 'react-redux'
import { openChat } from '../../../redux/actions/chat';

export default function ActiveUserBar({activeUsers}) {
  const dispatch = useDispatch()
  const host = useSelector(state => state.Auth.user)
  const socket = useSelector(state => state.Socket.socket)

  const openChatWith = (guest) => {
    const participants = [host._id, guest._id]
    socket.emit('join_chat', (participants))
    
  }

  useEffect(() => {
    if(socket && host){
      socket.on('join_chat', ({chat}) => {
        var guest
        var participants = chat.participants
        for (let i = 0; i < participants.length; i++) {
          const user = participants[i];
          if(user._id === host._id){
            participants.splice(i,1)
            break
          }
        }
        if(participants.length === 1){
          guest = participants[0]
        }else{
          /** Handle group chat */ 
        }
        chat.host = host
        chat.guest = guest
        dispatch(openChat(chat))
      })
    }
  },[socket,host])



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