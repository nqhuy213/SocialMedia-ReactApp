import React from 'react'
import {Image} from 'semantic-ui-react'
import './AvatarContainer.scss'
import PropTypes from 'prop-types';

export default function AvatarContainer({src, name, date, online}) {
  return (
    <div className='avatar-container'>
      <div className='avatar-img-container'>
        <Image 
          src={src ? src : 'https://react.semantic-ui.com/images/wireframe/square-image.png'} 
          className='avatar-img' 
          circular />
        
      </div>
      {
        online ? <span className="online-indicator"></span> : null
      }
      <div className='avatar-infomation-container'>
        <span className='avatar-name-label'>{name || 'My name'}</span>
        <span className='avatar-date-label'>{date}</span>
      </div>
    </div>
  )
}


AvatarContainer.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
  online: PropTypes.bool,
};