import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsReducer from './slices/postsSlice.js'
import userReducer from './slices/userSlice.js'

const rootReducer = combineReducers({
    posts: postsReducer,
    user: userReducer,
})

export const store = configureStore({
    reducer: rootReducer
})