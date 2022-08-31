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
import { store } from '../../../redux/store';
import { Provider } from 'react-redux';
import { ToggleButton } from '../ToggleButton';
test('check button is in document and can be clicked', function () {
    var props = { toggleColor: { toggleOn: 'green', toggleOff: 'red' } };
    render(React.createElement(Provider, { store: store },
        React.createElement(ToggleButton, __assign({}, props))));
    var toggleInputElement = screen.getByRole('checkbox');
    expect(toggleInputElement).toBeInTheDocument();
    expect(toggleInputElement.type).toBe('checkbox');
    expect(toggleInputElement.checked).toBe(false);
    userEvent.click(toggleInputElement);
    expect(toggleInputElement.checked).toBe(true);
});
