var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPlayerRegister } from '../../../redux/dataState';
import styled from 'styled-components';
import { ToggleButton } from '../../Utilites/ToggleButton';
export var UserGameOpen = function (_a) {
    var gameId = _a.gameId, currentPlayerAvailable = _a.currentPlayerAvailable;
    var dispatch = useDispatch();
    var _b = useSelector(function (state) { return state.authReducer; }), authToken = _b.authToken, authUserName = _b.authUserName;
    var playerRegHandler = function () {
        var body = { gameId: gameId, playerAvailable: !currentPlayerAvailable };
        dispatch(setPlayerRegister({ authToken: authToken, body: body }));
    };
    var toggleColor = { toggleOn: 'green', toggleOff: 'red' };
    return (React.createElement(Fragment, null,
        React.createElement(Flexbox, null,
            currentPlayerAvailable && React.createElement(PlayerAvailable, { "data-testid": "available" },
                authUserName,
                " Available"),
            !currentPlayerAvailable && React.createElement(PlayerUnavialable, { "data-testid": "unavailable" },
                authUserName,
                " NOT Available"),
            React.createElement(ToggleButton, { onClick: playerRegHandler, defaultChecked: currentPlayerAvailable, toggleColor: toggleColor }))));
};
var Flexbox = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    margin: 0rem auto 0.3rem auto;\n\n    @media (max-device-width: 440px) {\n        flex-direction: column;\n    }\n"], ["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    margin: 0rem auto 0.3rem auto;\n\n    @media (max-device-width: 440px) {\n        flex-direction: column;\n    }\n"])));
var PlayerAvailable = styled.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: inline-block;\n    background: green;\n    color: white;\n    padding: 0.2rem 0.6rem;\n    font-size: 1.2rem;\n    text-align: center;\n    border-radius: 14px;\n\n    @media (max-device-width: 440px) {\n        font-size: 1rem;\n    }\n"], ["\n    display: inline-block;\n    background: green;\n    color: white;\n    padding: 0.2rem 0.6rem;\n    font-size: 1.2rem;\n    text-align: center;\n    border-radius: 14px;\n\n    @media (max-device-width: 440px) {\n        font-size: 1rem;\n    }\n"])));
var PlayerUnavialable = styled.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: inline-block;\n    background: red;\n    color: white;\n    padding: 0.2rem 0.6rem;\n    text-align: center;\n    font-size: 1.2rem;\n    border-radius: 14px;\n\n    @media (max-device-width: 440px) {\n        font-size: 1rem;\n    }\n"], ["\n    display: inline-block;\n    background: red;\n    color: white;\n    padding: 0.2rem 0.6rem;\n    text-align: center;\n    font-size: 1.2rem;\n    border-radius: 14px;\n\n    @media (max-device-width: 440px) {\n        font-size: 1rem;\n    }\n"])));
var templateObject_1, templateObject_2, templateObject_3;
