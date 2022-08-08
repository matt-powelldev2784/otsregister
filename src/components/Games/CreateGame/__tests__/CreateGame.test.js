import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import React from 'react';
import { store } from '../../../redux/store';
import { Provider } from 'react-redux';
import { CreateGame } from '../CreateGame';

test('should render the <CreasteGame/> component', () => {
    render(
        <Provider store={store}>
            <CreateGame />
        </Provider>
    );
});

test('check date input can be changed', () => {
    render(
        <Provider store={store}>
            <CreateGame />
        </Provider>
    );

    const dateInputElement = screen.getByPlaceholderText('Game Date');
    expect(dateInputElement).toBeInTheDocument();
    fireEvent.change(dateInputElement, { target: { value: '2020-05-24' } });
    expect(dateInputElement.value).toBe('2020-05-24');
});

test('game name input should be initially empty', () => {
    render(
        <Provider store={store}>
            <CreateGame />
        </Provider>
    );
    const gameNameInputElement = screen.getByPlaceholderText(/game name/i);
    expect(gameNameInputElement.value).toBe('');
});

test('check game name input can be changed', () => {
    render(
        <Provider store={store}>
            <CreateGame />
        </Provider>
    );

    const gameNameInputElement = screen.getByPlaceholderText(/game name/i);
    userEvent.type(gameNameInputElement, 'Test Game A');
    expect(gameNameInputElement.value).toBe('Test Game A');
});
