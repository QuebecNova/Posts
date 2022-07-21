import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuth: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authenticate(state, action) {
            state.isAuth = action.payload
            if (action.payload) {
                localStorage.setItem('auth', true)
            } else {
                localStorage.clear()
            }
        }
    }
})

export const {
    authenticate,
} = userSlice.actions

export default userSlice.reducer