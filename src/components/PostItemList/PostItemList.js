import React from 'react';
import './PostItemList.scss';
import PostItem from '../PostItem/PostItem';
import PropTypes from 'prop-types'
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll';

function PostItemList(props) {
  const {items, likePost, commentPost, likeComment} = props

  const itemsList = items.map((post) =>
    <div key={post._id} className='post-item-container'>
      <PostItem post={post} likePost={likePost} commentPost={commentPost} likeComment={likeComment}/>
    </div>
    
  );
  return (
    <div className='post-list-wrapper'>
      <InfiniteScroll bottomCallback={() => console.log('At the bottom')}>
       {itemsList}
      </InfiniteScroll>
    </div>
 )
}

PostItemList.propTypes = {
  items: PropTypes.array.isRequired,
  likePost: PropTypes.func,
  commentPost: PropTypes.func,
  likeComment: PropTypes.func,
};

export default PostItemList