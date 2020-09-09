import {combineReducers} from 'redux'

import NewsFeed from './reducers/NewsFeedReducer'
import Socket from './reducers/SocketReducer'
import Auth from './reducers/AuthReducer'


export default combineReducers ({
  NewsFeed,
  Socket,
  Auth
})

