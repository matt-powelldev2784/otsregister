var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useLayoutEffect } from 'react';
import { Fragment } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getGamesData } from '../../../redux/dataState';
import { formatDate } from '../../../Utilities/formatDate';
import { AdminTableRow } from './AdminTableRow';
export var AdminTableBody = function () {
    var dispatch = useDispatch();
    var authToken = useSelector(function (state) { return state.authReducer; }).authToken;
    var gamesData = useSelector(function (state) { return state.dataReducer; }).gamesData;
    var gamesList = gamesData.gamesList;
    useLayoutEffect(function () {
        if (authToken) {
            dispatch(getGamesData(authToken));
        }
    }, [authToken, dispatch]);
    var AdminTableBody = (React.createElement(TableRow, null,
        React.createElement(TableCell, null),
        React.createElement(TableCell, null, "No Games Scheduled"),
        React.createElement(TableCell, null),
        React.createElement(TableCell, null)));
    if (gamesList && gamesList.length > 0) {
        AdminTableBody = gamesList.map(function (game) {
            var gameDate = formatDate(game.gameDate);
            var gameName = game.gameName, _id = game._id, _a = game.registeredPlayers, registeredPlayers = _a === void 0 ? game.playersAvailable.length : _a, gameClosed = game.gameClosed;
            return (React.createElement(AdminTableRow, { key: _id, gameId: _id, gameClosed: gameClosed, gameDate: gameDate, gameName: gameName, registeredPlayers: registeredPlayers }));
        });
    }
    return React.createElement(Fragment, null, AdminTableBody);
};
var TableRow = styled.tr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    height: 3rem;\n    font-weight: 500;\n\n    &:nth-child(even) {\n        background: ", ";\n        color: #003a68;\n    }\n\n    &:nth-child(odd) {\n        background: ", ";\n        color: white;\n    }\n"], ["\n    height: 3rem;\n    font-weight: 500;\n\n    &:nth-child(even) {\n        background: ", ";\n        color: #003a68;\n    }\n\n    &:nth-child(odd) {\n        background: ", ";\n        color: white;\n    }\n"])), function (props) { return props.color || 'white'; }, function (props) { return props.color || '#003a68'; });
var TableCell = styled.td(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    padding: 0.4rem 0.5rem 0.4rem 0.5rem;\n    color: ", ";\n    text-align: center;\n\n    @media (max-device-width: 440px) {\n        font-size: 1rem;\n    }\n"], ["\n    padding: 0.4rem 0.5rem 0.4rem 0.5rem;\n    color: ", ";\n    text-align: center;\n\n    @media (max-device-width: 440px) {\n        font-size: 1rem;\n    }\n"])), function (props) { return props.color; });
var templateObject_1, templateObject_2;
