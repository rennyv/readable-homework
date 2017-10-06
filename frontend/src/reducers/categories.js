import * as actions from '../actions'

const initialCategoriesState = []

export function categories (state = initialCategoriesState, action ) {
  switch (action.type) {
    case actions.GET_ALL_CATEGORIES:
      return action.categories
    default:
      return state
  } 
}

