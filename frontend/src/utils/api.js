
import * as helpers from './helpers'
const api = process.env.REACT_READABLE_API_URL || 'http://localhost:3001'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}


export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())

export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then( data => data.categories)
  
export const getCommentsFor = (postId) =>{
  return fetch(`${api}/posts/${postId}/comments`, { headers })
      .then(res => res.json())
}

export const updatePostVoteScore = (postId, vote) => {
  const body = { "option": vote }
  return fetch(`${api}/posts/${postId}`,{
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json())
}

export const updateCommentVoteScore = (commentId, vote) => {
  const body = { "option": vote }
  return fetch(`${api}/comments/${commentId}`,{
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json())
}

export const createNewPost = (newPost) => {
  newPost.timestamp = Date.now()
  newPost.id = helpers.uuidv4()
  return fetch(`${api}/posts`,{
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPost)
  }).then(res => res.json())
}

export const deletePost = (postId) => {
  return fetch(`${api}/posts/${postId}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}

export const updatePost = (postId, title, body) => {
  let editBody = {
    title,
    body
  }
  return fetch(`${api}/posts/${postId}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(editBody)
    }).then(res => res.json())
}

export const createNewComment = (newComment) => {
  newComment.timestamp = Date.now()
  newComment.id = helpers.uuidv4()
  return fetch(`${api}/comments`,{
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newComment)
  }).then(res => res.json())
}