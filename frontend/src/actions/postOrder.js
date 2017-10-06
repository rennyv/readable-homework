import * as types from './types'

export function changePostsOrder(order) {
  return {
    type: types.CHANGE_POST_ORDER,
    order
  }
}