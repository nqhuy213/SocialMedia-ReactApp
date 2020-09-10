import React from 'react';
import './ActiveUserItem.scss';
import PropTypes from 'prop-types';
import AvatarContainer from '../../../../components/AvatarContainer/AvatarContainer'

export default function ActiveUserItem({user}) {
  return (
    <div className='active-user-container'>
      <AvatarContainer online src={user.profileImage} name={`${user.firstName} ${user.lastName}`}/>
    </div>
  )
}

ActiveUserItem.propTypes = {
  user: PropTypes.object,
};