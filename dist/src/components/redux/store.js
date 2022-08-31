import { configureStore } from '@reduxjs/toolkit';
import { globalReducer } from './globalState';
import { authReducer } from './authState';
import { dataReducer } from './dataState';
export var store = configureStore({
    reducer: { globalReducer: globalReducer, authReducer: authReducer, dataReducer: dataReducer }
});
