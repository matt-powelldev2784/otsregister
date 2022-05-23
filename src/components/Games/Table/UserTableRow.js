import React from 'react';
import { UserGameOpen } from './UserGameOpen';
import { UserGameClosed } from './UserGameClosed';
import styled from 'styled-components';

export const UserTableRow = ({ gameId, gameDate, gameName, registeredPlayers, gameClosed, currentPlayerAvailable }) => {
    const gameClosedBackgroundColor = gameClosed ? '#707070' : undefined;
    const gameClosedText = gameClosed ? 'Register Closed' : 'Register Open';

    return (
        <TableRow color={gameClosedBackgroundColor}>
            <TableCell>{gameDate}</TableCell>
            <TableCell>{gameName}</TableCell>
            <TableCell>
                {gameClosedText}
                <br />
                {registeredPlayers} Available Players
            </TableCell>
            <TableCell>
                <Flexbox>
                    {!gameClosed && <UserGameOpen gameId={gameId} currentPlayerAvailable={currentPlayerAvailable} />}
                    {gameClosed && <UserGameClosed gameId={gameId} currentPlayerAvailable={currentPlayerAvailable} />}
                </Flexbox>
            </TableCell>
        </TableRow>
    );
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

const Flexbox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0rem auto 0.3rem auto;

    @media (max-device-width: 440px) {
        flex-direction: column;
    }
`;
