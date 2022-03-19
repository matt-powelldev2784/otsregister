import React, { Fragment, useContext, useState, useEffect } from 'react';
import AuthContext from '../../../Context/authContext';
import styled from 'styled-components';
import { apiCall as registerPlayer } from '../../Login/authHelpers';
import { apiCall } from '../../Login/authHelpers';
import { ToggleButton } from '../Utilites/ToggleButton';

export const GameOpen = props => {
    const [playerAvailable, setPlayerAvailable] = useState(null);
    const { authUser, token } = useContext(AuthContext);
    const updateAppState = useContext(AuthContext).setAppStateHandler;
    const playerName = authUser.name;
    const gameId = props.gameId;

    useEffect(() => {
        const getPlayerAvailability = async () => {
            const body = { gameId: gameId };
            const playerAvailibility = await apiCall('post', 'api/games/playerstatus', token, body);
            setPlayerAvailable(playerAvailibility.available);
        };
        getPlayerAvailability();
    }, [token, gameId, setPlayerAvailable]);

    const playerRegHandler = async () => {
        const body = { gameId: gameId, playerAvailable: !playerAvailable };
        try {
            await registerPlayer('post', 'api/games/registerforgame', token, body);
            const gamesData = await apiCall('get', 'api/games/recentgames', token);
            updateAppState({ gamesData: gamesData });
            setPlayerAvailable(body.playerAvailable);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Fragment>
            <Flexbox>
                {playerAvailable && <NameGreen>{playerName} Available</NameGreen>}
                {!playerAvailable && <NameRed>{playerName} NOT Available</NameRed>}
                <ToggleButton onClick={playerRegHandler} toggle={playerAvailable} />
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
    background: green;
    color: white;
    padding: 0.2rem 0.6rem;
    font-size: 1.2rem;
    text-align: center;
    border-radius: 14px;

    @media (max-device-width: 440px) {
        font-size: 1rem;
    }
`;

const NameRed = styled.p`
    display: inline-block;
    background: red;
    color: white;
    padding: 0.2rem 0.6rem;
    text-align: center;
    font-size: 1.2rem;
    border-radius: 14px;

    @media (max-device-width: 440px) {
        font-size: 1rem;
    }
`;
