var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
export var MenuElement = function (_a) {
    var href = _a.href, menuContent = _a.menuContent;
    return (React.createElement(FlexItem, null,
        React.createElement(Container, { href: href },
            React.createElement(MenuItem, null, menuContent))));
};
var FlexItem = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: block;\n    color: white;\n    font-family: Roboto;\n    font-weight: 500;\n\n    @media (max-device-width: 440px) {\n        width: 100vw;\n        font-size: 1.5rem;\n    }\n"], ["\n    display: block;\n    color: white;\n    font-family: Roboto;\n    font-weight: 500;\n\n    @media (max-device-width: 440px) {\n        width: 100vw;\n        font-size: 1.5rem;\n    }\n"])));
var Container = styled.a(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    color: white;\n    text-align: center;\n"], ["\n    color: white;\n    text-align: center;\n"])));
var MenuItem = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    color: white;\n    padding: 0.6rem 1.5rem 0.6rem 1.5rem;\n    font-family: Roboto;\n    font-weight: 500;\n    border-bottom: 3px solid transparent;\n\n    &:hover {\n        border-bottom: solid 3px #011826;\n        color: #99d8e1;\n    }\n\n    @media (max-device-width: 440px) {\n        width: 90vw;\n        margin: 0 auto 0 auto;\n        padding: 0.4rem;\n        border-bottom: solid 1px #011826;\n\n        &:hover {\n            border-bottom: solid 1px #011826;\n            color: #99d8e1;\n        }\n    }\n"], ["\n    color: white;\n    padding: 0.6rem 1.5rem 0.6rem 1.5rem;\n    font-family: Roboto;\n    font-weight: 500;\n    border-bottom: 3px solid transparent;\n\n    &:hover {\n        border-bottom: solid 3px #011826;\n        color: #99d8e1;\n    }\n\n    @media (max-device-width: 440px) {\n        width: 90vw;\n        margin: 0 auto 0 auto;\n        padding: 0.4rem;\n        border-bottom: solid 1px #011826;\n\n        &:hover {\n            border-bottom: solid 1px #011826;\n            color: #99d8e1;\n        }\n    }\n"])));
var templateObject_1, templateObject_2, templateObject_3;
