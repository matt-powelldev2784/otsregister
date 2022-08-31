var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { LogoTitle } from './LogoTitle';
import { Navbar } from './Navbar';
export var Header = function () {
    return (React.createElement(Fragment, null,
        React.createElement(Container, null,
            React.createElement(Flexbox, null,
                React.createElement(FlexItem, null,
                    React.createElement(LogoTitle, null)),
                React.createElement(FlexItem, null,
                    React.createElement(Navbar, null))))));
};
var Container = styled.header(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100vw;\n    background-color: #003a68;\n"], ["\n    width: 100vw;\n    background-color: #003a68;\n"])));
var Flexbox = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    background-color: #003a68;\n    max-width: 1600px;\n    margin: auto;\n\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n\n    @media (max-device-width: 440px) {\n        justify-content: center;\n    }\n"], ["\n    background-color: #003a68;\n    max-width: 1600px;\n    margin: auto;\n\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n\n    @media (max-device-width: 440px) {\n        justify-content: center;\n    }\n"])));
var FlexItem = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: block;\n    margin: 0 auto 0 auto;\n    color: white;\n    font-family: Roboto;\n    font-weight: 500;\n"], ["\n    display: block;\n    margin: 0 auto 0 auto;\n    color: white;\n    font-family: Roboto;\n    font-weight: 500;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
