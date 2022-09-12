import axios from 'axios'
import { AuthUser, LoginFormData, SignUpFormData } from '../redux/ts/authState_interface'

const defaultError = {
    errors: [
        {
            success: false,
            status: 500,
            msg: 'Server Error'
        }
    ]
}

export const registerUser = async (signUpFormData: SignUpFormData) => {
    const config = { headers: { 'Content-Type': 'application/json' } }
    const body = JSON.stringify(signUpFormData)

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_ADDRESS}/api/users`, body, config)

        const token = res.data.token

        return token as string
    } catch (err) {
        throw err.response.data
    }
}

export const loginUser = async (loginFormData: LoginFormData) => {
    const config = { headers: { 'Content-Type': 'application/json' } }
    const body: string = JSON.stringify(loginFormData)

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_ADDRESS}/api/auth`, body, config)

        const token = res.data.token

        return token as string
    } catch (err) {
        throw err.response.data
    }
}

export const getAuthUser = async (token: string) => {
    const config = { headers: { 'x-auth-token': token, 'content-type': 'application/json' } }

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_ADDRESS}/api/auth`, config)

        const user = res.data
        return user as AuthUser
    } catch (err) {
        throw err.response.data
    }
}

export interface ApiOptions {
    apiCallType: string
    route: string
    token: string
    body?: any
}

export const apiCall = async (apiOptions: ApiOptions) => {
    const { apiCallType, route, token, body } = apiOptions
    const config = { headers: { 'x-auth-token': token } }

    try {
        let response: any

        switch (apiCallType) {
            case 'post':
                response = await axios.post(`${process.env.REACT_APP_API_ADDRESS}/${route}`, body, config)
                break
            case 'get':
                response = await axios.get(`${process.env.REACT_APP_API_ADDRESS}/${route}`, config)
                break
            case 'delete':
                response = await axios.delete(`${process.env.REACT_APP_API_ADDRESS}/${route}`, config)

                break
            default:
                response = await axios.get(`${process.env.REACT_APP_API_ADDRESS}/${route}`, config)
        }

        const responseData = response.data
        return responseData
    } catch (err) {
        if (err.repsonse) {
            throw err.repsonse.data
        } else {
            throw defaultError
        }
    }
}
