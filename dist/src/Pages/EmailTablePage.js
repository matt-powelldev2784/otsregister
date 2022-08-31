var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMenu } from '../components/redux/globalState';
import styled from 'styled-components';
import { Header } from '../components/Header/Header';
import { Background } from '../components/Header/Background';
import { EmailTable } from '../components/PlanTeam/TableForEmail/EmailTable';
export var EmailTablePage = function () {
    var dispatch = useDispatch();
    var isDesktop = useSelector(function (state) { return state.globalReducer; }).isDesktop;
    var adminUser = useSelector(function (state) { return state.authReducer; }).adminUser;
    useEffect(function () {
        dispatch(setMenu({ homepage: false, adminUser: adminUser, user: !adminUser }));
    }, [dispatch, adminUser]);
    return (React.createElement(Fragment, null,
        React.createElement(Header, null),
        React.createElement(Main, null,
            isDesktop && React.createElement(Background, null),
            React.createElement(Container, null, adminUser && React.createElement(EmailTable, null)))));
};
var Main = styled.main(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n"], ["\n    position: relative;\n"])));
var Container = styled.section(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: absolute;\n    top: 0;\n    width: 100%;\n"], ["\n    position: absolute;\n    top: 0;\n    width: 100%;\n"])));
var templateObject_1, templateObject_2;
