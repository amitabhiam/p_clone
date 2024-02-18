import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    isAuthenticated : false,
    userId : 'amitabh',
    error : null,
}

const apiUrl = 'https://dummyjson.com/auth/login';

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.userId = action.payload.userId;
            state.error = null;
        },

        loginFailure: (state, action) => {
            state.isAuthenticated = false;
            state.userId = null;
            state.error = action.payload.error;
        },

        logout: (state) => {
            state.isAuthenticated = false;
            state.userId = null;
            state.error = null;
        },
    },
});

export const getLoginDetails = (userId, password) => async (dispatch) => {
    try {

        const res = await axios.post(apiUrl, {
            headers: { 'Content-Type': 'application/json' },
            username: userId,
            password: password,
        });

        dispatch(loginSuccess({userId: res.data.userId}));

        console.log(userId);

        const { token } = res.data;

        localStorage.setItem('token', token);

        console.log(token);

        console.log('Login Successful');
    }

    catch (error) {
        if (error.res) {
            dispatch(loginFailure({error: error.res.data.message}));
        } else if (error.request) {
            dispatch(loginFailure({error: 'No response from the server'}));
        }
    }
};

export const { loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;