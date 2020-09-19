import React, {Fragment, useState} from 'react';
import {useDispatch} from 'react-redux';
import './PostForm.scss';
import {
  Segment,
  Divider,
  Form,
  TextArea,
  Button,
  Image,
  Icon, Header
} from 'semantic-ui-react';
import AvatarContainer from '../../../components/AvatarContainer/AvatarContainer';
import {postPost} from '../../../api/post';
import {addNewPost} from '../../../redux/actions/newsFeed';
import AddFileSection from './AddFileSection';
import styled from 'styled-components';
import CloseButton from '../../../components/CloseButton/CloseButton';
import UploadImageService, { uploadImage } from '../../../api/upload'
import axios from 'axios'
import { callAPI } from '../../../api/base';

const PostFormHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
`

const CloseFormContainer = styled.div `
  margin-left: auto;
`

const PostFormHeader = styled.h1`
  position: relative;
`

const CloseImageContainer = styled.div `
  position:relative;
  max-height: fit-content;
  max-width: fit-content;
  left: 94%;
  top: 33px;
  z-index: 2;
`

const ImagePreview = styled(Image)`
  margin-bottom: 1.5rem;
`;
const ShrinkTextArea = styled(({hasImage, ...props}) => <TextArea {...props}/>)`
  resize: none !important;
  border: none !important;
  font-size: 25px !important;
  height: ${(props) => (props.hasImage ? 'none' : '200px')};
  padding: 0 !important;
  margin-top: 20px !important;
`;

export default function PostForm({closePostForm, user}) {
  const dispatch = useDispatch();
  const [postDescription, setPostDescription] = useState('');
  const [postImageUrl, setPostImageUrl] = useState('');
  const [postImageFile, setPostImageFile] = useState(null);
  
  const handleOnChange = (e) => {
    setPostDescription(e.target.value);
  };

  const handleOnSubmit = async () => {
    let imageURL
    if(postImageFile){
      var formData = new FormData
      formData.append('image', postImageFile)
      const result = await uploadImage(FormData)
    }
    
    // const result = await postPost({description: postDescription});
    // if (result.success) {
    //   dispatch(addNewPost(result.data));
    //   closePostForm();
    // } else {
    //   // TODO: handle failure
    // }
  };

  const chooseImage = (e) => {
    const reader = new FileReader()
    if(e.target.files[0]){
      setPostImageFile(e.target.files[0])
      reader.readAsDataURL(e.target.files[0])
      reader.onloadend = () => {
          setPostImageUrl(reader.result)
      }
    }
    e.target.value = null
  }
  
  return (
    <Segment className="post-form-wrapper">
      <PostFormHeaderContainer>
        <PostFormHeader className="title">Create Post</PostFormHeader>
        <CloseFormContainer>
          <CloseButton onClick = {closePostForm}/>
        </CloseFormContainer>
      </PostFormHeaderContainer>
      <Divider />
      <AvatarContainer
        src="https://react.semantic-ui.com/images/wireframe/square-image.png"
        name={`${user.firstName} ${user.lastName}`}
      />
      <Form onSubmit={handleOnSubmit}>
        <ShrinkTextArea
          hasImage={postImageUrl ? true : false}
          placeholder="What are your thinking?"
          onChange={handleOnChange}
          value={postDescription}
        />
        {postImageUrl ? 
        <Fragment>
          <CloseImageContainer>
            <CloseButton onClick = {() => setPostImageUrl('')}/>
          </CloseImageContainer>
          <ImagePreview tabIndex={0} src={postImageUrl} fluid /> 
        </Fragment>
        : null}
        <AddFileSection
          postImage={postImageUrl}
          handleImageChosen={chooseImage}
        />
        <Button
          className="post-button"
          type="submit"
          fluid
          disabled={
            (postDescription.trim() === '' && postImageUrl.trim() === '') ? true : false
          }
        >
          Post
        </Button>
      </Form>
    </Segment>
  );
}
