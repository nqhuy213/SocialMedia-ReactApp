import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ProfilePicture from './components/ProfilePicture';
import styled from 'styled-components'
import CoverPhoto from './components/CoverPhoto';
import { editProfileImage, getProfile } from '../../api/profile';
import { Modal } from 'semantic-ui-react';
import ProfileImageForm from './components/ProfileImageForm';
import { uploadImage } from '../../api/upload';



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
    setCurrentUser(res.data.user)
    setAuth(res.data.auth)
  } 

  useEffect(() => {
    fetchProfile(userId)

  },[setAuth, setCurrentUser])

  const handleProfileImageChosen = (file) => {
    setProfileImageFile(file)
  }

  const handleSubmitProfileImage = async (e) => {
    /**Upload image first */
    var imageURL
    if(profileImageFile){
      var formData = new FormData
      formData.append('image', profileImageFile)
      const res = await uploadImage(formData)
      if(res.success){
        imageURL = `${process.env.REACT_APP_API_URL}/${res.data.image.filename}`
      }
    }
    const res = await editProfileImage(currentUser._id, {imageURL})
    window.location.reload(0)
  }

  const handleCoverImageChosen = (e) => {

  }

  return (
    <div className='page-container profile-page'>
      <ProfilePageHeader>
        <HeaderImagesContainer>
          <CoverPhotoContainer>
            <CoverPhoto auth={auth} src={currentUser ? currentUser.coverImageURL : ''}/>
          </CoverPhotoContainer>
          <ProfilePictureContainer>
            <ProfilePicture auth={auth} 
                            src={currentUser ? currentUser.profileImageURL : ''}
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
        <ProfileImageForm 
          closeProfileImageForm = {() => setProfileImageForm(false)}
          handleImageChosen = {handleProfileImageChosen}
          src={currentUser ? currentUser.profileImageURL : ''}     
          handleSubmitImage={handleSubmitProfileImage}
        />
      </Modal>
    </div>
  )
}

