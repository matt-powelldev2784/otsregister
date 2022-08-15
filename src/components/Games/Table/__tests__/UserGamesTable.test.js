import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import React from 'react';
import { store } from '../../../redux/store';
import { Provider } from 'react-redux';
import axios from 'axios';
import { GamesTableHead } from '../../Table/GamesTableHead';
import { makeUserGamesTable } from '../../Utilites/makeUserGamesTable';
import { formatDate } from '../../../Utilities/formatDate';

const gamesData = [
    {
        _id: '62c476d76f6b17d784e80cc0',
        gameDate: formatDate(Date.now()),
        gameName: 'Game A',
        playersAvailable: [
            {
                _id: '62002d4afc707d88bbb9427b',
                user: {
                    _id: '61f83565160cbc8a030af4fd',
                    name: 'Matt Powell',
                    email: 'matt.powell100@gmail.com'
                },
                defaultTeam: '4',
                position: 'GK',
                date: '2022-02-06T20:19:22.234Z',
                __v: 0
            }
        ],
        playersUnavailable: [],
        finalTeam: [],
        gameClosed: false,
        currentPlayerAvailable: true,
        createdAt: '2022-07-05T17:37:27.341Z',
        __v: 0
    }
];

const tableHeadTitles = { cell1: 'Game Date', cell2: 'Game Name', cell3: 'Register Status', cell4: 'Player Availability' };

/*eslint-disable */
beforeEach(() => {});
/*eslint-enable */

jest.mock('axios');

describe('get games data and render component', () => {
    it('should return games data and render component', async () => {
        axios.get.mockResolvedValue(gamesData);
        const GamesTable = makeUserGamesTable(gamesData);

        render(
            <Provider store={store}>
                <section>
                    <table>
                        <thead>
                            <GamesTableHead {...tableHeadTitles} />
                        </thead>
                        <tbody>{GamesTable}</tbody>
                    </table>
                </section>
            </Provider>
        );

        screen.debug();
    });
});

test('should be able to click on toggle', () => {
    const toggleElement = screen.getByRole('checkbox');

    userEvent.click(toggleElement);
});
