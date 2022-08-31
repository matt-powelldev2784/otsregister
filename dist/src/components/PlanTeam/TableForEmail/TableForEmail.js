var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { TeamName } from './TeamName';
import { PlayerItem } from './PlayerItem';
export var TableForEmail = function () {
    var planTeamsData = useSelector(function (state) { return state.dataReducer; }).planTeamsData;
    var sortedFinalTeamData = planTeamsData.sortedFinalTeamData;
    var TableHeaders = sortedFinalTeamData.map(function (_a, i) {
        var team = _a.team;
        if (team === 'Bin') {
            return null;
        }
        var key = "".concat(team).concat(i);
        return React.createElement(TeamName, { teamName: team, key: key });
    });
    var PlayersList = sortedFinalTeamData.map(function (_a, i) {
        var team = _a.team, players = _a.players;
        if (team === 'Bin') {
            return null;
        }
        var key = "".concat(team).concat(i);
        var Players = players.map(function (player) {
            var _id = player._id;
            var name = player.user.name;
            return React.createElement(PlayerItem, { playerName: name, key: _id });
        });
        return React.createElement(TableCell, { key: key }, Players);
    });
    return (React.createElement(Table, null,
        React.createElement(TableHead, null,
            React.createElement(TableRow, null, TableHeaders)),
        React.createElement(TableBody, null,
            React.createElement(TableRow, null, PlayersList))));
};
var Table = styled.table(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    margin: 1rem auto 1rem auto;\n    border-spacing: 0;\n    background: #003a68;\n    width: 90vw;\n"], ["\n    margin: 1rem auto 1rem auto;\n    border-spacing: 0;\n    background: #003a68;\n    width: 90vw;\n"])));
var TableRow = styled.tr(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    color: white;\n"], ["\n    color: white;\n"])));
var TableCell = styled.td(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    width: 10rem;\n\n    &:nth-child(even) {\n        background: #011826;\n        color: #003a68;\n    }\n\n    &:nth-child(odd) {\n        background: '#003a68';\n        color: white;\n    }\n\n    @media (max-device-widtablehead: 440px) {\n        font-size: 1rem;\n    }\n"], ["\n    width: 10rem;\n\n    &:nth-child(even) {\n        background: #011826;\n        color: #003a68;\n    }\n\n    &:nth-child(odd) {\n        background: '#003a68';\n        color: white;\n    }\n\n    @media (max-device-widtablehead: 440px) {\n        font-size: 1rem;\n    }\n"])));
var TableHead = styled.thead(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""])));
var TableBody = styled.tbody(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
