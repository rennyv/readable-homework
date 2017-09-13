export const GET_ALL_POSTS = 'GET_ALL_POSTS'

export const SORT_CHANGE_DIRECTION = 'SORT_CHANGE_DIRECTION'
export const SORT_CHANGE_COLUMN = 'SORT_CHANGE_COLUMN'

export function changeSortColumn(column) {
  return {
    type: SORT_CHANGE_COLUMN,
    column,
  }
}

export function changeSortDirection(column) {
  return {
    type: SORT_CHANGE_DIRECTION,
    column,
  }
}
