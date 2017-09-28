import * as api from '../utils/api.js'

export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GOT_NEW_POST = 'GOT_NEW_POST'
export const UPDATE_POST_VOTESCORE = 'UPDATE_POST_VOTESCORE'
export const REMOVE_POST = 'REMOVE_POST'

export const UPDATE_NEW_POST = 'UPDATE_NEW_POST'
export const RESET_NEW_POST = 'RESET_NEW_POST'

export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'

export const GET_POST_COMMENTS = 'GET_POST_COMMENTS'
export const UPDATE_COMMENT_VOTESCORE = 'UPDATE_COMMENT_VOTESCORE'

export const CHANGE_POST_ORDER = 'CHANGE_POST_ORDER'

/*----------New Posts---------------*/

export function updateNewPost(parameter, value){
  return {
    type: UPDATE_NEW_POST,
    parameter,
    value
  }
}

function resetNewPost(){
  return {
    type: RESET_NEW_POST
  }
}

export function createNewPost(newPost, order){
  return dispatch => {
    api.createNewPost(newPost).then((post) => {
      dispatch(resetNewPost())
      dispatch(gotNewPost(post))
      dispatch(changePostsOrder(order))
    })    
  }
}


/*----------Posts-------------------*/

function gotNewPost(post){
  return {
    type: GOT_NEW_POST,
    post
  }
}

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

function removedPost(post){
  return {
    type: REMOVE_POST,
    post
  }
}

export function removePost(postId){
  return dispatch => {
    api.deletePost(postId).then((data) => {
       dispatch(removedPost(data))
    })
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

function gotVoteUpdate(post){
  return {
    type: UPDATE_POST_VOTESCORE,
    post
  }
}

function gotCommentVoteUpdate(comment){
  return {
    type: UPDATE_COMMENT_VOTESCORE,
    comment
  }
}

export function updateVoteScore(postId, vote){
  return dispatch => {
    api.updatePostVoteScore(postId, vote).then((newPost) => {
      dispatch(gotVoteUpdate(newPost))
    })    
  }
}

export function updateCommentVoteScore(commentId, vote){
  return dispatch => {
    api.updateCommentVoteScore(commentId, vote).then((newComment) => {
      dispatch(gotCommentVoteUpdate(newComment))
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
