import React from 'react';
import styled from 'styled-components';
import { AdminTableRow } from '../Table/AdminTableRow';
import { formatDate } from '../../Utilities/formatDate';

export const makeAdminGamesTable = gamesData => {
     let GamesTable;

    if (gamesData) {
        GamesTable = gamesData.map(game => {
            const gameDate = formatDate(game.gameDate);
            const { gameName, _id, registeredPlayers = game.playersAvailable.length, gameClosed } = game;

            return (
                <AdminTableRow
                    key={_id}
                    gameId={_id}
                    gameClosed={gameClosed}
                    gameDate={gameDate}
                    gameName={gameName}
                    registeredPlayers={registeredPlayers}
                />
            );
        });
    } else {
        return (
            <TableRow>
                <TableCell></TableCell>
                <TableCell>No Games Scheduled</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
            </TableRow>
        );
    }
    return GamesTable;
};

const TableRow = styled.tr`
    height: 3rem;
    font-weight: 500;

    &:nth-child(even) {
        background: ${props => props.color || 'white'};
        color: #003a68;
    }

    &:nth-child(odd) {
        background: ${props => props.color || '#003a68'};
        color: white;
    }
`;

const TableCell = styled.td`
    padding: 0.4rem 0.5rem 0.4rem 0.5rem;
    color: ${props => props.color};
    text-align: center;

    @media (max-device-width: 440px) {
        font-size: 1rem;
    }
`;
