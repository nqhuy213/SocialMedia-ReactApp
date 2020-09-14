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

export default function PostForm({closePostForm}) {
  const dispatch = useDispatch();
  const [postDescription, setPostDescription] = useState('');
  const [postImage, setPostImage] = useState('');

  const handleOnChange = (e) => {
    setPostDescription(e.target.value);
  };

  const handleOnSubmit = async () => {
    const result = await postPost({description: postDescription});
    if (result.success) {
      dispatch(addNewPost(result.data));
      closePostForm();
    } else {
      // TODO: handle failure
    }
  };

  const chooseImage = (url) => {
    setPostImage(url);
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
        name="My Name"
      />
      <Form onSubmit={handleOnSubmit}>
        <ShrinkTextArea
          hasImage={postImage ? true : false}
          placeholder="What are your thinking?"
          onChange={handleOnChange}
          value={postDescription}
        />
        {postImage ? 
        <Fragment>
          <CloseImageContainer>
            <CloseButton onClick = {() => chooseImage('')}/>
          </CloseImageContainer>
          <ImagePreview tabIndex={0} src={postImage} fluid /> 
        </Fragment>
        : null}
        <AddFileSection
          postImage={postImage}
          handleImageChosen={chooseImage}
        />
        <Button
          className="post-button"
          type="submit"
          fluid
          disabled={
            (postDescription.trim() === '' && postImage.trim() === '') ? true : false
          }
        >
          Post
        </Button>
      </Form>
    </Segment>
  );
}
