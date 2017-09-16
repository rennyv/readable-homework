import * as actions from '../actions'

import { combineReducers } from 'redux'

const initialPostsState = []
const initialCategoriesState = []

function posts (state = initialPostsState, action) {

    switch (action.type) {
        case actions.GET_ALL_POSTS:
            return action.posts
        default:
            return state
    }
}

function categories (state = initialCategoriesState, action ) {
    switch (action.type) {
        case actions.GET_ALL_CATEGORIES:
            return action.categories
        default:
            return state
    }
}

export default combineReducers({
    posts,
    categories
})
