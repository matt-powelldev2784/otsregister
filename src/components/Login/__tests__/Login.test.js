import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import React from 'react';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';
import { Login } from '../Login';

test('should render the <Login/> component.', () => {
    render(
        <Provider store={store}>
            <Login />
        </Provider>
    );
});

test('inputs should be initially empty', () => {
    render(
        <Provider store={store}>
            <Login />
        </Provider>
    );
    const emailInputElement = screen.getByPlaceholderText(/email/i);
    const passwordInputElement = screen.getByPlaceholderText(/password/i);
    expect(emailInputElement.value).toBe('');
    expect(passwordInputElement.value).toBe('');
});

test('should be able to type in email input', () => {
    render(
        <Provider store={store}>
            <Login />
        </Provider>
    );
    const emailInputElement = screen.getByPlaceholderText(/email/i);
    userEvent.type(emailInputElement, 'email@email.com');
    expect(emailInputElement.value).toBe('email@email.com');
});

test('should be able to type in password input', () => {
    render(
        <Provider store={store}>
            <Login />
        </Provider>
    );
    const passwordInputElement = screen.getByPlaceholderText(/password/i);
    userEvent.type(passwordInputElement, 'password');
    expect(passwordInputElement.value).toBe('password');
});

test('should be able to click button', () => {
    render(
        <Provider store={store}>
            <Login />
        </Provider>
    );
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
});
