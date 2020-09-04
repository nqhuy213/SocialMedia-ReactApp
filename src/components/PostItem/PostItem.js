import React, { useRef, useState } from 'react'
import './PostItem.scss'
import { Segment, Image, Icon, Divider, Button, Input, TextArea, Form } from 'semantic-ui-react'
import AvatarContainer from '../AvatarContainer/AvatarContainer'
import CommentItem from '../CommentItem/CommentItem'
import TextareaAutosize from 'react-textarea-autosize'
import { likePost } from '../../api/post'
import useLike from '../PostItem/_useLike'
import { getUserId } from '../../utils/user'
import { initialSocket } from '../../socket/socket'
import { generateRoom } from '../../socket/rooms'

export default function PostItem({post}) {
  /**States Section */
 
  const postId = post._id
  const [showComment, setShowComment] = useState(false)
  const [isLiked, setIsLiked] = useState(post.isLiked)
  const [postLikes, setLikes] = useState(post.likes)

  
  
  var socketRef = useRef()
  var commentFormRef = useRef(null)
  var {likes, sendLike} = useLike(socketRef, postLikes, postId)
  

  const onEnterPressed = (e) => {
    if(e.keyCode === 13 && e.shiftKey === false){
      e.preventDefault()
      /**Submit the comment */
    }
  }

  const handleLike = async (e) => {
    const userId = getUserId()
    const room = generateRoom([userId, postId])
    socketRef.current = initialSocket(room)
    sendLike({userId, postId, room})
    setIsLiked(!isLiked)
  }

  
  return (
    <Segment className='post-item-wrapper'>
      <AvatarContainer src='https://react.semantic-ui.com/images/wireframe/square-image.png' name='My Name'/>
      <div className='post-description-container'>
        {post.description}
      </div>
      {
        post.imageSrc ? 
        <Image className='post-image-wrapper' src={post.imageSrc}/> :
        null
      }
      <div className='post-like-number'>
        <div id='post-like-label'>
          <Icon name='like' size='small' color='red'/>
          <span>{likes.length}</span>
        </div>
        <span className='post-comment-number' onClick={() => {setShowComment(!showComment)}}>{post.comments.length} comments</span>
      </div>
      
      <div className='post-action-container'>
        <div className='post-action-wrapper'>
          <Button className={isLiked ? 'post-action-button liked' : 'post-action-button'} fluid onClick={handleLike}>Like</Button>
          <Button className='post-action-button' fluid onClick={() => {setShowComment(!showComment)}}>Comment</Button>
        </div>
      </div>
      {showComment ? 
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
          <div className='comment-form-container'>
            <TextareaAutosize className='comment-input' placeholder='Write your comment' onKeyDown={onEnterPressed}/>
          </div>
        </div>
        :null
      }
      
      
    </Segment>
  )
}
