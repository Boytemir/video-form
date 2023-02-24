import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../helpers/persistance-storage";

const initialState = {
    isLoading: false,
    loggedIn: false,
    error: null,
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signUserStart: state => {
            state.isLoading = true
        },
        signUserSuccess: (state, action) => {
            state.loggedIn = true;
            state.isLoading = false;
            state.user = action.payload;
            setItem('token', action.payload.token)
        },
        signUserFailure: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        logoutUser: state => {
            state.user = null
            state.loggedIn = false
        }
    }
})

export const {signUserStart, signUserSuccess, signUserFailure, logoutUser} = authSlice.actions
export default authSlice.reducer