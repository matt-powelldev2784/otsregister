var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAuhtorisedUser } from '../components/redux/authState';
import { setMenu } from '../components/redux/globalState';
import styled from 'styled-components';
import { Header } from '../components/Header/Header';
import { Background } from '../components/Header/Background';
import { Profile } from '../components/Profile/Profile';
import { Errors } from '../components/Utilities/Errors';
export var EditProfilePage = function () {
    var dispatch = useDispatch();
    var isDesktop = useSelector(function (state) { return state.globalReducer; }).isDesktop;
    var _a = useSelector(function (state) { return state.authReducer; }), authToken = _a.authToken, adminUser = _a.adminUser, authErrors = _a.authErrors;
    var dataErrors = useSelector(function (state) { return state.dataReducer; }).dataErrors;
    useEffect(function () {
        try {
            if (authToken) {
                dispatch(getAuhtorisedUser(authToken));
            }
        }
        catch (err) {
            throw Error;
        }
    }, [authToken, dispatch]);
    useEffect(function () {
        dispatch(setMenu({ homepage: false, adminUser: adminUser, user: !adminUser }));
    }, [dispatch, adminUser]);
    return (React.createElement(Fragment, null,
        React.createElement(Header, null),
        React.createElement(Main, null,
            isDesktop && React.createElement(Background, null),
            React.createElement(Container, null,
                authErrors && React.createElement(Errors, { errors: authErrors }),
                dataErrors && React.createElement(Errors, { errors: dataErrors }),
                !adminUser && React.createElement(Profile, { "data-testid": "profile" })))));
};
var Main = styled.main(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n"], ["\n    position: relative;\n"])));
var Container = styled.section(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: absolute;\n    top: 0;\n    width: 100%;\n"], ["\n    position: absolute;\n    top: 0;\n    width: 100%;\n"])));
var templateObject_1, templateObject_2;
