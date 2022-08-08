import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import React from 'react';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';
import { SignUp } from '../SignUp';

test('should render the <Login/> component.', () => {
    render(
        <Provider store={store}>
            <SignUp />
        </Provider>
    );
});

test('inputs should be initially empty', () => {
    render(
        <Provider store={store}>
            <SignUp />
        </Provider>
    );
    const nameElement = screen.getByPlaceholderText(/name/i);
    const emailInputElement = screen.getByPlaceholderText(/email/i);
    const passwordInputElement = screen.getByPlaceholderText('Password');
    const confirmPasswordInputElement = screen.getByPlaceholderText('Confirm Password');

    expect(nameElement.value).toBe('');
    expect(emailInputElement.value).toBe('');
    expect(passwordInputElement.value).toBe('');
    expect(confirmPasswordInputElement.value).toBe('');
});

test('should be able to type in name input', () => {
    render(
        <Provider store={store}>
            <SignUp />
        </Provider>
    );
    const nameElement = screen.getByPlaceholderText(/name/i);
    userEvent.type(nameElement, 'firstName Surname');
    expect(nameElement.value).toBe('firstName Surname');
});

test('should be able to type in email input', () => {
    render(
        <Provider store={store}>
            <SignUp />
        </Provider>
    );
    const emailInputElement = screen.getByPlaceholderText(/email/i);
    userEvent.type(emailInputElement, 'email@email.com');
    expect(emailInputElement.value).toBe('email@email.com');
});

test('should be able to type in password input', () => {
    render(
        <Provider store={store}>
            <SignUp />
        </Provider>
    );
    const passwordInputElement = screen.getByPlaceholderText('Password');
    userEvent.type(passwordInputElement, 'password');
    expect(passwordInputElement.value).toBe('password');
});

test('should be able to type in confirm password input', () => {
    render(
        <Provider store={store}>
            <SignUp />
        </Provider>
    );
    const confirmPasswordInputElement = screen.getByPlaceholderText('Confirm Password');
    userEvent.type(confirmPasswordInputElement, 'confirmPassword');
    expect(confirmPasswordInputElement.value).toBe('confirmPassword');
});

test('should be able to click button', () => {
    render(
        <Provider store={store}>
            <SignUp />
        </Provider>
    );
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
});
