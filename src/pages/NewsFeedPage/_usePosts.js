import { useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchNewsFeed, updatePost } from '../../redux/actions/newsFeed'

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

  const likeComment = ({userId, postId, commentId}) => {
    socket.emit('like_comment', {userId, postId, commentId})
  }
  
  useEffect(() => {
    dispatch(fetchNewsFeed())
    if(socket){
      socket.on('update_post', (post) => {
        dispatch(updatePost(post))
      })
    }
  },[socket, dispatch])

  return {posts, likePost, commentPost, likeComment}
}
