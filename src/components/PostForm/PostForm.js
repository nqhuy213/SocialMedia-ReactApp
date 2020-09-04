import React, { useState, useContext } from 'react'
import {useDispatch} from 'react-redux'
import './PostForm.scss'
import { Segment, Divider, Image, Form, TextArea, Button } from 'semantic-ui-react'
import AvatarContainer from '../AvatarContainer/AvatarContainer'
import { postPost } from '../../api/post'
import { getUserId } from '../../utils/user'
import { initialSocket } from '../../socket/socket'
import socketEvent from '../../socket/socketEvent'
import { addNewPost } from '../../redux/actions/post'
export default function PostForm({closePostForm}) {
  const dispatch = useDispatch()
  const [postDescription, setPostDescription] = useState('')
  const handleOnChange = (e) => {
    setPostDescription(e.target.value)
  }

  const handleOnSubmit = async () => {
    const result = await postPost({description: postDescription})
    if(result.success) {
      dispatch(addNewPost(result.data))
      closePostForm()
    }else{
      // TODO: handle failure
    }
  }

  return (
    <Segment className='post-form-wrapper'>
      <h1 className='title'>Create Post</h1>
      <Divider/>
      <AvatarContainer src='https://react.semantic-ui.com/images/wireframe/square-image.png' name='My Name'/>
      <Form onSubmit={handleOnSubmit}>
        <TextArea className='post-description-textarea' 
          placeholder="What are your thinking?" 
          onChange={handleOnChange}
          value={postDescription}/>
        <Button className='post-button' type='submit' fluid disabled={postDescription.trim() == '' ? true : false}>
          Post
        </Button>
      </Form>
      
    </Segment>
  )
}
