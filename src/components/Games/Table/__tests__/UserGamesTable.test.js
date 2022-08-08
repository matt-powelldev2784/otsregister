import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import React from 'react';
//import { store } from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import { UserGamesTable } from '../UserGamesTable';

import { configureStore } from '@reduxjs/toolkit';
import { dataReducer } from '../../../redux/dataState';
import { globalReducer } from '../../../redux/globalState';
import { authReducer } from '../../../redux/authState';

export const store = configureStore({
    reducer: { globalReducer: globalReducer, authReducer: authReducer, dataReducer: dataReducer },
    preloadedState: {
        dataReducer: {
            gamesData: {
                gamesList: [
                    {
                        _id: '62dffe47d6ae604a6b49709d',
                        gameDate: '2022-08-07T00:00:00.000Z',
                        gameName: 'Game E',
                        playersAvailable: [
                            {
                                _id: '62d58917d6ae604a6b49692d',
                                user: { _id: '62d58916d6ae604a6b49692a', name: 'Matt Powell', email: 'matt.powell2784@gmail.com' },
                                defaultTeam: '3',
                                position: 'GK',
                                date: '2022-07-18T16:23:51.215Z',
                                __v: 0
                            }
                        ],
                        playersUnavailable: [],
                        finalTeam: [],
                        gameClosed: false,
                        createdAt: '2022-07-26T14:46:31.421Z',
                        __v: 0
                    },
                    {
                        _id: '62dfe539d6ae604a6b49703a',
                        gameDate: '2022-07-31T00:00:00.000Z',
                        gameName: 'Name',
                        playersAvailable: [],
                        playersUnavailable: [],
                        finalTeam: [],
                        gameClosed: false,
                        createdAt: '2022-07-26T12:59:37.904Z',
                        __v: 0
                    },
                    {
                        _id: '62deba9cd6ae604a6b49701a',
                        gameDate: '2022-07-30T00:00:00.000Z',
                        gameName: 'Test A',
                        playersAvailable: [],
                        playersUnavailable: [],
                        finalTeam: [],
                        gameClosed: false,
                        createdAt: '2022-07-25T15:45:32.471Z',
                        __v: 0
                    },
                    {
                        _id: '62cdbf522070ae44b55d2b95',
                        gameDate: '2022-07-23T00:00:00.000Z',
                        gameName: 'Game C',
                        playersAvailable: [
                            {
                                _id: '62002d4afc707d88bbb9427b',
                                user: { _id: '61f83565160cbc8a030af4fd', name: 'Matt Powell', email: 'matt.powell100@gmail.com' },
                                defaultTeam: '4',
                                position: 'GK',
                                date: '2022-02-06T20:19:22.234Z',
                                __v: 0
                            },
                            {
                                _id: '62d58917d6ae604a6b49692d',
                                user: { _id: '62d58916d6ae604a6b49692a', name: 'Matt Powell', email: 'matt.powell2784@gmail.com' },
                                defaultTeam: '3',
                                position: 'GK',
                                date: '2022-07-18T16:23:51.215Z',
                                __v: 0
                            }
                        ],
                        playersUnavailable: [],
                        finalTeam: [
                            {
                                _id: '62002d4afc707d88bbb9427b',
                                user: { _id: '61f83565160cbc8a030af4fd', name: 'Matt Powell', email: 'matt.powell100@gmail.com' },
                                defaultTeam: '4',
                                position: 'GK',
                                date: '2022-02-06T20:19:22.234Z',
                                __v: 0
                            },
                            {
                                _id: '62d58917d6ae604a6b49692d',
                                user: { _id: '62d58916d6ae604a6b49692a', name: 'Matt Powell', email: 'matt.powell2784@gmail.com' },
                                defaultTeam: '3',
                                position: 'GK',
                                date: '2022-07-18T16:23:51.215Z',
                                __v: 0
                            }
                        ],
                        gameClosed: false,
                        createdAt: '2022-07-12T18:37:06.747Z',
                        __v: 0
                    }
                ]
            }
        }
    }
});

console.log('store.getState', store.getState().dataReducer.gamesData.gamesList);

test('should render the <UserTableRow/> component.', () => {
    render(
        <Provider store={store}>
            <UserGamesTable />
        </Provider>
    );
});
