import * as actions from '../actions'
import sortBy from 'sort-by'

import { combineReducers } from 'redux'

const initialPostsState = []
const initialPostSort = "author" 
const initialCategoriesState = []
const initialCommentsState = []
const initialNewPostState = { 'title':'', 'author':'', 'body':'', 'category':'', 'error': '' }


function posts (state = initialPostsState, action) {

    switch (action.type) {
        case actions.GET_ALL_POSTS:
          return action.posts
        case actions.CHANGE_POST_ORDER:
          return [...state].sort(sortBy(action.order))
        case actions.GOT_NEW_POST:
          return [...state, action.post]
        case actions.UPDATE_POST_VOTESCORE:
          return state.map(post => {
            if(post.id === action.post.id) {
              return action.post
            }
            return post
          })
        default:
            return state
    }
}

function newPost (state = initialNewPostState, action){
  switch (action.type){
    case actions.UPDATE_NEW_POST:
      return Object.assign({}, state, { [action.parameter]: action.value })
    case actions.RESET_NEW_POST:
      return Object.assign({},initialNewPostState)
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
    case actions.UPDATE_COMMENT_VOTESCORE:
      return state.map(comment => {
        if(comment.id === action.comment.id) {
          return action.comment
        }
        return comment
      })
    default:
      return state
  }
}

export default combineReducers({
  posts,
  postsOrder,
  newPost,
  categories,
  comments
})
