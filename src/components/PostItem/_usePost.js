import React, {useState, useEffect, useRef} from 'react';
import socketMessage from '../../socket/socketEvent';
import { initialSocket } from '../../socket/socket';
import { generateRoom } from '../../socket/rooms';
import {fetchNewsFeed, fetchComments, updatePost} from '../../redux/actions/post'
import {useDispatch, useSelector} from 'react-redux'
import { getUserId } from '../../utils/user';
import { attachIsLiked } from '../../utils/attachIsLiked';

export default function usePost(currentPost) {
  const userSocketRef = useRef()
  const post = useSelector(state => {
    var index = state.NewsFeed.data.posts.items.findIndex(p => p._id === currentPost._id)
    var p = state.NewsFeed.data.posts.items[index]
    p = attachIsLiked(p, getUserId())
    return p
  })
  const postSocketRef = useRef()
  const dispatch = useDispatch()
  
  useEffect(() => {
    const postRoom = generateRoom([post._id])

    postSocketRef.current = initialSocket(postRoom)

    postSocketRef.current.on(socketMessage.updatePost, data => {
      dispatch(updatePost(data))
      if(userSocketRef.current){userSocketRef.current.disconnect()}
    })

    return () => {
      postSocketRef.current.disconnect()
    }
  }, []);

  const getComments = () => {
  }

  const sendLike = (data) => {
    //To server
    const room = generateRoom([getUserId()])
    userSocketRef.current = initialSocket(room)
    userSocketRef.current.emit(socketMessage.sendLike, data);
  };

  const sendComment = (data) => {
    //To server
    const room = generateRoom([getUserId()])
    userSocketRef.current = initialSocket(room)
    userSocketRef.current.emit(socketMessage.sendComment, data)
  }
  return {post, getComments, sendLike, sendComment};
}
