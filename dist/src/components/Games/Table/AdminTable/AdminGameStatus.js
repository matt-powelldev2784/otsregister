var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setGameRegister, deleteGame } from '../../../redux/dataState';
import { ToggleButton } from '../../Utilites/ToggleButton';
import { TableButton } from '../../Utilites/TableButton';
export var GameStatus = function (_a) {
    var gameClosed = _a.gameClosed, gameId = _a.gameId;
    var dispatch = useDispatch();
    var isDesktop = useSelector(function (state) { return state.globalReducer; }).isDesktop;
    var authToken = useSelector(function (state) { return state.authReducer; }).authToken;
    var isLoading = useSelector(function (state) { return state.dataReducer; }).isLoading;
    var gameStatusHandler = function () {
        if (gameClosed)
            window.confirm('If the game reopened, any manger team selections will be lost. Players will be reset to their default teams. Please confirm you are happy to proceed?');
        var body = { gameId: gameId, gameClosed: !gameClosed };
        dispatch(setGameRegister({ authToken: authToken, body: body }));
    };
    var deleteGameHandler = function () {
        dispatch(deleteGame({ authToken: authToken, gameId: gameId }));
    };
    var toggleColor = { toggleOn: 'black', toggleOff: 'green' };
    var gameClosedColor = gameClosed ? 'black' : undefined;
    return (React.createElement(Fragment, null,
        React.createElement(Flexbox, null,
            gameClosed && React.createElement(GameClosed, { color: gameClosedColor }, "Game Closed"),
            !gameClosed && React.createElement(GameOpen, null, "Game Open"),
            React.createElement(ToggleButton, { onClick: gameStatusHandler, defaultChecked: gameClosed, toggleColor: toggleColor, isLoading: isLoading }),
            isDesktop && (React.createElement(TableButton, { text: 'DELETE', color: 'white', bgColor: 'red', onClick: deleteGameHandler })))));
};
var Flexbox = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    margin: 0rem auto 0.3rem auto;\n\n    @media (max-device-width: 440px) {\n        flex-direction: column;\n    }\n"], ["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    margin: 0rem auto 0.3rem auto;\n\n    @media (max-device-width: 440px) {\n        flex-direction: column;\n    }\n"])));
var GameOpen = styled.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: inline-block;\n    background: green;\n    color: white;\n    width: 10rem;\n    padding: 0.2rem 0.6rem;\n    font-size: 1.2rem;\n    border-radius: 14px;\n\n    @media (max-device-width: 440px) {\n        font-size: 1rem;\n        width: 5rem;\n    }\n"], ["\n    display: inline-block;\n    background: green;\n    color: white;\n    width: 10rem;\n    padding: 0.2rem 0.6rem;\n    font-size: 1.2rem;\n    border-radius: 14px;\n\n    @media (max-device-width: 440px) {\n        font-size: 1rem;\n        width: 5rem;\n    }\n"])));
var GameClosed = styled.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: inline-block;\n    background: ", ";\n    color: white;\n    width: 10rem;\n    padding: 0.2rem 0.6rem;\n    font-size: 1.2rem;\n    border-radius: 14px;\n\n    @media (max-device-width: 440px) {\n        font-size: 1rem;\n        width: 5rem;\n    }\n"], ["\n    display: inline-block;\n    background: ", ";\n    color: white;\n    width: 10rem;\n    padding: 0.2rem 0.6rem;\n    font-size: 1.2rem;\n    border-radius: 14px;\n\n    @media (max-device-width: 440px) {\n        font-size: 1rem;\n        width: 5rem;\n    }\n"])), function (props) { return props.color; });
var templateObject_1, templateObject_2, templateObject_3;
