import React from 'react'
import { Icon } from 'semantic-ui-react'
import styled from 'styled-components'

const CustomLikeIcon = styled(Icon)`
  color: ${props => props.theme.colors.primaryblue};
`

export default function LikeIcon() {
  return (
    <Icon name="like" size='small' color='red'/>
  )
}
