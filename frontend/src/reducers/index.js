import * as actions from '../actions'
import sortBy from 'sort-by'

import { combineReducers } from 'redux'

const initialPostsState = []
const initialPostSort = "author" 
const initialCategoriesState = []
const initialCommentsState = []


function posts (state = initialPostsState, action) {

    switch (action.type) {
        case actions.GET_ALL_POSTS:
          return action.posts
        case actions.CHANGE_POST_ORDER:
          let newState = state.slice().sort(sortBy(action.order))
          return newState
        default:
            return state
    }
}

function postsOrder (state = initialPostSort, action ){
  switch (action.type){
    case actions.CHANGE_POST_ORDER:
      return action.order
    default:
      return state
  }
}

function categories (state = initialCategoriesState, action ) {
  switch (action.type) {
    case actions.GET_ALL_CATEGORIES:
      return action.categories
    default:
      return state
  } 
}

function comments ( state = initialCommentsState, action) {
  switch (action.type) {
    case actions.GET_POST_COMMENTS:
      return [...state, ...action.comments]
    default:
      return state
  }
}

export default combineReducers({
  posts,
  postsOrder,
  categories,
  comments
})
