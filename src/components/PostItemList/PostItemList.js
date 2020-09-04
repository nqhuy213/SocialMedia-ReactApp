import React, {useEffect} from 'react';
import './PostItemList.scss';
import PostItem from '../PostItem/PostItem';
import { useSelector, useDispatch } from 'react-redux'
import { fetchNewsFeed } from '../../redux/actions/post'

export default function PostItemList() {
  const postLoading = useSelector(state => state.NewsFeed.loading)
  const nextCount = useSelector(state => state.NewsFeed.data.posts.nextCount)
  const postItems = useSelector(state => state.NewsFeed.data.posts.items)
  
  const dispatch = useDispatch()

  useEffect(() => {
    const params = {
      nextCount
    }
    dispatch(fetchNewsFeed())
  }, [])

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