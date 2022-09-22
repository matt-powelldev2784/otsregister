import { configureStore } from '@reduxjs/toolkit'
import { globalReducer } from './globalState'
import { authReducer } from './authState'
import { dataReducer } from './dataState'

export const store = configureStore({
    reducer: { globalReducer: globalReducer, authReducer: authReducer, dataReducer: dataReducer }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
