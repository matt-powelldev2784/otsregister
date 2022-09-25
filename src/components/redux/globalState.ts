import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GlobalState, MenuOptions } from './ts/globalState_interface'

const deviceWidth = window.innerWidth

const initialState: GlobalState = {
    isLoading: false,
    backgroundColor: '#003a68',
    isDesktop: deviceWidth > 440 ? true : false,
    menu: { homepage: true, adminUser: false, user: true }
}

export const globalSlice = createSlice({
    name: 'globalState',
    initialState,
    reducers: {
        changeBackgroundColorRed: state => {
            state.backgroundColor = 'red'
        },
        setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.isLoading = payload
        },
        setMenu: (state, { payload }: PayloadAction<MenuOptions>) => {
            state.menu = payload
        }
    }
})

export const { changeBackgroundColorRed, setIsLoading, setMenu } = globalSlice.actions

export const globalReducer = globalSlice.reducer
