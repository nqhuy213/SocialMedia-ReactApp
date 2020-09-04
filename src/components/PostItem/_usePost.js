import React, {useState, useEffect, useRef} from 'react';
import socketMessage from '../../socket/socketEvent';
import { initialSocket } from '../../socket/socket';
import { generateRoom } from '../../socket/rooms';
import {fetchNewsFeed, fetchComments} from '../../redux/actions/post'
import {useDispatch, useSelector} from 'react-redux'
import { getUserId } from '../../utils/user';

export default function usePost(socketRef, currentPost) {
  const [post,setPost] = useState(currentPost)
  const newPost = useSelector(state => {
    var index = state.data.posts.items.findIndex(p => p._id === post._id)
    return state.data.posts.items[index]
  })
  const isLikedRef = useRef(false)
  const postSocketRef = useRef()
  const dispatch = useDispatch()
  
  useEffect(() => {
    const userId = getUserId()
    const likeList = post.likes.map(l => {
      return l.likedBy
    })
    if(likeList.includes(userId)){
      isLikedRef.current = true 
    }else{
      isLikedRef.current = false
    }

    const postRoom = generateRoom([post._id])

    postSocketRef.current = initialSocket(postRoom)

    postSocketRef.current.on(socketMessage.updatePost, data => {
      dispatch(fetchNewsFeed())
      isLikedRef.current = !isLikedRef.current
      setPost(post => data)
      if(socketRef.current){socketRef.current.disconnect()}
    })

    return () => {
      postSocketRef.current.disconnect()
    }
  }, [setPost]);

  const getComments = () => {
    dispatch(fetchComments({postId: post._id}))
    
    setPost(newPost)
  }

  const sendLike = (data) => {
    //To server
    socketRef.current.emit(socketMessage.sendLike, data);
  };

  const sendComment = (data) => {
    //To server
    socketRef.current.emit(socketMessage.sendComment, data)
  }
  return {post:{...post, isLiked: isLikedRef.current}, getComments, sendLike, sendComment};
}
