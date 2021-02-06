import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ProfilePicture from './components/ProfilePicture';
import styled from 'styled-components'
import CoverPhoto from './components/CoverPhoto';
import { getProfile } from '../../api/profile';
import { Modal } from 'semantic-ui-react';
import ProfileImageForm from './components/ProfileImageForm';



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
  const [currentUser, setCurrentUser] = useState(null)
  const [auth, setAuth] = useState(['read'])

  const [profileImageForm, setProfileImageForm] = useState(false)
  const [profileImageFile, setProfileImageFile] = useState(null)
  const [profileImageURL, setProfileImageURL] = useState(null)

  const [coverImageFile, setCoverImageFile] = useState(null)
  const [coverImageURL, setCoverImageURL] = useState(null)

  const fetchProfile = async (userId) => {
    const res = await getProfile(userId)
    console.log(res);
    setCurrentUser(res.data.user)
    setAuth(res.data.auth)
  } 

  useEffect(() => {
    fetchProfile(userId)

  },[setAuth, setCurrentUser])

  const handleProfileImageChosen = (e) => {
    const reader = new FileReader()
    if(e.target.files[0]){
      setProfileImageFile(e.target.files[0])
      reader.readAsDataURL(e.target.files[0])
      reader.onloadend = () => {
        setProfileImageURL(reader.result)
      }
    }
    e.target.value = null
  }

  const handleCoverImageChosen = (e) => {

  }
  return (
    <div className='page-container profile-page'>
      <ProfilePageHeader>
        <HeaderImagesContainer>
          <CoverPhotoContainer>
            <CoverPhoto auth={auth} src='https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png'/>
          </CoverPhotoContainer>
          <ProfilePictureContainer>
            <ProfilePicture auth={auth} 
                            src='https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png'
                            handleProfileImageChosen={handleProfileImageChosen}
                            openProfileImageForm = {() => setProfileImageForm(true)}
                            
                            />
          </ProfilePictureContainer>
        </HeaderImagesContainer>
        <UserNameLabel>
          {currentUser ? currentUser.firstName + " " + currentUser.lastName : null }          
        </UserNameLabel>
        <ProfileNavBar>

        </ProfileNavBar>
      </ProfilePageHeader>
      <Modal
        basic
        size="tiny"
        dimmer="inverted"
        open={profileImageForm}
        onClose={() => setProfileImageForm(false)}
      >
        <ProfileImageForm closeProfileImageForm = {() => setProfileImageForm(false)}/>
      </Modal>
    </div>
  )
}

