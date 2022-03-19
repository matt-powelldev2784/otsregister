import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../../Context/authContext';
import styled from 'styled-components';
import { apiCall as closeGame } from '../../Login/authHelpers';
import { apiCall } from '../../Login/authHelpers';
import { GameStatus } from './GameStatus';
import { PlayerRegister } from './PlayerRegister';

export const GamesTableRow = props => {
    const navigate = useNavigate();
    const { token, authUser } = useContext(AuthContext);
    const updateAppState = useContext(AuthContext).setAppStateHandler;
    const adminUser = authUser.admin ? true : false;
    const gameId = props.gameId;
    const gameClosed = props.gameClosed;

    const gameStatusHandler = async () => {
        const changeGameStatus = gameClosed ? false : true;
        const body = { gameId: gameId, gameClosed: changeGameStatus };
        try {
            await closeGame('post', 'api/games/setregister', token, body);
            const gamesData = await apiCall('get', 'api/games/recentgames', token);
            updateAppState({ gamesData: gamesData, authError: false, authErrors: false });
        } catch (err) {
            console.log(err);
        }
    };

    const planTeamsHandler = () => {
        if (gameClosed) {
            sessionStorage.setItem('planTeamsGameId', gameId);
            updateAppState({ planTeamsGameId: gameId, authError: false, authErrors: false });
            navigate('/planteams');
        } else {
            const planTeamsError = [{ msg: 'Player registartion must be closed before planning teams!' }];
            updateAppState({ authError: true, authErrors: planTeamsError });
            //window.alert('Game registration must be closed to plan the teams!');
        }
    };

    return (
        <TableRow color={gameClosed ? '#707070' : undefined}>
            <TableCell color={gameClosed ? 'black' : undefined}>
                {adminUser && (
                    <Link onClick={planTeamsHandler} gameClosed={gameClosed}>
                        {props.gameDate}
                    </Link>
                )}
                {!adminUser && <span>{props.gameDate}</span>}
            </TableCell>
            <TableCell color={gameClosed ? 'black' : undefined}>{props.gameName}</TableCell>
            {adminUser && <TableCell color={gameClosed ? 'black' : undefined}>{props.registeredPlayers}</TableCell>}
            {!adminUser && (
                <TableCell color={gameClosed ? 'black' : undefined}>
                    {gameClosed && 'Register Closed'}
                    {!gameClosed && 'Register Open'}
                </TableCell>
            )}
            <TableCell>
                {adminUser && <GameStatus gameClosed={gameClosed} gameStatusHandler={gameStatusHandler} />}

                {!adminUser && <PlayerRegister gameId={gameId} gameClosed={gameClosed} />}
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
    color: ${props => props.gameClosed && '#003a68'};
    &:hover {
        border-bottom: 2px solid white;
        cursor: pointer;
    }
`;
