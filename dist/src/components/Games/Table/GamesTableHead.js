var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
export var GamesTableHead = function (props) {
    return (React.createElement(TableRow, null,
        React.createElement(TableHead, null, props.cell1),
        React.createElement(TableHead, null, props.cell2),
        React.createElement(TableHead, null, props.cell3),
        React.createElement(TableHead, null, props.cell4)));
};
var TableRow = styled.tr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background: white;\n    color: #003a68;\n"], ["\n    background: white;\n    color: #003a68;\n"])));
var TableHead = styled.th(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    padding: 0.7rem 0.5rem 0.4rem 0.5rem;\n    font-size: 1.2rem;\n    text-align: center;\n    border-bottom: 5px solid #011826;\n\n    &:first-child {\n        border: 1px solid none;\n        border-top-left-radius: 0.7rem;\n    }\n    &:last-child {\n        border: 1px solid none;\n        border-top-right-radius: 0.7rem;\n    }\n\n    @media (max-device-width: 440px) {\n        font-size: 1rem;\n    }\n"], ["\n    padding: 0.7rem 0.5rem 0.4rem 0.5rem;\n    font-size: 1.2rem;\n    text-align: center;\n    border-bottom: 5px solid #011826;\n\n    &:first-child {\n        border: 1px solid none;\n        border-top-left-radius: 0.7rem;\n    }\n    &:last-child {\n        border: 1px solid none;\n        border-top-right-radius: 0.7rem;\n    }\n\n    @media (max-device-width: 440px) {\n        font-size: 1rem;\n    }\n"])));
var templateObject_1, templateObject_2;
