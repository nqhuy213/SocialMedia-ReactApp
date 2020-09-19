import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserId } from '../../utils/user'
import { fetchActiveFriends, updateActiveFriend, deleteActiveFriend } from '../../redux/actions/newsFeed'

export default function useActiveFriends() {
  const activeFriends = useSelector(state => state.NewsFeed.data.activeFriends)
  return {activeFriends}
}
