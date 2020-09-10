import React, { useEffect, useRef } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchNewsFeed, updatePost } from '../../redux/actions/post'
import { getUserId } from '../../utils/user'

export default function usePosts() {
  const posts = useSelector(state => state.NewsFeed.data.posts.items)
  const socket = useSelector(state => state.Socket.socket)
  const dispatch = useDispatch()

  const likePost = ({userId, postId}) => {
    socket.emit('like_post', {userId, postId})
  }

  const commentPost = ({userId, postId, commentData}) => {
    socket.emit('comment_post', {userId, postId, commentData})
  }

  useEffect(() => {
    dispatch(fetchNewsFeed())
    if(socket){
      socket.on('update_post', (post) => {
        dispatch(updatePost(post))
      })
    }
  },[socket])

  return {posts, likePost, commentPost}
}
