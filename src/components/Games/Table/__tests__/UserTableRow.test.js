import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import React from 'react';
import { store } from '../../../redux/store';
import { Provider } from 'react-redux';
import { UserTableRow } from '../UserTableRow';
import { formatDate } from '../../../Utilities/formatDate';

const tableRowProps = {
    gameId: '62ab37252d13fc6ef83615f6',
    gameDate: formatDate(Date.now()),
    gameName: 'GameName',
    registeredPlayers: 1,
    gameClosed: false,
    currentPlayerAvailable: true
};

const { gameDate, gameName } = tableRowProps;

let toggleElement;
let gameDateElement;
let gameNameElement;
let registerStatusElement;
let playersAvailableElement;

/*eslint-disable */
beforeEach(() => {
    render(
        <Provider store={store}>
            <table>
                <thead></thead>
                <tbody>
                    <UserTableRow {...tableRowProps} />
                </tbody>
            </table>
        </Provider>
    );

    toggleElement = screen.getByRole('checkbox');
    gameDateElement = screen.getByText(gameDate);
    gameNameElement = screen.getByText(gameName);
    registerStatusElement = screen.getByText(/register open/i);
    playersAvailableElement = screen.getByText(/available players/i);
});
/*eslint-enable */

test('should render the <UserTableRow/> component.', () => {});

test('check all table fields render', () => {
    expect(gameDateElement).toBeInTheDocument();
    expect(gameNameElement).toBeInTheDocument();
    expect(registerStatusElement).toBeInTheDocument();
    expect(playersAvailableElement).toBeInTheDocument();
});

test('should be able to click on toggle', () => {
    userEvent.click(toggleElement);
});
