import * as api from '../utils/api.js'

export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const UPDATE_POST_VOTESCORE = 'UPDATE_POST_VOTESCORE'

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
        dispatch(changePostsOrder("author"))
        data.map( (post) => {
          dispatch(getComments(post.id))
          return post
        })
      }) 
  }
}

function gotVoteUpdate(postId, vote){
  return {
    type: UPDATE_POST_VOTESCORE,
    postId,
    vote
  }
}

export function updateVoteScore(postId, vote){
  return dispatch => {
    api.updatePostVoteScore(postId, vote).then((data) => {
      dispatch(gotVoteUpdate(postId, vote))
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
