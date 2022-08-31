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
import { PageTitle } from '../components/Utilities/PageTitle';
import { Background } from '../components/Header/Background';
import { UserGamesTable } from '../components/Games/Table/UserTable/UserGamesTable';
import { AdminGamesTable } from '../components/Games/Table/AdminTable/AdminGamesTable';
import { Errors } from '../components/Utilities/Errors';
export var DashboardPage = function () {
    var dispatch = useDispatch();
    var isDesktop = useSelector(function (state) { return state.globalReducer; }).isDesktop;
    var dataErrors = useSelector(function (state) { return state.dataReducer; }).dataErrors;
    var _a = useSelector(function (state) { return state.authReducer; }), authToken = _a.authToken, adminUser = _a.adminUser, authUserName = _a.authUserName, authErrors = _a.authErrors;
    var userName = authUserName === 'admin' ? 'Admin' : authUserName;
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
                authUserName && React.createElement(PageTitle, { text: "".concat(userName, " Dashboard") }),
                authErrors && React.createElement(Errors, { errors: authErrors }),
                dataErrors && React.createElement(Errors, { errors: dataErrors }),
                !adminUser && React.createElement(UserGamesTable, null),
                adminUser && React.createElement(AdminGamesTable, null)))));
};
var Main = styled.main(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n    background: #003a68;\n"], ["\n    position: relative;\n    background: #003a68;\n"])));
var Container = styled.section(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 100vh;\n"], ["\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 100vh;\n"])));
var templateObject_1, templateObject_2;
