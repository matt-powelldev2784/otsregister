var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Teams } from './Teams';
import { TableForEmailButton } from './TableForEmailButton';
import { PageTitle } from '../Utilities/PageTitle';
import { Errors } from '../Utilities/Errors';
export var PlanTeams = function (props) {
    var planTeamsData = useSelector(function (state) { return state.dataReducer; }).planTeamsData;
    var authErrors = planTeamsData.authErrors, fixtureDate = planTeamsData.fixtureDate, fixtureName = planTeamsData.fixtureName;
    return (React.createElement(Container, null,
        React.createElement(DndProvider, { backend: HTML5Backend },
            authErrors && React.createElement(Errors, { errors: authErrors }),
            React.createElement(PageTitle, { text: "Final Teams for ".concat(fixtureName, " on ").concat(fixtureDate) }),
            React.createElement(Teams, null),
            React.createElement(TableForEmailButton, { text: 'Display Table for Email', navigationPage: '/emailtable' }))));
};
var Container = styled.section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n    top: 0;\n    width: 100%;\n    height: 100vh;\n"], ["\n    position: relative;\n    top: 0;\n    width: 100%;\n    height: 100vh;\n"])));
var templateObject_1;
