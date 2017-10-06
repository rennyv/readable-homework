import * as api from '../utils/api.js'
import * as types from './types'

function gotCommentVoteUpdate(comment){
  return {
    type: types.UPDATE_COMMENT_VOTESCORE,
    comment
  }
}
  
export function updateCommentVoteScore(commentId, vote){
  return dispatch => {
    api.updateCommentVoteScore(commentId, vote).then((newComment) => {
      dispatch(gotCommentVoteUpdate(newComment))
    })    
  }
}
  
export function getComments(postId) {
  return dispatch => {
    api.getCommentsFor(postId).then(comments => {
      dispatch({
        type: types.GET_POST_COMMENTS,
        comments
      })
    })
  }
}

export function addComment(newComment){
  return dispatch => {
    api.createNewComment(newComment).then((comment) => {
      dispatch({
        type: types.GOT_NEW_COMMENT,
        comment
      })
    })}  
}

export function updateComment(commentId, body){
  return dispatch => {
      api.updateComment(commentId, body).then((comment) => {
        dispatch({
          type: types.UPDATE_COMMENT,
          comment
        })
      })
  }
}

export function removeComment(commentId){
  return dispatch => {
    api.deleteComment(commentId).then((comment) => {
      dispatch({
        type: types.REMOVE_COMMENT,
        comment
      })
    })
  }
}