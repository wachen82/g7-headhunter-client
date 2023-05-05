import { createSlice } from '@reduxjs/toolkit'

interface User {
    _id: string
    email: string
    role: string
}
interface AuthState {
    user: User | null
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
