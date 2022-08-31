import { configureStore } from '@reduxjs/toolkit';
import { globalReducer } from '../../../../../redux/globalState';
import { authReducer } from '../../../../../redux/authState';
import { dataReducer } from '../../../../../redux/dataState';
import games from './mockRecentGames.json';
var recentGames = games.recentGames;
export var apiSucessStore = configureStore({
    reducer: { globalReducer: globalReducer, authReducer: authReducer, dataReducer: dataReducer },
    preloadedState: {
        authReducer: { authUserName: 'Matt Powell', authUserId: '62d58916d6ae604a6b49692a' },
        dataReducer: {
            authUserName: 'Matt Powell',
            authUserId: '62d58916d6ae604a6b49692a',
            gamesData: {
                gamesList: recentGames
            }
        }
    }
});
