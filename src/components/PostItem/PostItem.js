import React, {useState} from 'react';
import './PostItem.scss';
import {Segment, Image, Icon, Button} from 'semantic-ui-react';
import AvatarContainer from '../AvatarContainer/AvatarContainer';
import CommentItem from '../CommentItem/CommentItem';
import TextareaAutosize from 'react-textarea-autosize';
import PropTypes from 'prop-types';
import {getUserId} from '../../utils/user';
import {IsLiked} from '../../utils/attachIsLiked';
import moment from 'moment'
import LikeIcon from '../LikeIcon';


export default function PostItem(props) {
  const {post, likePost, commentPost, likeComment} = props;
  /**States Section */
  const [commentText, setCommentText] = useState('');
  const [showComment, setShowComment] = useState(
    post.comments.length === 0 ? true : false
  );

  const onEnterPressed = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      /**Submit the comment */
      if(commentText.trim() === '') return
      handleComment();
    }
  };

  const handleLike = async (e) => {
    likePost({userId: getUserId(), postId: post._id});
  };

  const handleComment = (e) => {
    commentPost({
      userId: getUserId(),
      postId: post._id,
      commentData: {
        text: commentText,
      },
    });
    setCommentText('')
  };

  const handleShowComment = (e) => {
    setShowComment(!showComment);
  };

  const commentList = post.comments.map((cmt) => {
    return (
      <div key={cmt._id} className="comment-item-container">
        <CommentItem comment={cmt} likeComment={likeComment}/>
      </div>
    );
  });

  return (
    <Segment className="post-item-wrapper">
      <AvatarContainer
        src="https://react.semantic-ui.com/images/wireframe/square-image.png"
        name={post.postedBy.firstName + " " + post.postedBy.lastName}
        meta={moment(post.createdAt).fromNow()}
      />
      <div className="post-description-container">{post.description}</div>
      {post.imageSrc ? (
        <Image className="post-image-wrapper" src={post.imageSrc} />
      ) : null}
      <div className="post-like-number">
        <div id="post-like-label">
          <LikeIcon/>
          <span>{post.likes.length}</span>
        </div>
        <span className="post-comment-number" onClick={handleShowComment}>
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
              onChange={(e) => {
                setCommentText(e.target.value);
              }}
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
  likePost: PropTypes.func,
  commentPost: PropTypes.func,
  likeComment: PropTypes.func,
};
