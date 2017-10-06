import * as types from '../app/types'

export function changePostsOrder(order) {
  return {
    type: types.CHANGE_POST_ORDER,
    order
  }
}