import React, {useState, useEffect, useRef} from 'react';
import socketMessage from '../../socket/socketEvent';
import { initialSocket } from '../../socket/socket';
import { generateRoom } from '../../socket/rooms';
import {fetchNewsFeed} from '../../redux/actions/post'
import {useDispatch} from 'react-redux'
import { getUserId } from '../../utils/user';

export default function usePost(socketRef, currentPost) {
  const [post,setPost] = useState(currentPost)

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

  const sendLike = (data) => {
    //To server
    socketRef.current.emit(socketMessage.sendLike, data);
  };
  return {post:{...post, isLiked: isLikedRef.current}, sendLike};
}
