import React from 'react'
import { Divider, Segment } from 'semantic-ui-react'
import styled from 'styled-components'
import AvatarContainer from '../../../../components/AvatarContainer/AvatarContainer'
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

export default function ProfileImageForm(props) {
  return (
    <Segment>
      <ProfileImageFormHeaderWrapper>
        <PIFormHeader>Update Profile Image</PIFormHeader>
        <ClosePIFContainer>
          <CloseButton onClick={props.closeProfileImageForm}/>
        </ClosePIFContainer>
        
      </ProfileImageFormHeaderWrapper>
      <Divider/>
        <ProfilePicture src=''/>
      <Divider/>
      <PIFormFooter>
        <SaveButtonWrapper>
          <SaveButton/>
        </SaveButtonWrapper>
      </PIFormFooter>
    </Segment>
    
  )
}
