import React, { Fragment } from 'react';
import './ActiveUserItem.scss';
import PropTypes from 'prop-types';
import AvatarContainer from '../../../../components/AvatarContainer/AvatarContainer'
import GrayHoverContainer from '../../../../components/GrayHoverContainer/GrayHoverContainer';

export default function ActiveUserItem({user, onClick}) {

  
  return (
    <GrayHoverContainer onClick={() => {onClick(user)}}>
      <AvatarContainer online name={`${user.firstName} ${user.lastName}`}/>
    </GrayHoverContainer>
  )
}

ActiveUserItem.propTypes = {
  user: PropTypes.object,
  onClick: PropTypes.func,
};