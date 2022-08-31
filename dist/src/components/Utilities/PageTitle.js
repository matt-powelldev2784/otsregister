var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { Fragment } from 'react';
import styled from 'styled-components';
export var PageTitle = function (_a) {
    var text = _a.text;
    return (React.createElement(Fragment, null,
        React.createElement(TitleText, null, text)));
};
var TitleText = styled.h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: block;\n    margin: 1.5rem auto 1.5rem auto;\n    text-align: center;\n    padding: 0.5rem;\n    font-weight: 700;\n    font-size: 2rem;\n    color: white;\n\n    @media (max-device-width: 440px) {\n        margin: 0.4rem 0rem 0.4rem 0rem;\n        color: #003a68;\n        background: white;\n    }\n"], ["\n    display: block;\n    margin: 1.5rem auto 1.5rem auto;\n    text-align: center;\n    padding: 0.5rem;\n    font-weight: 700;\n    font-size: 2rem;\n    color: white;\n\n    @media (max-device-width: 440px) {\n        margin: 0.4rem 0rem 0.4rem 0rem;\n        color: #003a68;\n        background: white;\n    }\n"])));
var templateObject_1;
