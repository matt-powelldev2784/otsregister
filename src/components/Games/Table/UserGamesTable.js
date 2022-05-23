import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGamesData } from '../../redux/dataState';
import styled from 'styled-components';
import { makeUserGamesTable } from '../Utilites/makeUserGamesTable';
import { GamesTableHead } from './GamesTableHead';

export const UserGamesTable = () => {
    const dispatch = useDispatch();
    const { authToken } = useSelector(state => state.authReducer);
    const { gamesData } = useSelector(state => state.dataReducer);
    const { gamesList} = gamesData;

    useLayoutEffect(() => {
        if (authToken) {
            dispatch(getGamesData(authToken));
        }
    }, [authToken, dispatch]);

    const GamesTable = makeUserGamesTable(gamesList);

    return (
        <Section>
            <Table>
                <thead>
                    <GamesTableHead cell1="Game Date" cell2="Game Name" cell3="Register Status" cell4="Player Availability" />
                </thead>
                <tbody>{GamesTable}</tbody>
            </Table>
        </Section>
    );
};

const Section = styled.section`
    width: 100vw;
    margin: 0 auto 0 auto;
`;

const Table = styled.table`
    margin: 1rem auto 1rem auto;
    width: 90%;
    border-spacing: 0;
    border-bottom: 5px solid #011826;
`;
