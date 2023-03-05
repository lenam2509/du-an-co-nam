import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        role: null,
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
            state.role = action.payload.role
        },
        LoginFail(state, action) {
            state.user = null
            state.token = null
            state.isAuthenticated = false
            state.isLoading = false
            state.error = action.payload
            state.role = null
        },
        Logout(state) {
            state.user = null
            state.token = null
            state.isAuthenticated = false
            state.isLoading = false
            state.error = null
            state.role = null
        },

    }
})

export const { LoginSuccess, LoginFail, Logout, LoginStart } = authSlice.actions
export default authSlice.reducer