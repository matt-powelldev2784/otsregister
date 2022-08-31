var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMenu } from '../components/redux/globalState';
import { deleteAuthToken } from '../components/redux/authState';
import { deleteAuthData } from '../components/redux/dataState';
import styled from 'styled-components';
import { Header } from '../components/Header/Header';
import { Background } from '../components/Header/Background';
import { Login } from '../components/Login/Login';
export var LoginPage = function () {
    var dispatch = useDispatch();
    var isDesktop = useSelector(function (state) { return state.globalReducer; }).isDesktop;
    useEffect(function () {
        localStorage.clear();
        sessionStorage.clear();
        dispatch(deleteAuthToken());
        dispatch(deleteAuthData());
        dispatch(setMenu({ homepage: true }));
    }, [dispatch]);
    return (React.createElement(Fragment, null,
        React.createElement(Contianer, null,
            React.createElement(Header, null),
            React.createElement(Main, null,
                isDesktop && React.createElement(Background, null),
                React.createElement(Login, null)))));
};
var Contianer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    height: 100vh;\n    background: #003a68;\n"], ["\n    height: 100vh;\n    background: #003a68;\n"])));
var Main = styled.main(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: absolute; ;\n"], ["\n    position: absolute; ;\n"])));
var templateObject_1, templateObject_2;
