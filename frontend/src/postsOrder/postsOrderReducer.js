import * as actions from '../app/types'

const initialPostSort = "author" 

export function postsOrder (state = initialPostSort, action ){
  switch (action.type){
    case actions.CHANGE_POST_ORDER:
      return action.order
    default:
      return state
  }
}