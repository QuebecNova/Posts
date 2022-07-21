import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchAllPosts = createAsyncThunk(
    'posts/fetchAllPosts',
    async ({limit = 10, page = 1}) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return {headers: response.headers, posts: response.data, limit}
    }
)

export const fetchPostById = createAsyncThunk(
    'posts/fetchPostById',
    async (id) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return response.data
    }
)

export const fetchPostCommentsById = createAsyncThunk(
    'posts/fetchPostCommentsById',
    async (id) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response.data
    }
)