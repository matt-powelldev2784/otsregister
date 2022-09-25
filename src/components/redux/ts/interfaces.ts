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

export interface ToggleColor {
    toggleOn: string
    toggleOff: string
}

export interface PlayerProfile {
    _id: string
    defaultTeam: string
    position: string
    date: string
    __v: any
    user: User
}

export interface User {
    _id: string
    name: string
    email: string
}
