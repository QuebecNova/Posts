import { createSlice } from "@reduxjs/toolkit";
import getPageCount from "../../utils/pages";
import { fetchAllPosts, fetchPostById, fetchPostCommentsById } from "./actionCreators";

const initialState = {
    isLoading: false,
    error: '',
    singlePost: {},
    posts: [],
    filteredPosts: [],
    postComments: [],
    counter: 0,
    postTotalCount: 0,
    limit: 1,
    totalPages: 0,
    currentPage: 1,
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        createPost(state, action) {
            state.counter += 1
            state.postTotalCount += 1
            state.totalPages = getPageCount(state.postTotalCount, state.limit)
            state.posts.push({
                id: state.counter,
                title: action.payload.title, 
                body:action.payload.body
            })
            state.filteredPosts = state.posts
        },
        deletePost(state, action) {
            state.postTotalCount -= 1
            state.totalPages = getPageCount(state.postTotalCount, state.limit)
            state.posts = state.posts.filter(post => post.id !== action.payload)
            state.filteredPosts = state.posts
        },
        sortPosts(state, action) {
            state.filteredPosts = state.posts.sort((a, b) => {
                if (action.payload === 'id') {
                    return a[action.payload] - b[action.payload]
                } else {
                    return a[action.payload].localeCompare(b[action.payload])
                }
            })
            state.filteredPosts = state.posts
        },
        searchPosts(state, action) {
            state.filteredPosts = state.posts.filter(post => {
                return post.title.includes(action.payload) || post.body.includes(action.payload)
            })
        },
        changeCurrentPage(state, action) {
            state.currentPage = action.payload
        }
    },
    extraReducers: (builder) => {

        builder.addCase(fetchAllPosts.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
            state.error = ''
            state.posts = [...state.posts, ...action.payload.posts]
            state.filteredPosts = [...state.filteredPosts, ...action.payload.posts]
            state.postTotalCount = parseInt(action.payload.headers['x-total-count'])
            state.limit = action.payload.limit
            state.totalPages = getPageCount(state.postTotalCount, state.limit)
            state.isLoading = false
        })
        builder.addCase(fetchAllPosts.rejected, (state, action) => {
            state.error = action.error.message
            state.posts = []
            state.isLoading = false
        })

        builder.addCase(fetchPostById.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchPostById.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = ''
            state.singlePost = action.payload
        })
        builder.addCase(fetchPostById.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
            state.singlePost = {}
        })

        builder.addCase(fetchPostCommentsById.pending, (state) => {
            state.isLoading = true
            state.postComments = []
        })
        builder.addCase(fetchPostCommentsById.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = ''
            state.postComments = action.payload
        })
        builder.addCase(fetchPostCommentsById.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
            state.postComments = []
        })
    }
})

export const {
    createPost, 
    deletePost, 
    sortPosts, 
    searchPosts,
    setTotalPages,
    changeCurrentPage,
} = postsSlice.actions

export default postsSlice.reducer