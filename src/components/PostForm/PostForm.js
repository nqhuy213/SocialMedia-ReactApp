import React, { useState } from 'react'
import './PostForm.scss'
import { Segment, Divider, Image, Form, TextArea, Button } from 'semantic-ui-react'
import AvatarContainer from '../AvatarContainer/AvatarContainer'
export default function PostForm() {

  const [postDescription, setPostDescription] = useState('')

  const handleOnChange = (e) => {
    setPostDescription(e.target.value)
  }

  return (
    <Segment className='post-form-wrapper'>
      <h1 className='title'>Create Post</h1>
      <Divider/>
      <AvatarContainer src='https://react.semantic-ui.com/images/wireframe/square-image.png' name='My Name'/>
      <Form>
        <TextArea className='post-description-textarea' 
          placeholder="What are your thinking?" 
          onChange={handleOnChange}
          value={postDescription}/>
      </Form>
      <Button className='post-button' fluid disabled={postDescription.trim() == '' ? true : false}>
        Post
      </Button>
    </Segment>
  )
}
