import { checkPropTypes } from 'prop-types'
import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { Button, Divider, Segment } from 'semantic-ui-react'
import styled from 'styled-components'
import AvatarContainer from '../../../../components/AvatarContainer/AvatarContainer'
import BrowseButton from '../../../../components/BrowseButton'
import CloseButton from '../../../../components/CloseButton/CloseButton'
import SaveButton from '../../../../components/SaveButton'
import ProfilePicture from '../ProfilePicture'

const ProfileImageFormHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const ClosePIFContainer = styled.div`
  margin-left:auto
`
const PIFormHeader = styled.h1`
  margin: 0px;
`
const PIFormFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const SaveButtonWrapper = styled.div`
  margin-left:auto;
`
const ProfileImgBrowseButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.lightgray} !important;
  :hover {
    background-color: ${(props) =>
      `${props.theme.colors.popupHoverBackground} !important`};
  }
`

const ProfileImageFileInput = styled.input`
  display: none;
`

export default function ProfileImageForm(props) {

  const [profileImagePreview, setProfileImagePreview] = useState(props.src)
  const profileImageInputRef = useRef(null)

  const handleImageChange = (e) => {
    const reader = new FileReader()
    if(e.target.files[0]){
      props.handleImageChosen(e.target.files[0])
      reader.readAsDataURL(e.target.files[0])
      reader.onloadend = () => {
        setProfileImagePreview(reader.result)
      }
    }
    e.target.value = null
  }

  return ( 
    <Segment>
      <ProfileImageFormHeaderWrapper>
        <PIFormHeader>Update Profile Image</PIFormHeader>
        <ClosePIFContainer>
          <CloseButton onClick={props.closeProfileImageForm}/>
        </ClosePIFContainer>
        
      </ProfileImageFormHeaderWrapper>
      <Divider/>
        <ProfilePicture src={profileImagePreview}/>
      <Divider/>
      <PIFormFooter>
        
        <SaveButtonWrapper>
          <ProfileImageFileInput 
            ref={profileImageInputRef}
            type='file' name='img' id='img' accept='image/*' 
            onChange={handleImageChange}
            />
          <ProfileImgBrowseButton onClick = {() => profileImageInputRef.current.click()}>
            Browse
          </ProfileImgBrowseButton>
          <SaveButton onClick={props.handleSubmitImage}/>
        </SaveButtonWrapper>
      </PIFormFooter>
    </Segment>
    
  )
}
