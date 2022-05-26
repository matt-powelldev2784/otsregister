import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPlanGamesId, setGamesNotClosedError, deletePlanTeamsGameId } from '../../redux/dataState';
import styled from 'styled-components';
import { GameStatus } from './AdminGameStatus';

export const AdminTableRow = ({ gameId, gameDate, gameName, registeredPlayers, gameClosed }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const planTeamsHandler = () => {
        sessionStorage.removeItem('planTeamsGameId', gameId);
        dispatch(deletePlanTeamsGameId());
        if (gameClosed) {
            sessionStorage.setItem('planTeamsGameId', gameId);
            dispatch(setPlanGamesId(gameId));
            navigate('/planteams');
        } else {
            const planTeamsError = [{ msg: 'Player registartion must be closed before planning teams!' }];
            dispatch(setGamesNotClosedError(planTeamsError));
        }
    };

    return (
        <TableRow>
            <TableCell>
                <Link onClick={planTeamsHandler}>{gameDate}</Link>
            </TableCell>
            <TableCell>{gameName}</TableCell>
            <TableCell>{registeredPlayers}</TableCell>
            <TableCell>
                <GameStatus gameClosed={gameClosed} gameId={gameId} />
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

const Link = styled.span`
    text-decoration: ${props => props.gameClosed && 'underline'};
    color: '#003a68';
    &:hover {
        border-bottom: 2px solid white;
        cursor: pointer;
    }
`;
