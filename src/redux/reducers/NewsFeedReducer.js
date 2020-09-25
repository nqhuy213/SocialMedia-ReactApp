import * as types from '../types'

const initialState = {
  loading: true,
  data: {
    posts:{
      items:[],
      nextCount:0,
    },
    activeFriends: []
  },
  error: null
}

export default function NewsFeed(state = initialState, action = {}){
  switch (action.type){
    case types.FETCH_NEWSFEED_BEGIN:
       return {
         ...state,
         loading: true
       }

    case types.FETCH_NEWSFEED_SUCCESS:
      return {
        ...state,
        loading: false,
        data:{
          ...state.data,
          posts:{
            items: action.payload.result,
            nextCount: 1,
          }
        }
      }
    case types.FETCH_NEWSFEED_MORE_SUCCESS:
      return {
        ...state,
        loading: false,
        data:{
          ...state.data,
          posts:{
            items: [...state.data.posts.items, ...action.payload.result],
            nextCount: state.data.state.nextCount++,
          }
        }
      }
    case types.FETCH_NEWSFEED_FAILURE:
      return{
        ...initialState,
        loading: false,
        error: action.payload.error
      }
    
    case types.ADD_NEW_POST: 
      return{
        ...state,
        data: {
          ...state.data,
          posts: {
            ...state.data.posts,
            items: [ action.payload.post,...state.data.posts.items]
          }
        }
      }

    case types.UPDATE_NEWSFEED_POST_SUCCESS:
      return {
        ...state,
        data:{
          ...state.data,
          posts: {
            ...state.data.posts,
            items: state.data.posts.items.map((post) => post._id === action.payload.post._id ? {...post, ...action.payload.post} : {...post})
          }
        }
      }

    case types.FETCH_ACTIVE_FRIENDS: 
      return {
        ...state,
        data:{
          ...state.data,
          activeFriends: action.payload
        }
      }

    case types.UPDATE_ACTIVE_FRIEND:
      return {
        ...state,
        data: {
          ...state.data,
          activeFriends: [...state.data.activeFriends, action.payload]
        }
      }
    
    case types.DELETE_ACTIVE_FRIEND:

      return {
        ...state,
        data: {
          ...state.data,
          activeFriends: [...state.data.activeFriends.filter(f => f._id !== action.payload)]
        }
      }
    default: return state
  }
}