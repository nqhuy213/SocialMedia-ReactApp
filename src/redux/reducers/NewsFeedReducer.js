import * as types from '../types'

const initialState = {
  loading: true,
  data: {
    posts:{
      items:[],
      nextCount:0,
    }
    
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
            items: [ action.payload.post,...state.data.posts.items]
          }
        }
      }

    case types.FETCH_COMMENTS_SUCCESS:
      var finalState = state
      var index = finalState.data.posts.items.findIndex(p => p._id === action.payload.postId)
      finalState.data.posts.items[index].comments = action.payload.comments
      return finalState
    
    case types.UPDATE_POST_SUCCESS:
      var finalState = state
      var index = finalState.data.posts.items.findIndex(p => p._id === action.payload.post._id)
      finalState.data.posts.items[index] = action.payload.post
      return finalState

    default: return state
  }
}