import React, {useRef, useState} from 'react';
import './PostItem.scss';
import {Segment, Image, Icon, Button} from 'semantic-ui-react';
import AvatarContainer from '../AvatarContainer/AvatarContainer';
import CommentItem from '../CommentItem/CommentItem';
import TextareaAutosize from 'react-textarea-autosize';
import {getUserId} from '../../utils/user';
import {initialSocket} from '../../socket/socket';
import {generateRoom} from '../../socket/rooms';
import usePost from './_usePost';

export default function PostItem({post: currentPost}) {
  /**States Section */
  const [commentText, setCommentText] = useState('');
  var {post, getComments, sendLike, sendComment} = usePost(currentPost);
  const [showComment, setShowComment] = useState(false);

  const onEnterPressed = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      /**Submit the comment */
      handleComment();
    }
  };

  const handleLike = async (e) => {
    const postId = post._id;
    const userId = getUserId();
    const room = generateRoom([userId]);
    sendLike({userId, postId, room});
  };

  const handleComment = (e) => {
    const postId = post._id
    const userId = getUserId()
    const room = generateRoom([userId])
    sendComment({userId, postId, text: commentText})
  }

  const handleShowComment = (e) => {
    setShowComment(!showComment)
    if(!showComment){
      /**Get Comment here */
      getComments()
    }
  } 

  const commentList = post.comments.map(cmt => {
    return (
      <div key={cmt._id} className="comment-item-container">
        <CommentItem commentId={cmt._id}/>
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
              post.isLiked ? 'post-action-button liked' : 'post-action-button'
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