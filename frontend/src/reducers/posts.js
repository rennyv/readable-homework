import * as actions from '../actions/types'

const initialPostsState = []

export function posts (state = initialPostsState, action) {
  switch (action.type) {
    case actions.GET_ALL_POSTS:
      return action.posts
    case actions.GOT_NEW_POST:
      return [...state, action.post]
    case actions.CHANGE_POST:
    case actions.REMOVE_POST:
      return [...state].map((post) => {
        if(post.id === action.post.id){
          return action.post
        }
        return post
      })
    case actions.UPDATE_POST_VOTESCORE:
      return state.map(post => {
        if(post.id === action.post.id) {
          return Object.assign({}, action.post, {'voteScore': action.post.voteScore})
        }
        return post
      })
    default:
      return state
  }
}