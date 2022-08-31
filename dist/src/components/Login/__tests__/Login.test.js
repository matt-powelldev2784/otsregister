import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import React from 'react';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';
import { Login } from '../Login';
test('should render the <Login/> component.', function () {
    render(React.createElement(Provider, { store: store },
        React.createElement(Login, null)));
});
test('inputs should be initially empty', function () {
    render(React.createElement(Provider, { store: store },
        React.createElement(Login, null)));
    var emailInputElement = screen.getByPlaceholderText(/email/i);
    var passwordInputElement = screen.getByPlaceholderText(/password/i);
    expect(emailInputElement.value).toBe('');
    expect(passwordInputElement.value).toBe('');
});
test('should be able to type in email input', function () {
    render(React.createElement(Provider, { store: store },
        React.createElement(Login, null)));
    var emailInputElement = screen.getByPlaceholderText(/email/i);
    userEvent.type(emailInputElement, 'email@email.com');
    expect(emailInputElement.value).toBe('email@email.com');
});
test('should be able to type in password input', function () {
    render(React.createElement(Provider, { store: store },
        React.createElement(Login, null)));
    var passwordInputElement = screen.getByPlaceholderText(/password/i);
    userEvent.type(passwordInputElement, 'password');
    expect(passwordInputElement.value).toBe('password');
});
test('should be able to click button', function () {
    render(React.createElement(Provider, { store: store },
        React.createElement(Login, null)));
    var buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
});
