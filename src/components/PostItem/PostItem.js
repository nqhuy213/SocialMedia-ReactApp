import React from 'react'
import './PostItem.scss'
import { Segment, Image, Icon, Divider, Button, Input, TextArea, Form } from 'semantic-ui-react'
import AvatarContainer from '../AvatarContainer/AvatarContainer'
import CommentItem from '../CommentItem/CommentItem'
import TextareaAutosize from 'react-textarea-autosize'
export default function PostItem({props}) {
  return (
    <Segment className='post-item-wrapper'>
      <AvatarContainer src='https://react.semantic-ui.com/images/wireframe/square-image.png' name='My Name'/>
      <div className='post-description-container'>
      He heard the loud impact before he ever saw the result. It had been so loud that it had actually made him jump back in his seat. As soon as he recovered from the surprise, he saw the crack in the windshield. It seemed to be an analogy of the current condition of his life.
      </div>
      <div className='post-like-number'>
        <div id='post-like-label'>
          <Icon name='like' size='small' color='red'/>
          <span>14</span>
        </div>
        <span id='post-comment-label'>50 comments</span>
      </div>
      
      <div className='post-action-container'>
        <div className='post-action-wrapper'>
          <Button className='post-action-button' fluid>Like</Button>
          <Button className='post-action-button' fluid>Comment</Button>
        </div>
      </div>

      <div className='comment-section-container'>
        <div className='comment-item-container'>
          <CommentItem description='He heard the loud impact before he ever saw the result. It had been so loud that it had actually made him jump back in his seat. As soon as he recovered from the surprise, he saw the crack in the windshield. It seemed to be an analogy of the current condition of his life.'/>
        </div>
        <div className='comment-item-container'>
          <CommentItem description='alo aloaloaloaloaloaloaloalaoalo'/>
        </div>
        <div className='comment-item-container'>
          <CommentItem description='alo aloaloaloaloaloaloaloalaoalo'/>
        </div>
        <form className='comment-form-container'>
          <TextareaAutosize className='comment-input' placeholder='Write your comment' />
        </form>
      </div>
      
    </Segment>
  )
}
