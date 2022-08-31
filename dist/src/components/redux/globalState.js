var _a;
import { createSlice } from '@reduxjs/toolkit';
var deviceWidth = window.innerWidth;
export var globalSlice = createSlice({
    name: 'globalState',
    initialState: {
        isLoading: false,
        backgroundColor: '#003a68',
        isDesktop: deviceWidth > 440 ? true : false,
        menu: { homepage: true }
    },
    reducers: {
        changeBackgroundColorRed: function (state, action) {
            state.backgroundColor = 'red';
        },
        setIsLoading: function (state, _a) {
            var payload = _a.payload;
            console.log('payload', payload);
            state.isLoading = payload;
        },
        setMenu: function (state, _a) {
            var payload = _a.payload;
            state.menu = payload;
        }
    }
});
// Action creators are generated for each case reducer function
export var changeBackgroundColor = (_a = globalSlice.actions, _a.changeBackgroundColor), setIsLoading = _a.setIsLoading, setMenu = _a.setMenu;
export var globalReducer = globalSlice.reducer;
