import React from 'react'
import './PostForm.scss'
import { Segment, Divider, Image, Form, TextArea, Button } from 'semantic-ui-react'
export default function PostForm() {
  return (
    <Segment className='post-form-wrapper'>
      <h1 className='title'>Create Post</h1>
      <Divider/>
      <div className='avatar-container'>
        <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' className='avatar-img' circular />
        <span className='user-name-label'>My Name</span>
      </div>
      <Form>
        <TextArea className='post-description-textarea' placeholder="What are your thinking?"/>
      </Form>
      <Button className='post-button' fluid >
        Post
      </Button>
    </Segment>
  )
}
