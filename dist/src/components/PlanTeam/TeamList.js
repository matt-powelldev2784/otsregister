var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { movePlayerToDifferentTeam } from '../redux/dataState';
import { useDrop } from 'react-dnd';
import { PlayerItem } from './PlayerItem';
export var TeamList = function (_a) {
    var teamList = _a.teamList, teamName = _a.teamName;
    var dispatch = useDispatch();
    var _b = useDrop({
        accept: 'player',
        drop: function (item, monitor) {
            var playerId = item.id;
            var newTeam = monitor.targetId.substring(1);
            dispatch(movePlayerToDifferentTeam({ playerId: playerId, newTeam: newTeam }));
        },
        collect: function (monitor, props) { return ({
            isOver: !!monitor.isOver()
        }); }
    }), teamDropTarget = _b[1];
    var PlayersList;
    if (teamList && teamList.length > 0) {
        PlayersList = teamList.map(function (player) {
            var position = player.position, defaultTeam = player.defaultTeam;
            var _id = player.user._id;
            var name = player.user.name;
            return React.createElement(PlayerItem, { key: _id, id: _id, position: position, name: name, defaultTeam: defaultTeam });
        });
    }
    return (React.createElement(List, { ref: teamDropTarget },
        React.createElement(TeamContainer, null,
            React.createElement(TitleText, null, teamName),
            PlayersList)));
};
var List = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    text-align: center;\n    font-size: 1.2rem;\n    background: #003a68;\n    padding: 0rem;\n    margin: 0.5rem;\n    width: 17rem;\n    border-radius: 0.7rem 0.7rem 0rem 0rem;\n\n    @media (max-device-width: 440px) {\n        align-text: center;\n        width: 100vw;\n        margin: 0 auto 0.5rem auto;\n    }\n"], ["\n    text-align: center;\n    font-size: 1.2rem;\n    background: #003a68;\n    padding: 0rem;\n    margin: 0.5rem;\n    width: 17rem;\n    border-radius: 0.7rem 0.7rem 0rem 0rem;\n\n    @media (max-device-width: 440px) {\n        align-text: center;\n        width: 100vw;\n        margin: 0 auto 0.5rem auto;\n    }\n"])));
var TitleText = styled.h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    border-radius: 0.7rem 0.7rem 0rem 0rem;\n    text-align: center;\n    padding: 0.2rem;\n    font-weight: 700;\n    font-size: 1.5rem;\n    color: #003a68;\n    background: white;\n\n    @media (max-device-width: 440px) {\n        border-radius: 0rem;\n        font-weight: 700;\n        font-size: 1.5rem;\n        margin: 0;\n    }\n"], ["\n    border-radius: 0.7rem 0.7rem 0rem 0rem;\n    text-align: center;\n    padding: 0.2rem;\n    font-weight: 700;\n    font-size: 1.5rem;\n    color: #003a68;\n    background: white;\n\n    @media (max-device-width: 440px) {\n        border-radius: 0rem;\n        font-weight: 700;\n        font-size: 1.5rem;\n        margin: 0;\n    }\n"])));
var TeamContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject([""], [""])));
var templateObject_1, templateObject_2, templateObject_3;
