import * as api from '../utils/api.js'
import * as types from '../app/types'

export function getAllCategories() {
  return dispatch => {
    api.getAllCategories().then ((data) => {
      dispatch(gotCategories(data))
    })
  }
}

function gotCategories(categories){
  return {
    type: types.GET_ALL_CATEGORIES,
    categories
  }
}
