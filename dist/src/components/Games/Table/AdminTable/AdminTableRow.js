var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPlanGamesId, setGamesNotClosedError, deletePlanTeamsGameId } from '../../../redux/dataState';
import styled from 'styled-components';
import { GameStatus } from './AdminGameStatus';
export var AdminTableRow = function (_a) {
    var gameId = _a.gameId, gameDate = _a.gameDate, gameName = _a.gameName, registeredPlayers = _a.registeredPlayers, gameClosed = _a.gameClosed;
    var navigate = useNavigate();
    var dispatch = useDispatch();
    var planTeamsHandler = function () {
        sessionStorage.removeItem('planTeamsGameId', gameId);
        dispatch(deletePlanTeamsGameId());
        if (gameClosed) {
            sessionStorage.setItem('planTeamsGameId', gameId);
            dispatch(setPlanGamesId(gameId));
            navigate('/planteams');
        }
        else {
            var planTeamsError = [{ msg: 'Player registartion must be closed before planning teams!' }];
            dispatch(setGamesNotClosedError(planTeamsError));
        }
    };
    return (React.createElement(TableRow, null,
        React.createElement(TableCell, null,
            React.createElement(Link, { onClick: planTeamsHandler }, gameDate)),
        React.createElement(TableCell, null, gameName),
        React.createElement(TableCell, null, registeredPlayers),
        React.createElement(TableCell, null,
            React.createElement(GameStatus, { gameClosed: gameClosed, gameId: gameId }))));
};
var TableRow = styled.tr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    height: 3rem;\n    font-weight: 500;\n\n    &:nth-child(even) {\n        background: ", ";\n        color: #003a68;\n    }\n\n    &:nth-child(odd) {\n        background: ", ";\n        color: white;\n    }\n"], ["\n    height: 3rem;\n    font-weight: 500;\n\n    &:nth-child(even) {\n        background: ", ";\n        color: #003a68;\n    }\n\n    &:nth-child(odd) {\n        background: ", ";\n        color: white;\n    }\n"])), function (props) { return props.color || 'white'; }, function (props) { return props.color || '#003a68'; });
var TableCell = styled.td(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    padding: 0.4rem 0.5rem 0.4rem 0.5rem;\n    color: ", ";\n    text-align: center;\n\n    @media (max-device-width: 440px) {\n        font-size: 1rem;\n    }\n"], ["\n    padding: 0.4rem 0.5rem 0.4rem 0.5rem;\n    color: ", ";\n    text-align: center;\n\n    @media (max-device-width: 440px) {\n        font-size: 1rem;\n    }\n"])), function (props) { return props.color; });
var Link = styled.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    text-decoration: ", ";\n    color: '#003a68';\n    &:hover {\n        border-bottom: 2px solid white;\n        cursor: pointer;\n    }\n"], ["\n    text-decoration: ", ";\n    color: '#003a68';\n    &:hover {\n        border-bottom: 2px solid white;\n        cursor: pointer;\n    }\n"])), function (props) { return props.gameClosed && 'underline'; });
var templateObject_1, templateObject_2, templateObject_3;
