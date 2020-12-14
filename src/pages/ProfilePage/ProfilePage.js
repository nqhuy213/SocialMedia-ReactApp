import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { history } from '../../history'
import ProfilePicture from './components/ProfilePicture/ProfilePicture';
import styled from 'styled-components'
import CoverPhoto from './components/CoverPhoto/CoverPhoto';
import { Divider } from 'semantic-ui-react';



const ProfilePageHeader = styled.div`
  background-color: white;
  display: block;
  text-align: center;
  width:100%;
`

const HeaderImagesContainer = styled.div`
  display: block;
  height: 510px;
`
const CoverPhotoContainer = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`
const ProfilePictureContainer = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  position: relative; 
  bottom: 130px;
`


const UserNameLabel = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
  font-family: ${(props) => props.theme.typography.fontFamily};
`;

const ProfileNavBar = styled.section`
  margin-top: 10px;
  margin-right: auto;
  margin-left: auto;
  height: 40px;
  width: 880px;
  border-top:${props => `2px solid ${props.theme.colors.lightgray}` } ;
`

export default function ProfilePage() {
  let {userId} = useParams()

  useEffect(() => {
    console.log(userId);
  },[])

  return (
    <div className='page-container profile-page'>
      <ProfilePageHeader>
        <HeaderImagesContainer>
          <CoverPhotoContainer>
            <CoverPhoto src=''/>
          </CoverPhotoContainer>
          <ProfilePictureContainer>
            <ProfilePicture src=''/>
          </ProfilePictureContainer>
        </HeaderImagesContainer>
        <UserNameLabel>Harvey Nguyen</UserNameLabel>
        <ProfileNavBar>

        </ProfileNavBar>
      </ProfilePageHeader>
    </div>
  )
}

