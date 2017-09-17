
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