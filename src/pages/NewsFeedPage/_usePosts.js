import { useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchNewsFeed, fetchNewsFeedMore, updateNewsFeedPost } from '../../redux/actions/newsFeed'

export default function usePosts() {
  const posts = useSelector(state => state.NewsFeed.data.posts.items)
  const socket = useSelector(state => state.Socket.socket)
  const nextCount = useSelector(state => state.NewsFeed.data.posts.nextCount)
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

  const getMorePost = () => {
    // dispatch(fetchNewsFeedMore({nextCount}))
    console.log('Get more post');
  }
  
  useEffect(() => {
    dispatch(fetchNewsFeed())
    if(socket){
      socket.on('update_post', (post) => {
        dispatch(updateNewsFeedPost(post))
      })
    }
  },[socket, dispatch])

  return {posts, likePost, commentPost, likeComment, getMorePost}
}
