import { createSlice } from '@reduxjs/toolkit';
import { UserResponse, HrResponse, AdminResponse } from 'types';

interface AuthState {
    user: UserResponse | HrResponse | AdminResponse | null;
}

const initialState: AuthState = {
    user: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload.user;
        },
        setLogout: (state) => {
            state.user = null;
        },
    },
});

export const { setLogin, setLogout } = authSlice.actions;
export const authReducer = authSlice.reducer;
