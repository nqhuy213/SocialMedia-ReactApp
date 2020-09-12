import React from 'react';
import './ActiveUserItem.scss';
import PropTypes from 'prop-types';
import AvatarContainer from '../../../../components/AvatarContainer/AvatarContainer'
import GrayHoverContainer from '../../../../components/GrayHoverContainer/GrayHoverContainer';

export default function ActiveUserItem({user}) {
  return (
    <GrayHoverContainer>
      <AvatarContainer online src={user.profileImage} name={`${user.firstName} ${user.lastName}`}/>
    </GrayHoverContainer>
  )
}

ActiveUserItem.propTypes = {
  user: PropTypes.object,
};