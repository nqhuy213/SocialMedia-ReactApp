import React from 'react';
import './PostItemList.scss';
import PostItem from '../PostItem/PostItem';
import PropTypes from 'prop-types'

function PostItemList(props) {
  const {items, onLikePost} = props

  const itemsList = items.map((post) =>
    <div key={post._id} className='post-item-container'>
      <PostItem post={post} updateLike={onLikePost}/>
    </div>
  );
  return (
    <div className='post-list-wrapper'>
      {itemsList}
    </div>
 )
}

PostItemList.propTypes = {
  items: PropTypes.array.isRequired,
  onLikePost: PropTypes.func,
};

export default PostItemList