export interface AuthError {
    name: string
    message: string
    stack: any
}

export interface ApiOptions {
    apiCallType: string
    route: string
    token: string
    body?: any
}
