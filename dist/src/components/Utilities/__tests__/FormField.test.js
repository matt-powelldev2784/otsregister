var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import React from 'react';
import { FormField } from '../FormField';
var FormFieldAttributes = {
    type: 'text',
    placeholder: 'Placeholder-Text',
    label: 'LABEL TEST',
    name: 'Test-Form-Field'
};
test('should be able view 1 error message', function () {
    render(React.createElement(FormField, __assign({}, FormFieldAttributes)));
    var FormFieldElement = screen.getByPlaceholderText('Placeholder-Text');
    expect(FormFieldElement).toBeInTheDocument();
});
test('should be able to type in form field input', function () {
    render(React.createElement(FormField, __assign({}, FormFieldAttributes)));
    var FormFieldElement = screen.getByPlaceholderText('Placeholder-Text');
    userEvent.type(FormFieldElement, 'email@email.com');
    expect(FormFieldElement.value).toBe('email@email.com');
});
