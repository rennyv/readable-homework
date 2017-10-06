import * as api from '../utils/api.js'
import * as types from '../app/types'
import { changePostsOrder } from '../postsOrder/postOrderActions'
import { getComments } from '../comments/commentsActions'

export function updatePost(postId, title, body){
    return dispatch => {
       api.updatePost(postId, title, body).then((post) => {
         dispatch(changePost(post))
       })
    }
 }
 
 function changePost(post){
   return {
     type: types.CHANGE_POST,
     post
   }
 }
 
 function gotPosts(posts){
   return {
     type: types.GET_ALL_POSTS,
     posts
   }
 }
 
 export function removePost(postId){
   return dispatch => {
     api.deletePost(postId).then((post) => {
        dispatch({
         type: types.REMOVE_POST,
         post
       })
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
     type: types.UPDATE_POST_VOTESCORE,
     post
   }
 }
 
 export function updateVoteScore(postId, vote){
   return dispatch => {
     api.updatePostVoteScore(postId, vote).then((newPost) => {
       dispatch(gotVoteUpdate(newPost))
     })    
   }
 }