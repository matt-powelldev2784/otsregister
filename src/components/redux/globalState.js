import { createSlice } from '@reduxjs/toolkit';

const deviceWidth = window.innerWidth;

export const globalSlice = createSlice({
    name: 'globalState',
    initialState: {
        isLoading: false,
        backgroundColor: '#003a68',
        isDesktop: deviceWidth > 440 ? true : false,
        menu: { homepage: true }
    },
    reducers: {
        changeBackgroundColorRed: (state, action) => {
            state.backgroundColor = 'red';
        },
        setIsLoading: (state, { payload }) => {
            console.log('payload', payload);
            state.isLoading = payload;
        },
        setMenu: (state, { payload }) => {
            state.menu = payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const { changeBackgroundColor, setIsLoading, setMenu } = globalSlice.actions;

export const globalReducer = globalSlice.reducer;
