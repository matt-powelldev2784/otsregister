var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import { Fragment } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { formatDate } from '../../../Utilities/formatDate';
import { UserTableRow } from './UserTableRow';
export var UserTableBody = function () {
    var gamesData = useSelector(function (state) { return state.dataReducer; }).gamesData;
    var gamesList = gamesData.gamesList;
    var UserTableBody = (React.createElement(TableRow, null,
        React.createElement(TableCell, null),
        React.createElement(TableCell, { name: 'No Games Scheduled' }, "No Games Scheduled"),
        React.createElement(TableCell, null),
        React.createElement(TableCell, null)));
    if (gamesList && gamesList.length > 0) {
        UserTableBody = gamesList.map(function (game) {
            var gameDate = formatDate(game.gameDate);
            var gameName = game.gameName, _id = game._id, gameClosed = game.gameClosed, currentPlayerAvailable = game.currentPlayerAvailable;
            var registeredPlayers = game.playersAvailable.length;
            return (React.createElement(UserTableRow, { key: _id, gameId: _id, gameClosed: gameClosed, gameDate: gameDate, gameName: gameName, registeredPlayers: registeredPlayers, currentPlayerAvailable: currentPlayerAvailable || false }));
        });
    }
    return React.createElement(Fragment, null, UserTableBody);
};
var TableRow = styled.tr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    height: 3rem;\n    font-weight: 500;\n\n    &:nth-child(even) {\n        background: ", ";\n        color: #003a68;\n    }\n\n    &:nth-child(odd) {\n        background: ", ";\n        color: white;\n    }\n"], ["\n    height: 3rem;\n    font-weight: 500;\n\n    &:nth-child(even) {\n        background: ", ";\n        color: #003a68;\n    }\n\n    &:nth-child(odd) {\n        background: ", ";\n        color: white;\n    }\n"])), function (props) { return props.color || 'white'; }, function (props) { return props.color || '#003a68'; });
var TableCell = styled.td(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    padding: 0.4rem 0.5rem 0.4rem 0.5rem;\n    color: ", ";\n    text-align: center;\n\n    @media (max-device-width: 440px) {\n        font-size: 1rem;\n    }\n"], ["\n    padding: 0.4rem 0.5rem 0.4rem 0.5rem;\n    color: ", ";\n    text-align: center;\n\n    @media (max-device-width: 440px) {\n        font-size: 1rem;\n    }\n"])), function (props) { return props.color; });
var templateObject_1, templateObject_2;
