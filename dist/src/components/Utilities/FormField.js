var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import { Fragment } from 'react';
import styled from 'styled-components';
export var FormField = function (_a) {
    var label = _a.label, type = _a.type, placeholder = _a.placeholder, name = _a.name, value = _a.value, onChange = _a.onChange, error = _a.error, aria = _a.aria;
    return (React.createElement(Fragment, null,
        React.createElement(Label, { htmlFor: name }),
        React.createElement(Span, null, label),
        React.createElement(Input, { type: type, placeholder: placeholder, name: name, id: name, value: value, onChange: onChange, error: error || 'none' })));
};
var Label = styled.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: block;\n    margin: 1rem auto 1rem auto;\n"], ["\n    display: block;\n    margin: 1rem auto 1rem auto;\n"])));
var Input = styled.input.attrs(function (props) { return ({
    type: props.type || 'type',
    placeholder: props.placeholder || 'placeholder'
}); })(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: block;\n    margin: 0rem auto 0rem auto;\n    width: 18rem;\n    padding: 0.5rem;\n    border: ", ";\n    border-radius: 0rem;\n    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.3);\n    font-size: 1rem;\n\n    &:focus {\n        border: 0;\n    }\n"], ["\n    display: block;\n    margin: 0rem auto 0rem auto;\n    width: 18rem;\n    padding: 0.5rem;\n    border: ", ";\n    border-radius: 0rem;\n    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.3);\n    font-size: 1rem;\n\n    &:focus {\n        border: 0;\n    }\n"])), function (props) { return (props.error === true ? '2px solid red' : 'none'); });
var Span = styled.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: block;\n    width: 18rem;\n    margin: 0rem auto 0rem auto;\n    padding: 0.1rem;\n    color: white;\n    font-weight: 500;\n    font-size: 0.8rem;\n\n    background: none;\n"], ["\n    display: block;\n    width: 18rem;\n    margin: 0rem auto 0rem auto;\n    padding: 0.1rem;\n    color: white;\n    font-weight: 500;\n    font-size: 0.8rem;\n\n    background: none;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
