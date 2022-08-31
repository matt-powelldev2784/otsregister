var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { Fragment, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGamesData } from '../../../redux/dataState';
import styled from 'styled-components';
export var UserGameClosed = function (_a) {
    var gameId = _a.gameId, gameClosed = _a.gameClosed, currentPlayerAvailable = _a.currentPlayerAvailable;
    var dispatch = useDispatch();
    var _b = useSelector(function (state) { return state.authReducer; }), authToken = _b.authToken, authUserName = _b.authUserName;
    useLayoutEffect(function () {
        dispatch(getGamesData(authToken));
    }, [authToken, dispatch]);
    return (React.createElement(Fragment, null,
        React.createElement(Flexbox, null,
            currentPlayerAvailable && React.createElement(PlayerAvailable, null,
                authUserName,
                " Available"),
            !currentPlayerAvailable && React.createElement(PlayerUnavialable, null,
                authUserName,
                " NOT Available"))));
};
var Flexbox = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: left;\n    margin: 0rem auto 0rem auto;\n\n    @media (max-device-width: 440px) {\n        flex-direction: column;\n    }\n"], ["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: left;\n    margin: 0rem auto 0rem auto;\n\n    @media (max-device-width: 440px) {\n        flex-direction: column;\n    }\n"])));
var PlayerAvailable = styled.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: inline-block;\n    background: green;\n    color: white;\n    padding: 0.2rem 0.6rem;\n    font-size: 1.2rem;\n    text-align: center;\n    border-radius: 14px;\n\n    @media (max-device-width: 440px) {\n        font-size: 1rem;\n    }\n"], ["\n    display: inline-block;\n    background: green;\n    color: white;\n    padding: 0.2rem 0.6rem;\n    font-size: 1.2rem;\n    text-align: center;\n    border-radius: 14px;\n\n    @media (max-device-width: 440px) {\n        font-size: 1rem;\n    }\n"])));
var PlayerUnavialable = styled.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: inline-block;\n    background: red;\n    color: white;\n    padding: 0.2rem 0.6rem;\n    text-align: center;\n    font-size: 1.2rem;\n    border-radius: 14px;\n\n    @media (max-device-width: 440px) {\n        font-size: 1rem;\n    }\n"], ["\n    display: inline-block;\n    background: red;\n    color: white;\n    padding: 0.2rem 0.6rem;\n    text-align: center;\n    font-size: 1.2rem;\n    border-radius: 14px;\n\n    @media (max-device-width: 440px) {\n        font-size: 1rem;\n    }\n"])));
var templateObject_1, templateObject_2, templateObject_3;
