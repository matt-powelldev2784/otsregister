var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { Fragment } from 'react';
import styled from 'styled-components';
export var Error = function (_a) {
    var errorMessage = _a.errorMessage;
    return (React.createElement(Fragment, null,
        React.createElement(ErrorMessage, { name: 'Error Message' }, errorMessage)));
};
var ErrorMessage = styled.h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    margin: 0.7rem auto 0.7rem auto;\n    padding: 0.2rem;\n    background: red;\n    width: 100%;\n    text-align: center;\n    font-weight: 500;\n    font-size: 1.3rem;\n    color: white;\n\n    @media (max-device-width: 440px) {\n        font-size: 1rem;\n        font-weight: 500;\n    }\n"], ["\n    margin: 0.7rem auto 0.7rem auto;\n    padding: 0.2rem;\n    background: red;\n    width: 100%;\n    text-align: center;\n    font-weight: 500;\n    font-size: 1.3rem;\n    color: white;\n\n    @media (max-device-width: 440px) {\n        font-size: 1rem;\n        font-weight: 500;\n    }\n"])));
var templateObject_1;
