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
       return initialState

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
    case types.FETCH_NEWSFEED_FAILURE:
      return{
        ...initialState,
        error: action.payload.error
      }
    
      default: return state
  }
}