import { configureStore } from '@reduxjs/toolkit';
import { globalReducer } from '../../../redux/globalState';
import { authReducer } from '../../../redux/authState';
import { dataReducer } from '../../../redux/dataState';
import playerProfile from '../mocks/mockProfileData.json';
var profile = playerProfile.profile;
export var apiFailStore = configureStore({
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
                    msg: 'Mock Error Message'
                }
            ]
        }
    }
});
