var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
export var ToggleButton = function (_a) {
    var onClick = _a.onClick, defaultChecked = _a.defaultChecked, toggleColor = _a.toggleColor;
    var isLoading = useSelector(function (state) { return state.dataReducer; }).isLoading;
    return (React.createElement(Fragment, null,
        React.createElement(Input, { type: "checkbox", id: "playeravailibity", disabled: isLoading, onClick: onClick, defaultChecked: defaultChecked, toggleColor: toggleColor })));
};
var Input = styled.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    -webkit-appearance: none;\n    -webkit-tap-highlight-color: transparent;\n    position: relative;\n    border: 0;\n    margin: 0.5rem 0.5rem;\n    outline: 0;\n    cursor: pointer;\n    vertical-align: middle;\n    transform: translateY(1px);\n    \n\n    @media (max-device-width: 440px) {\n        display: block;\n        margin: 0.4rem auto;\n    }\n\n    &:after {\n        content: '';\n        width: 48px;\n        height: 22px;\n        display: inline-block;\n        border-radius: 18px;\n        clear: both;\n        background: ", "};\n    }\n\n    &:before {\n        content: '';\n        width: 26px;\n        height: 26px;\n        display: block;\n        position: absolute;\n        left: 0;\n        top: -3px;\n        border-radius: 50%;\n        background: rgb(255, 255, 255);\n        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);\n        \n    }\n\n    &:checked:before {\n        box-shadow: -1px 1px 3px rgba(0, 0, 0, 0.6);\n        left: 28px;\n        \n    }\n\n    &:checked:after {\n        background: ", ";\n    }\n"], ["\n    -webkit-appearance: none;\n    -webkit-tap-highlight-color: transparent;\n    position: relative;\n    border: 0;\n    margin: 0.5rem 0.5rem;\n    outline: 0;\n    cursor: pointer;\n    vertical-align: middle;\n    transform: translateY(1px);\n    \n\n    @media (max-device-width: 440px) {\n        display: block;\n        margin: 0.4rem auto;\n    }\n\n    &:after {\n        content: '';\n        width: 48px;\n        height: 22px;\n        display: inline-block;\n        border-radius: 18px;\n        clear: both;\n        background: ", "};\n    }\n\n    &:before {\n        content: '';\n        width: 26px;\n        height: 26px;\n        display: block;\n        position: absolute;\n        left: 0;\n        top: -3px;\n        border-radius: 50%;\n        background: rgb(255, 255, 255);\n        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);\n        \n    }\n\n    &:checked:before {\n        box-shadow: -1px 1px 3px rgba(0, 0, 0, 0.6);\n        left: 28px;\n        \n    }\n\n    &:checked:after {\n        background: ", ";\n    }\n"])), function (props) {
    return props.toggleColor.toggleOff;
}, function (props) {
    return props.toggleColor.toggleOn;
});
var templateObject_1;
