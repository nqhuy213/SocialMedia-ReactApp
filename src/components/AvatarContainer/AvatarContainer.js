import React from 'react'
import {Image} from 'semantic-ui-react'
import './AvatarContainer.scss'

export default function AvatarContainer({src, name}) {
  return (
    <div className='avatar-container'>
      <Image src={src ? src : 'https://react.semantic-ui.com/images/wireframe/square-image.png'} className='avatar-img' circular />
      <span className='user-name-label'>{name}</span>
    </div>
  )
}
