import React, {useEffect} from 'react';
import AvatarContainer from '../AvatarContainer/AvatarContainer';
import PropTypes from 'prop-types';
import moment from 'moment';
import {getUserId} from '../../utils/user';
import LikeIcon from '../LikeIcon';
import {IsLiked} from '../../utils/attachIsLiked';
import '../../styles/shared.scss';

import {
  CommentItemWrapper,
  LikeCountLabel,
  LikeCountWrapper,
  CommentActionItem,
  CommentLikeAction,
  CommentReplyAction,
  CommentHolder,
  CommenterNameLabel,
  CommentDescriptionLabel,
  CommentActionContainer,
  DateTimeLabel
} from './style';

export default function CommentItem(props) {
  const {comment} = props;

  const handleLikeComment = () => {
    props.likeComment({
      userId: getUserId(),
      postId: comment.postId,
      commentId: comment._id,
    });
  };

  useEffect(() => {
    console.log(props.isLiked);
  }, [props.isLiked]);
  return (
    <CommentItemWrapper>
      <AvatarContainer src="" />
      <div>
        <CommentHolder>
          <CommenterNameLabel>
            {comment.postedBy.firstName + ' ' + comment.postedBy.lastName}
          </CommenterNameLabel>
          <CommentDescriptionLabel>{comment.text}</CommentDescriptionLabel>
          {comment.likes.length > 0 ? (
            <LikeCountWrapper>
              <LikeIcon />
              <LikeCountLabel>{comment.likes.length}</LikeCountLabel>
            </LikeCountWrapper>
          ) : null}
        </CommentHolder>
        <CommentActionContainer>
          <CommentActionItem onClick={handleLikeComment}>
            <CommentLikeAction isLiked={IsLiked(comment)}>
              Like
            </CommentLikeAction>
          </CommentActionItem>
          <CommentActionItem>
            <CommentReplyAction>Reply</CommentReplyAction>
          </CommentActionItem>
          <DateTimeLabel>
            {moment(comment.createdAt).fromNow()}
          </DateTimeLabel>
        </CommentActionContainer>
      </div>
    </CommentItemWrapper>
  );
}

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
  likeComment: PropTypes.func,
};
