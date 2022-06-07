import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser } from '../Utilities/apiUtil';
import { getAuthUser } from '../Utilities/apiUtil';
import { registerUser } from '../Utilities/apiUtil';
import { apiCall } from '../Utilities/apiUtil';

export const login = createAsyncThunk('authState/login', async formData => {
    try {
        const authToken = await loginUser(formData);
        window.location.href = '/dashboard';
        return authToken;
    } catch (err) {
        const errorMessage = err.errors[0].msg;
        throw Error(errorMessage);
    }
});

export const getAuhtorisedUser = createAsyncThunk('authState/getAuthorisedUser', async authToken => {
    try {
        const authUser = await getAuthUser(authToken);
        return authUser;
    } catch (err) {
        const errorMessage = err.errors[0].msg;
        throw Error(errorMessage);
    }
});

export const registerNewUser = createAsyncThunk('authState/registerNewUser', async ({ authToken, formData }) => {
    try {
        const authToken = await registerUser(formData);
        const defaultProfile = { defaultTeam: 0, position: 'XX' };
        await apiCall('post', 'api/profile', authToken, defaultProfile);
        window.location.href = '/editProfile';
        return authToken;
    } catch (err) {
        const errorMessage = err.errors[0].msg;
        throw Error(errorMessage);
    }
});

export const authSlice = createSlice({
    name: 'authState',
    initialState: {
        authToken: localStorage.getItem('token') || null,
        authErrors: null,
        adminUser: localStorage.getItem('adminUser') === 'true' || false,
        authUserName: localStorage.getItem('authUserName') || null,
        authUserId: localStorage.getItem('authUserId') || null,
        authIsLoading: false
    },
    reducers: {
        deleteAuthToken: (state, { payload }) => {
            localStorage.clear();
            sessionStorage.clear();
            state.authToken = null;
            state.authUserName = null;
            state.authUserId = null;
        },
        setAuthErrors: (state, { payload }) => {
            state.authErrors = payload;
        },
        setAuthIsLoading: (state, { payload }) => {
            state.authIsLoading = payload;
        }
    },
    extraReducers: {
        [login.pending]: state => {
            state.authIsLoading = true;
            state.authToken = null;
            state.authErrors = null;
        },
        [login.fulfilled]: (state, { payload }) => {
            state.authToken = payload;
            localStorage.setItem('token', payload);
            state.authIsLoading = false;
            state.authErrors = null;
        },
        [login.rejected]: (state, action) => {
            state.authToken = null;
            state.authIsLoading = false;
            state.authErrors = [action.error];
        },
        //---------------------------------------------------------------------
        [getAuhtorisedUser.pending]: state => {
            state.authIsLoading = true;
            state.adminUser = false;
            state.authUserName = null;
            state.authUserId = null;
        },
        [getAuhtorisedUser.fulfilled]: (state, { payload }) => {
            if (payload.admin) {
                state.adminUser = payload.admin;
                localStorage.setItem('adminUser', payload.admin);
            }

            state.authUserName = payload.name;
            state.authUserId = payload._id;
            localStorage.setItem('authUserName', payload.name);
            localStorage.setItem('authUserId', payload._id);
            state.authIsLoading = false;
            state.authErrors = null;
        },
        [getAuhtorisedUser.rejected]: (state, action) => {
            state.adminUser = false;
            state.authUserName = null;
            state.authUserId = null;
            state.authIsLoading = false;
            state.authErrors = [action.error];
        },
        //---------------------------------------------------------------------
        [registerNewUser.pending]: state => {
            state.authIsLoading = true;
            state.authToken = null;
            state.authErrors = null;
        },
        [registerNewUser.fulfilled]: (state, { payload }) => {
            state.authToken = payload;
            localStorage.setItem('token', payload);
            state.authIsLoading = false;
            state.authErrors = null;
        },
        [registerNewUser.rejected]: (state, action) => {
            state.authToken = null;
            state.authIsLoading = false;
            state.authErrors = [action.error];
        }
        //---------------------------------------------------------------------
    }
});

export const { deleteAuthToken, setAuthIsLoading, setAuthErrors } = authSlice.actions;

export const authReducer = authSlice.reducer;
