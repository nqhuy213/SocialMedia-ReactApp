import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { history } from '../../history'

export default function ProfilePage() {
  let {userId} = useParams()

  useEffect(() => {
    console.log(userId);
  },[])

  return (
    <div className='page-container profile-page'>
      
    </div>
  )
}
