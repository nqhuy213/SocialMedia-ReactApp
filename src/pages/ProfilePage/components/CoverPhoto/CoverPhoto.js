import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Button, Icon, Image} from 'semantic-ui-react'

const CoverImageWrapper = styled.div`
  width: 900px;
  height: 470px;
`
const CoverImage = styled(Image)`
  width: inherit;
  height: inherit;
`
const EditCoverButton = styled(Button)`
  position: relative;
  float: right;
  margin-right: 15px !important;
  bottom: 50px;
  background-color: ${props => `${props.theme.colors.lightgray} !important`};
  :hover{
    background-color: ${props => `${props.theme.colors.popupHoverBackground} !important`};
  }
`

export default function CoverPhoto(props) {
  return (
    <CoverImageWrapper>
      <CoverImage rounded src={props.src || "https://react.semantic-ui.com/images/wireframe/square-image.png"}/>

      {
        props.auth == "w" ?
          <EditCoverButton >
            <Icon name='camera'/>
              Edit Cover Photo
          </EditCoverButton>
        : null
      }
      
    </CoverImageWrapper>
  )
}

CoverPhoto.propTypes = {
  src: PropTypes.string,
}