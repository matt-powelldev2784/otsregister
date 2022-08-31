var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import { UserGameOpen } from './UserGameOpen';
import { UserGameClosed } from './UserGameClosed';
import styled from 'styled-components';
export var UserTableRow = function (_a) {
    var gameId = _a.gameId, gameDate = _a.gameDate, gameName = _a.gameName, registeredPlayers = _a.registeredPlayers, gameClosed = _a.gameClosed, currentPlayerAvailable = _a.currentPlayerAvailable;
    var gameClosedText = gameClosed ? 'Register Closed' : 'Register Open';
    return (React.createElement(TableRow, null,
        React.createElement(TableCell, null, gameDate),
        React.createElement(TableCell, null, gameName),
        React.createElement(TableCell, null,
            React.createElement(Div, null,
                " ",
                gameClosedText),
            React.createElement(Div, null,
                registeredPlayers,
                " Available Players")),
        React.createElement(TableCell, null,
            React.createElement(Flexbox, null,
                !gameClosed && React.createElement(UserGameOpen, { gameId: gameId, currentPlayerAvailable: currentPlayerAvailable }),
                gameClosed && React.createElement(UserGameClosed, { gameId: gameId, currentPlayerAvailable: currentPlayerAvailable })))));
};
var TableRow = styled.tr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    height: 3rem;\n    font-weight: 500;\n\n    &:nth-child(even) {\n        background: ", ";\n        color: #003a68;\n    }\n\n    &:nth-child(odd) {\n        background: ", ";\n        color: white;\n    }\n"], ["\n    height: 3rem;\n    font-weight: 500;\n\n    &:nth-child(even) {\n        background: ", ";\n        color: #003a68;\n    }\n\n    &:nth-child(odd) {\n        background: ", ";\n        color: white;\n    }\n"])), function (props) { return props.color || 'white'; }, function (props) { return props.color || '#003a68'; });
var TableCell = styled.td(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    padding: 0.4rem 0.5rem 0.4rem 0.5rem;\n    color: ", ";\n    text-align: center;\n\n    @media (max-device-width: 440px) {\n        font-size: 1rem;\n    }\n"], ["\n    padding: 0.4rem 0.5rem 0.4rem 0.5rem;\n    color: ", ";\n    text-align: center;\n\n    @media (max-device-width: 440px) {\n        font-size: 1rem;\n    }\n"])), function (props) { return props.color; });
var Flexbox = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    margin: 0rem auto 0.3rem auto;\n\n    @media (max-device-width: 440px) {\n        flex-direction: column;\n    }\n"], ["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    margin: 0rem auto 0.3rem auto;\n\n    @media (max-device-width: 440px) {\n        flex-direction: column;\n    }\n"])));
var Div = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    padding: 0.25rem;\n"], ["\n    padding: 0.25rem;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
