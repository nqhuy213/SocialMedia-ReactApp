import React from 'react';
import './CommentItem.scss';
import AvatarContainer from '../AvatarContainer/AvatarContainer';
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types'
import moment from 'moment'
import { getUserId } from '../../utils/user';
import styled from 'styled-components'
import LikeIcon from '../LikeIcon';

const LikeCountWrapper = styled.section`
  position:absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  box-shadow:0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 15px;
  top: 79%;
  left: 80%;
`

const LikeCountLabel = styled.span`
  font-size: 0.9rem
`

export default function CommentItem(props) {
  const {comment} = props

  const handleLikeComment = () => {
    props.likeComment({userId: getUserId(), postId: comment.postId, commentId: comment._id})
  }

  return (
    <div className='comment-item-wrapper'>
      <div className='avatar-holder'>
        <AvatarContainer src=''/>
      </div>
      <div>
        <Segment className='comment-holder'>
          <span className='commenter-name'>{comment.postedBy.firstName + " " + comment.postedBy.lastName}</span>
          <div className='comment-description-label'>{comment.text}</div>
          {
            comment.likes.length > 0 ?
            <LikeCountWrapper>
              <LikeIcon/>
              <LikeCountLabel>{comment.likes.length}</LikeCountLabel>
            </LikeCountWrapper> 
            : null
          }
        </Segment>
        <div className='comment-action-container'>
          <div className='comment-action-item like' onClick={handleLikeComment}>Like</div>
          <div className='comment-action-item reply'>Reply</div>
          <span className='date-time-label'>{moment(comment.createdAt).fromNow()}</span>
        </div>
      </div>
    </div>
 )
}

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
  likeComment: PropTypes.func,
};

