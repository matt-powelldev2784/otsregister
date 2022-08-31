var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { Fragment } from 'react';
import styled from 'styled-components';
export var TableButton = function (_a) {
    var color = _a.color, bgColor = _a.bgColor, width = _a.width, onClick = _a.onClick, isLoading = _a.isLoading, text = _a.text;
    return (React.createElement(Fragment, null,
        React.createElement(Button, { color: color, bgColor: bgColor, width: width, onClick: onClick, isLoading: isLoading }, text)));
};
var Button = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    color: ", ";\n    background-color: ", ";\n    border: none;\n    padding: 0.2rem 0.5rem;\n    margin: 0.3rem 0.5rem 0.3rem 0.5rem;\n    width: ", ";\n    border-radius: 14px;\n    font-size: 1.2rem;\n    letter-spacing: 0.05rem;\n    cursor: pointer;\n\n    &:active {\n        transition-duration: 0.1s;\n        transform: translateY(1px);\n    }\n\n    @media (max-device-width: 440px) {\n        font-size: 1rem;\n        padding: 0.3rem;\n    }\n"], ["\n    color: ", ";\n    background-color: ", ";\n    border: none;\n    padding: 0.2rem 0.5rem;\n    margin: 0.3rem 0.5rem 0.3rem 0.5rem;\n    width: ", ";\n    border-radius: 14px;\n    font-size: 1.2rem;\n    letter-spacing: 0.05rem;\n    cursor: pointer;\n\n    &:active {\n        transition-duration: 0.1s;\n        transform: translateY(1px);\n    }\n\n    @media (max-device-width: 440px) {\n        font-size: 1rem;\n        padding: 0.3rem;\n    }\n"])), function (props) { return props.color; }, function (props) { return props.bgColor; }, function (props) { return props.width; });
var templateObject_1;
