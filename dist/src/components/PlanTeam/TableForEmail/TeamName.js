var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
export var TeamName = function (_a) {
    var teamName = _a.teamName;
    return React.createElement(TableHead, null, teamName);
};
var TableHead = styled.th(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: 0.7rem 0.5rem 0.4rem 0.5rem;\n    font-size: 1.2rem;\n    text-align: center;\n\n    &:nth-child(even) {\n        background: #011826;\n        color: #003a68;\n    }\n\n    &:nth-child(odd) {\n        background: '#003a68';\n        color: white;\n    }\n\n    @media (max-device-width: 440px) {\n        font-size: 1rem;\n    }\n"], ["\n    padding: 0.7rem 0.5rem 0.4rem 0.5rem;\n    font-size: 1.2rem;\n    text-align: center;\n\n    &:nth-child(even) {\n        background: #011826;\n        color: #003a68;\n    }\n\n    &:nth-child(odd) {\n        background: '#003a68';\n        color: white;\n    }\n\n    @media (max-device-width: 440px) {\n        font-size: 1rem;\n    }\n"])));
var templateObject_1;
