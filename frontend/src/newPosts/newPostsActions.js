import * as api from '../utils/api.js'
import * as types from '../app/types'
import { changePostsOrder } from '../postsOrder/postOrderActions'

export function updateNewPost(parameter, value){
    return {
      type: types.UPDATE_NEW_POST,
      parameter,
      value
    }
  }
  
function resetNewPost(){
  return {
    type: types.RESET_NEW_POST
  }
}
  
function gotNewPost(post){
  return {
    type: types.GOT_NEW_POST,
    post
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