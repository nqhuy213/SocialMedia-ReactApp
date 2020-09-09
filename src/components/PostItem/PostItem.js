import React, {useState, useEffect} from 'react';
import './PostItem.scss';
import {Segment, Image, Icon, Button} from 'semantic-ui-react';
import AvatarContainer from '../AvatarContainer/AvatarContainer';
import CommentItem from '../CommentItem/CommentItem';
import TextareaAutosize from 'react-textarea-autosize';
import PropTypes from 'prop-types'
import { getUserId } from '../../utils/user';
import { IsLiked } from '../../utils/attachIsLiked';

export default function PostItem(props) {
  const {post, updateLike} = props
  /**States Section */
  const [commentText, setCommentText] = useState('');
  const [showComment, setShowComment] = useState(post.comments.length == 0 ? true : false);


  const onEnterPressed = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      /**Submit the comment */
      handleComment();
    }
  };

  const handleLike = async (e) => {
    updateLike(getUserId(), post._id)
  };

  const handleComment = (e) => {
    
  }

  const handleShowComment = (e) => {
    setShowComment(!showComment)
  } 

  const commentList = post.comments.map(cmt => {
    return (
      <div key={cmt._id} className="comment-item-container">
        <CommentItem comment={cmt} postId={post._id}/>
      </div>)
  })


  return (
    <Segment className="post-item-wrapper">
      <AvatarContainer
        src="https://react.semantic-ui.com/images/wireframe/square-image.png"
        name="My Name"
      />
      <div className="post-description-container">{post.description}</div>
      {post.imageSrc ? (
        <Image className="post-image-wrapper" src={post.imageSrc} />
      ) : null}
      <div className="post-like-number">
        <div id="post-like-label">
          <Icon name="like" size="small" color="red" />
          <span>{post.likes.length}</span>
        </div>
        <span
          className="post-comment-number"
          onClick={handleShowComment}
        >
          {post.comments.length} comments
        </span>
      </div>

      <div className="post-action-container">
        <div className="post-action-wrapper">
          <Button
            className={
              IsLiked(post) ? 'post-action-button liked' : 'post-action-button'
            }
            fluid
            onClick={handleLike}
          >
            Like
          </Button>
          <Button
            className="post-action-button"
            fluid
            onClick={handleShowComment}
          >
            Comment
          </Button>
        </div>
      </div>
      {showComment ? (
        <div className="comment-section-container">
          {commentList}
          <div className="comment-form-container">
            <TextareaAutosize
              className="comment-input"
              value={commentText}
              onChange = {(e) => {setCommentText(e.target.value)}}
              placeholder="Write your comment"
              onKeyDown={onEnterPressed}
            />
          </div>
        </div>
      ) : null}
    </Segment>
  );
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  updateLike: PropTypes.func,
};