import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { initialSocket } from '../../socket/socket'
import { getUserId } from '../../utils/user'
import socketEvent from '../../socket/socketEvent'

export default function useComment(currentComment) {
  const [comment, setComment] = useState(currentComment)
  const userSocketRef = useRef()

  useEffect(() => {

  }, [])

  const sendLike = (data) => {
    userSocketRef.current = initialSocket([getUserId()])
    userSocketRef.current.emit(socketEvent.sendLikeComment, data)
  }

  const sendReply = () => {

  }

  return {comment, sendLike, sendReply}
}
