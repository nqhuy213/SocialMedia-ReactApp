import React from 'react';
import './ActiveUserBar.scss';
import PropTypes from 'prop-types';
import ActiveUserItem from './ActiveUserItem/ActiveUserItem';
import AvatarContainer from '../../../components/AvatarContainer/AvatarContainer'

export default function ActiveUserBar({activeUsers}) {
  
  return (
    <div className='active-user-bar-container'>
      <h1>Active users</h1>
      {
        activeUsers.map(user => 
          <ActiveUserItem key={user._id} user={user}/>
        )
      }
    </div>
  )
}

ActiveUserBar.propTypes = {
  activeUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
};