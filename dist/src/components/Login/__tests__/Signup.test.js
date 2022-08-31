import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import React from 'react';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';
import { SignUp } from '../SignUp';
test('should render the <Login/> component.', function () {
    render(React.createElement(Provider, { store: store },
        React.createElement(SignUp, null)));
});
test('inputs should be initially empty', function () {
    render(React.createElement(Provider, { store: store },
        React.createElement(SignUp, null)));
    var nameElement = screen.getByPlaceholderText(/name/i);
    var emailInputElement = screen.getByPlaceholderText(/email/i);
    var passwordInputElement = screen.getByPlaceholderText('Password');
    var confirmPasswordInputElement = screen.getByPlaceholderText('Confirm Password');
    expect(nameElement.value).toBe('');
    expect(emailInputElement.value).toBe('');
    expect(passwordInputElement.value).toBe('');
    expect(confirmPasswordInputElement.value).toBe('');
});
test('should be able to type in name input', function () {
    render(React.createElement(Provider, { store: store },
        React.createElement(SignUp, null)));
    var nameElement = screen.getByPlaceholderText(/name/i);
    userEvent.type(nameElement, 'firstName Surname');
    expect(nameElement.value).toBe('firstName Surname');
});
test('should be able to type in email input', function () {
    render(React.createElement(Provider, { store: store },
        React.createElement(SignUp, null)));
    var emailInputElement = screen.getByPlaceholderText(/email/i);
    userEvent.type(emailInputElement, 'email@email.com');
    expect(emailInputElement.value).toBe('email@email.com');
});
test('should be able to type in password input', function () {
    render(React.createElement(Provider, { store: store },
        React.createElement(SignUp, null)));
    var passwordInputElement = screen.getByPlaceholderText('Password');
    userEvent.type(passwordInputElement, 'password');
    expect(passwordInputElement.value).toBe('password');
});
test('should be able to type in confirm password input', function () {
    render(React.createElement(Provider, { store: store },
        React.createElement(SignUp, null)));
    var confirmPasswordInputElement = screen.getByPlaceholderText('Confirm Password');
    userEvent.type(confirmPasswordInputElement, 'confirmPassword');
    expect(confirmPasswordInputElement.value).toBe('confirmPassword');
});
test('should be able to click button', function () {
    render(React.createElement(Provider, { store: store },
        React.createElement(SignUp, null)));
    var buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
});
