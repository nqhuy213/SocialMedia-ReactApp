import React from 'react';
import './CommentItem.scss';
import AvatarContainer from '../AvatarContainer/AvatarContainer';
import { Segment } from 'semantic-ui-react';
import useComment from './_useComment';
import { getUserId } from '../../utils/user';

export default function CommentItem({comment: currentComment, postId}) {
  const {comment, sendLike, sendReply} = useComment(currentComment)

  const handleLikeComment = (e) => {
    sendLike({userId: getUserId(), postId, commentId: comment._id})
    
  }

  return (
    <div className='comment-item-wrapper'>
      <div className='avatar-holder'>
        <AvatarContainer src=''/>
      </div>
      <div>
        <Segment className='comment-holder'>
          <span className='commenter-name'>My Name</span>
          <div className='comment-description-label'>{comment.text}</div>
        </Segment>
        <div className='comment-action-container'>
          <div className='comment-action-item like' onClick={handleLikeComment}>Like</div>
          <div className='comment-action-item reply'>Reply</div>
          <span className='date-time-label'>2 days</span>
        </div>
      </div>
    </div>
 )
}

