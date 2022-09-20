import { configureStore } from '@reduxjs/toolkit'
import { globalReducer } from '../../../redux/globalState'
import { authReducer } from '../../../redux/authState'
import { dataReducer } from '../../../redux/dataState'

import playerProfile from '../mocks/mockProfileData.json'

const { profile } = playerProfile

export const apiFailStore = configureStore({
    reducer: { globalReducer: globalReducer, authReducer: authReducer, dataReducer: dataReducer },
    preloadedState: {
        dataReducer: {
            playerProfile: {
                playerProfile: profile
            }
        },
        authReducer: {
            authErrors: [
                {
                    name: 'Mock Name',
                    message: 'Mock Error Message',
                    stack: 'Mock Stack'
                }
            ]
        }
    }
})
