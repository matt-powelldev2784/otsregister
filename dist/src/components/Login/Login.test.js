import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import React from 'react';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { Login } from './Login';
var emailInputElement;
var passwordInputElement;
var ErrorElement;
var subitButtonElement;
/*eslint-disable */
beforeEach(function () {
    render(React.createElement(Provider, { store: store },
        React.createElement(Login, null)));
    emailInputElement = screen.getByLabelText(/email/i);
    passwordInputElement = screen.getByLabelText(/password/i);
    ErrorElement = screen.queryByText(/Please include a valid email/i);
    subitButtonElement = screen.getByRole('button');
});
/*eslint-enable */
test('should render the <Login/> component.', function () { });
test('inputs should be initially empty', function () {
    expect(emailInputElement.value).toBe('');
    expect(passwordInputElement.value).toBe('');
});
test('should be able to type in email input', function () {
    userEvent.type(emailInputElement, 'email@email.com');
    expect(emailInputElement.value).toBe('email@email.com');
});
test('should be able to type in password input', function () {
    userEvent.type(passwordInputElement, 'password');
    expect(passwordInputElement.value).toBe('password');
});
//TODO update test for async
// test('should show error message on invalid email', () => {
//     userEvent.type(emailInputElement, 'invalidEmail@invalidEmailNoDotCom');
//     userEvent.click(subitButtonElement);
//     expect(ErrorElement).not.toBeInTheDocument();
// });
