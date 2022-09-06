import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { loginUser } from '../Utilities/apiUtil'
import { getAuthUser } from '../Utilities/apiUtil'
import { registerUser } from '../Utilities/apiUtil'
import { apiCall } from '../Utilities/apiUtil'

import { AuthState, LoginFormData, SignUpFormData, AuthUser, AuthError } from '../../_TS_Interface/interface'

export const login = createAsyncThunk('authState/login', async (loginFormData: LoginFormData) => {
    try {
        const authToken = await loginUser(loginFormData)
        window.location.href = '/dashboard'
        return authToken as string
    } catch (err) {
        const errorMessage: string = err.errors[0].msg
        throw Error(errorMessage)
    }
})

export const getAuhtorisedUser = createAsyncThunk('authState/getAuthorisedUser', async (authToken: string) => {
    try {
        const authUser = await getAuthUser(authToken)
        return authUser as AuthUser
    } catch (err) {
        const errorMessage = err.errors[0].msg
        throw Error(errorMessage)
    }
})

export const registerNewUser = createAsyncThunk('authState/registerNewUser', async (signUpFormData: SignUpFormData) => {
    try {
        const authToken = await registerUser(signUpFormData)
        const defaultProfile = { defaultTeam: 0, position: 'XX' }
        await apiCall('post', 'api/profile/createUpdate', authToken, defaultProfile)
        window.location.href = '/editProfile'
        return authToken as string
    } catch (err) {
        const errorMessage = err.errors[0].msg
        throw Error(errorMessage)
    }
})

const initialState: AuthState = {
    authToken: localStorage.getItem('token') || null,
    authErrors: null,
    adminUser: localStorage.getItem('adminUser') === 'true' || false,
    authUserName: localStorage.getItem('authUserName') || null,
    authUserId: localStorage.getItem('authUserId') || null,
    authIsLoading: false
} as AuthState

export const authSlice: any = createSlice({
    name: 'authState',
    initialState,
    reducers: {
        deleteAuthToken: state => {
            localStorage.clear()
            sessionStorage.clear()
            state.authToken = null
            state.authUserName = null
            state.authUserId = null
        },
        setAuthErrors: (state, { payload }: PayloadAction<AuthError[]>) => {
            const authErrors = payload
            state.authErrors = authErrors
        }
    },
    extraReducers: builder => {
        builder
            //---------------------------------------------------------------------
            .addCase(login.pending, state => {
                state.authIsLoading = true
                state.authToken = null
                state.authErrors = null
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                const authToken = payload
                state.authToken = authToken
                localStorage.setItem('token', authToken)
                state.authIsLoading = false
                state.authErrors = null
            })
            .addCase(login.rejected, (state, { error }: any) => {
                state.authToken = null
                state.authIsLoading = false
                state.authErrors = [error]
            })
            //---------------------------------------------------------------------
            .addCase(getAuhtorisedUser.pending, state => {
                state.authIsLoading = true
                state.adminUser = false
                state.authUserName = null
                state.authUserId = null
            })
            .addCase(getAuhtorisedUser.fulfilled, (state, { payload }) => {
                if (payload.admin) {
                    state.adminUser = payload.admin
                    localStorage.setItem('adminUser', payload.admin)
                }

                state.authUserName = payload.name
                state.authUserId = payload._id
                localStorage.setItem('authUserName', payload.name)
                localStorage.setItem('authUserId', payload._id)
                state.authIsLoading = false
                state.authErrors = null
            })
            .addCase(getAuhtorisedUser.rejected, (state, { error }: any) => {
                state.adminUser = false
                state.authUserName = null
                state.authUserId = null
                state.authIsLoading = false
                state.authErrors = [error]
            })
            //---------------------------------------------------------------------
            .addCase(registerNewUser.pending, state => {
                state.authIsLoading = true
                state.authToken = null
                state.authErrors = null
            })
            .addCase(registerNewUser.fulfilled, (state, { payload }) => {
                const authToken = payload
                state.authToken = authToken
                localStorage.setItem('token', authToken)
                state.authIsLoading = false
                state.authErrors = null
            })
            .addCase(registerNewUser.rejected, (state, { error }: any) => {
                state.authToken = null
                state.authIsLoading = false
                state.authErrors = [error]
            })
    }
})

export const { deleteAuthToken, setAuthErrors } = authSlice.actions

export const authReducer = authSlice.reducer
