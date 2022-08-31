var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGamesData } from '../../../redux/dataState';
import styled from 'styled-components';
import { GamesTableHead } from '../GamesTableHead';
import { UserTableBody } from './UserTableBody';
export var UserGamesTable = function () {
    var dispatch = useDispatch();
    var authToken = useSelector(function (state) { return state.authReducer; }).authToken;
    useLayoutEffect(function () {
        if (authToken) {
            dispatch(getGamesData(authToken));
        }
    }, [authToken, dispatch]);
    var tableHeadTitles = { cell1: 'Game Date', cell2: 'Game Name', cell3: 'Register Status', cell4: 'Player Availability' };
    return (React.createElement(Section, null,
        React.createElement(Table, null,
            React.createElement(TableHead, null,
                React.createElement(GamesTableHead, __assign({}, tableHeadTitles))),
            React.createElement(TableBody, null,
                React.createElement(UserTableBody, null)))));
};
var Section = styled.section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100vw;\n    margin: 0 auto 0 auto;\n"], ["\n    width: 100vw;\n    margin: 0 auto 0 auto;\n"])));
var Table = styled.table(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    margin: 1rem auto 1rem auto;\n    width: 90%;\n    border-spacing: 0;\n    border-bottom: 5px solid #011826;\n"], ["\n    margin: 1rem auto 1rem auto;\n    width: 90%;\n    border-spacing: 0;\n    border-bottom: 5px solid #011826;\n"])));
var TableHead = styled.thead(templateObject_3 || (templateObject_3 = __makeTemplateObject([""], [""])));
var TableBody = styled.tbody(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
