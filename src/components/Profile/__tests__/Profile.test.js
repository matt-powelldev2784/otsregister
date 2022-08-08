import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import React from 'react';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';
import { Profile } from '../Profile';

test('should render the <Profile/> component', () => {
    render(
        <Provider store={store}>
            <Profile />
        </Provider>
    );
});

test('check usual matchday input can be changed', () => {
    render(
        <Provider store={store}>
            <Profile />
        </Provider>
    );

    const usualMatchdayTeamInputElement = screen.getByPlaceholderText('Usual Matchday Team');
    expect(usualMatchdayTeamInputElement).toBeInTheDocument();
    userEvent.selectOptions(usualMatchdayTeamInputElement, '5');
    userEvent.selectOptions(usualMatchdayTeamInputElement, '1');
    expect(usualMatchdayTeamInputElement.value).toBe('1');
});

test('check position input can be changed', () => {
    render(
        <Provider store={store}>
            <Profile />
        </Provider>
    );

    const positionInputElement = screen.getByPlaceholderText('Position');
    expect(positionInputElement).toBeInTheDocument();
    userEvent.selectOptions(positionInputElement, 'GK');
    userEvent.selectOptions(positionInputElement, 'LB');
    expect(positionInputElement.value).toBe('LB');
});

test('check button is in document and can be clicked', () => {
    render(
        <Provider store={store}>
            <Profile />
        </Provider>
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    userEvent.click(button);
});

test('checked the api data is rendered and the profile can be updated', () => {
    render(
        <Provider store={store}>
            <Profile />
        </Provider>
    );
});
