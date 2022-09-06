export interface AuthState {
    authToken: string | null
    authErrors: { name: string; message: string; stack: string }[] | null
    adminUser: boolean
    authUserName: string | null
    authUserId: string | null
    authIsLoading: boolean
}

export interface LoginFormData {
    email: string
    password: string
}

export interface SignUpFormData {
    name: string
    email: string
    password: string
    password2: string
}

export interface AuthUser {
    _id: string
    date: string
    name: string
    email: string
    admin: any
    __v: any
}

export interface AuthError {
    name: string
    message: string
    stack: any
}
