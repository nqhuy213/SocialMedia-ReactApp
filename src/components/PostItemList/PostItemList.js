import React from 'react';
import './PostItemList.scss';
import PostItem from '../PostItem/PostItem';
export default function PostItemList({posts, ...props}) {
 return (
   <div className='post-list-wrapper'>
      <div className='post-item-container'>
        <PostItem imageSrc='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'/>
      </div>
      <div className='post-item-container'>
        <PostItem />
      </div>
      <div className='post-item-container'>
        <PostItem/>
      </div>
   </div>
 )
}