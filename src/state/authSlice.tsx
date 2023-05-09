import { createSlice } from '@reduxjs/toolkit'
import { UserRespons, HrRespons, AdminRespons } from 'types'

interface AuthState {
    user: UserRespons | HrRespons | AdminRespons | null
}

const initialState: AuthState = {
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload.user
        },
        setLogout: (state) => {
            state.user = null
        },
    },
})

export const { setLogin, setLogout } = authSlice.actions
export const authReducer = authSlice.reducer
