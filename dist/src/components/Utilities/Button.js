var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { Fragment } from 'react';
import styled from 'styled-components';
var Button = function (_a) {
    var onClick = _a.onClick, isLoading = _a.isLoading, text = _a.text;
    console.log('a');
    return (React.createElement(Fragment, null,
        React.createElement(MainButton, { onClick: onClick, isLoading: isLoading, disabled: isLoading, text: text }, text)));
};
export default Button;
var MainButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: block;\n    margin: 1rem auto 1rem auto;\n    color: white;\n    cursor: ", ";\n    background-color: #011826;\n    border: 3px solid white;\n    border-radius: 0.7rem;\n    padding: 0.5rem;\n    font-weight: 700;\n    font-size: 1.2rem;\n    letter-spacing: 0.05rem;\n\n    &:hover {\n        transition-duration: 0.4s;\n        background-color: white;\n        color: #011826;\n        border: 3px solid #011826;\n        &:hover {\n            cursor: ", ";\n        }\n    }\n\n    &:active {\n        transition-duration: 0.1s;\n        transform: translateY(1px);\n    }\n"], ["\n    display: block;\n    margin: 1rem auto 1rem auto;\n    color: white;\n    cursor: ", ";\n    background-color: #011826;\n    border: 3px solid white;\n    border-radius: 0.7rem;\n    padding: 0.5rem;\n    font-weight: 700;\n    font-size: 1.2rem;\n    letter-spacing: 0.05rem;\n\n    &:hover {\n        transition-duration: 0.4s;\n        background-color: white;\n        color: #011826;\n        border: 3px solid #011826;\n        &:hover {\n            cursor: ", ";\n        }\n    }\n\n    &:active {\n        transition-duration: 0.1s;\n        transform: translateY(1px);\n    }\n"])), function (props) { return (props.isLoading === true ? 'wait' : 'pointer'); }, function (props) { return (props.isLoading === true ? 'wait' : 'pointer'); });
var templateObject_1;
