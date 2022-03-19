import React, { Fragment, useContext, useState, useEffect } from 'react';
import AuthContext from '../../../Context/authContext';
import styled from 'styled-components';
import { apiCall } from '../../Login/authHelpers';

export const GameClosed = props => {
    const [playerAvailable, setPlayerAvailable] = useState(null);
    const { authUser, token } = useContext(AuthContext);
    const playerName = authUser.name;
    const gameId = props.gameId;
    const gameClosed = props.gameClosed;

    useEffect(() => {
        const getPlayerAvailability = async () => {
            const body = { gameId: gameId };
            const playerAvailibility = await apiCall('post', 'api/games/playerstatus', token, body);
            setPlayerAvailable(playerAvailibility.available);
        };
        getPlayerAvailability();
    }, [gameId, token]);

    return (
        <Fragment>
            <Flexbox>
            {playerAvailable && <NameGreen color={gameClosed ? '#707070' : undefined}>{playerName} Available</NameGreen>}
            {!playerAvailable && <NameRed color={gameClosed ? '#707070' : undefined}>{playerName} NOT Available</NameRed>}
            </Flexbox>
        </Fragment>
    );
};

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

const NameGreen = styled.p`
    display: inline-block;
    background: ${props => props.color || 'green'};
    color: black;
    margin: 0rem 0.1rem 0rem 0.1rem;
    padding: 0.3rem;
    text-align: center;
    font-size: 1.2rem;

    @media (max-device-width: 440px) {
        font-size: 1rem;
    }
`;

const NameRed = styled.p`
    display: inline-block;
    background: ${props => props.color};
    color: black;
    margin: 0rem 0.1rem 0rem 0.1rem;
    padding: 0.3rem;
    text-align: center;
    font-size: 1.2rem;

    @media (max-device-width: 440px) {
        font-size: 0.9rem;
    }
`;
