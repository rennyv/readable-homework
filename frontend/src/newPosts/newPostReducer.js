import * as actions from '../app/types'

const initialNewPostState = { 'title':'', 'author':'', 'body':'', 'category':'', 'error': '' }

export function newPost (state = initialNewPostState, action){
  switch (action.type){
    case actions.UPDATE_NEW_POST:
      return Object.assign({}, state, { [action.parameter]: action.value })
    case actions.RESET_NEW_POST:
      return Object.assign({},initialNewPostState)
    default:
      return state
  }
}