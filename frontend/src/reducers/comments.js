import * as actions from '../actions/types'

const initialCommentsState = []

export function comments ( state = initialCommentsState, action) {
  switch (action.type) {
    case actions.GET_POST_COMMENTS:
      return [...state, ...action.comments]
    case actions.UPDATE_COMMENT:
    case actions.UPDATE_COMMENT_VOTESCORE:
    case actions.REMOVE_COMMENT:
      return state.map(comment => {
        if(comment.id === action.comment.id) {
          return action.comment
        }
        return comment
      })
    case actions.GOT_NEW_COMMENT:
      return [...state, action.comment]
    default:
      return state
  }
}