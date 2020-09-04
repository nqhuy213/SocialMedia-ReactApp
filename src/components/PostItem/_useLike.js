import React, {useState, useEffect, useRef} from 'react';
import socketIOClient from 'socket.io-client';
import {getUserId} from '../../utils/user';
import socketMessage from '../../socket/socketEvent';
import {Loader} from 'semantic-ui-react';
import { initialSocket } from '../../socket/socket';
import { generateRoom } from '../../socket/rooms';
import {fetchNewsFeed} from '../../redux/actions/post'
import {useDispatch} from 'react-redux'

export default function useLike(socketRef,currentLikes, postId) {
  const [likes, setLikes] = useState(currentLikes);
  const postSocketRef = useRef()
  const dispatch = useDispatch()
  useEffect(() => {
    const postRoom = generateRoom([postId])
    postSocketRef.current = initialSocket(postRoom)

    postSocketRef.current.on(socketMessage.updateLike, data => {
      dispatch(fetchNewsFeed())
      setLikes(data)
      if(socketRef.current){socketRef.current.disconnect()}
    })

    return () => {
      postSocketRef.current.disconnect()
    }
  }, []);

  const sendLike = (data) => {
    //To server
    socketRef.current.emit(socketMessage.sendLike, data);

  };
  return {likes, sendLike};
}
