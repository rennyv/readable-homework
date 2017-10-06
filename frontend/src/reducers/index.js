import * as actions from '../actions'
import { comments } from './comments'
import { posts } from './posts'
import { newPost } from './newPost'
import { postsOrder } from './postsOrder'
import { categories } from './categories'
import { combineReducers } from 'redux'

export default combineReducers({
  posts,
  postsOrder,
  newPost,
  categories,
  comments
})
