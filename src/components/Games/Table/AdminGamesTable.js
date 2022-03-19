import React, { useContext, useLayoutEffect } from 'react';
import AuthContext from '../../../Context/authContext';
import { apiCall } from '../../Login/authHelpers';
import styled from 'styled-components';
import { makeGamesTable } from '../Utilites/makeGamesTable';
import { GamesTableHead } from './GamesTableHead';

export const AdminGamesTable = () => {
    const { token, gamesData } = useContext(AuthContext);
    const updateAppState = useContext(AuthContext).setAppStateHandler;

    useLayoutEffect(() => {
        const getGamesData = async () => {
            const gamesData = await apiCall('get', 'api/games/recentgames', token);
            updateAppState({ gamesData: gamesData });
        };
        getGamesData();
    }, [token, updateAppState]);

    const GamesTable = makeGamesTable(gamesData);

    return (
        <Section>
            <Table>
                <thead>
                    <GamesTableHead cell1="Game Date" cell2="Game Name" cell3="Available Players" cell4="Register Status" />
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
