import * as api from '../utils/api.js'

export const GET_ALL_POSTS = 'GET_ALL_POSTS'

export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'

export const SORT_CHANGE_DIRECTION = 'SORT_CHANGE_DIRECTION'
export const SORT_CHANGE_COLUMN = 'SORT_CHANGE_COLUMN'

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
      }) // {"posts": []}//api.getAllPosts()
  }
}

export function getAllCategories() {
  return dispatch => {
    api.getAllCategories().then ((data) => {
      dispatch(gotCategories(data))
    })
  }
}
