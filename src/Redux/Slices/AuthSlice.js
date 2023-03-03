import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        error: null
    },
    reducers: {
        LoginStart(state) {
            state.isLoading = true
        },
        LoginSuccess(state, action) {
            state.user = action.payload
            state.token = action.payload.token
            state.isAuthenticated = true
            state.isLoading = false
            state.error = null
        },
        LoginFail(state, action) {
            state.user = null
            state.token = null
            state.isAuthenticated = false
            state.isLoading = false
            state.error = action.payload.error
        },
        Logout(state) {
            state.user = null
            state.token = null
            state.isAuthenticated = false
            state.isLoading = false
            state.error = null
        },

    }
})

export const { LoginSuccess, LoginFail, Logout, LoginStart } = authSlice.actions
export default authSlice.reducer