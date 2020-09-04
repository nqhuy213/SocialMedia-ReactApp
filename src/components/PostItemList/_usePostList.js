import React, {useEffect, useState, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchNewsFeed } from '../../redux/actions/post'
import { initialSocket } from '../../socket/socket'
import { getUserId } from '../../utils/user'

export default function usePostList() {
  const postLoading = useSelector(state => state.NewsFeed.loading)
  const nextCount = useSelector(state => state.NewsFeed.data.posts.nextCount)
  const postItems = useSelector(state => state.NewsFeed.data.posts.items)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchNewsFeed())   

    return () => {
      
    }
  }, [])
  
  return {postItems, nextCount, postLoading}
}
