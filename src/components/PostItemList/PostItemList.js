import React, {useEffect} from 'react';
import './PostItemList.scss';
import PostItem from '../PostItem/PostItem';
import { useSelector, useDispatch } from 'react-redux'
import { fetchNewsFeed } from '../../redux/actions/post'
import usePostList from './_usePostList';

export default function PostItemList() {
  const {postItems, nextCount, postLoading} = usePostList()

  const itemsList = postItems.map((post) =>
    <div key={post._id} className='post-item-container'>
      <PostItem post={post}/>
    </div>
  );
  return (
    <div className='post-list-wrapper'>
      {itemsList}
    </div>
 )
}