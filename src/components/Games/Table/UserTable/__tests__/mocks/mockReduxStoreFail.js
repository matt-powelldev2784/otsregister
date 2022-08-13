import { configureStore } from '@reduxjs/toolkit'
import { globalReducer } from '../../../../../redux/globalState'
import { authReducer } from '../../../../../redux/authState'
import { dataReducer } from '../../../../../redux/dataState'

export const apiFailStore = configureStore({
    reducer: { globalReducer: globalReducer, authReducer: authReducer, dataReducer: dataReducer },
    preloadedState: {
        authReducer: {},
        dataReducer: {
            gamesData: {}
        }
    }
})
