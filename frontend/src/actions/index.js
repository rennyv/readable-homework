import * as api from '../utils/api.js'

export const GET_ALL_POSTS = 'GET_ALL_POSTS'

export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'

export const GET_POST_COMMENTS = 'GET_POST_COMMENTS'
export const CHANGE_POST_ORDER = 'CHANGE_POST_ORDER'


function gotPosts(posts){
  return {
    type: GET_ALL_POSTS,
    posts
  }
}

function gotCategories(categories){
  return {
    type: GET_ALL_CATEGORIES,
    categories
  }
}

export function getAllPosts() {
   return dispatch => {
      api.getAllPosts().then( (data) => {
        dispatch(gotPosts(data))
        data.map( (post) => {
          dispatch(getComments(post.id))
          return post
        })
      }) 
  }
}

export function changePostsOrder(order) {
  return {
    type: CHANGE_POST_ORDER,
    order
  }
}

export function getAllCategories() {
  return dispatch => {
    api.getAllCategories().then ((data) => {
      dispatch(gotCategories(data))
    })
  }
}

export function getComments(postId) {
  return dispatch => {
    api.getCommentsFor(postId).then(comments => {
      dispatch({
        type : GET_POST_COMMENTS,
        comments
      })
    })
  }
}
