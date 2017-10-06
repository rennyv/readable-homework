import { comments } from '../comments/commentsReducer'
import { posts } from '../posts/postsReducer'
import { newPost } from '../newPosts/newPostReducer'
import { postsOrder } from '../postsOrder/postsOrderReducer'
import { categories } from '../categories/categoriesReducer'
import { combineReducers } from 'redux'

export default combineReducers({
  posts,
  postsOrder,
  newPost,
  categories,
  comments
})
