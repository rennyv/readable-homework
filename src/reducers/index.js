import { combineReducers } from 'redux'

const initialPostsState = []

function posts (state = initialPostsState, action) {

    switch (action.type) {
        default:
        return state
    }
}

export default combineReducers({
    posts
})
