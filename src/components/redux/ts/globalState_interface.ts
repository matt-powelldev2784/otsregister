export interface GlobalState {
    isLoading: boolean
    backgroundColor: string
    isDesktop: boolean
    menu: { homepage: boolean }
}

export interface MenuOptions {
    homepage: boolean
    adminUser: boolean
    user: boolean
}
