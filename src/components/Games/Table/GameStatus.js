import React, { Fragment } from 'react';
import styled from 'styled-components';
import { ToggleButton } from '../Utilites/ToggleButton';

export const GameStatus = props => {
    const gameClosed = props.gameClosed;
    const gameStatusHandler = props.gameStatusHandler;
    // const gameStatusHandler = () => {
    //     let confirmCloseGame = window.confirm(
    //         'Once the game registration is closed it cannot be reopened! Please confirm you are happy to proceed?'
    //     );
    // };

    return (
        <Fragment>
            <Flexbox>
                {gameClosed && <NameRed color={gameClosed ? 'black' : undefined}>Game Closed</NameRed>}
                {!gameClosed && <NameGreen>Game Open</NameGreen>}

                <ToggleButton onClick={gameStatusHandler} toggle={gameClosed} colorTrue={'black'} colorFalse={'green'} />
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
    border-radius: 14px;

    @media (max-device-width: 440px) {
        font-size: 1rem;
    }
`;

const NameRed = styled.p`
    display: inline-block;
    background: ${props => props.color};
    color: white;
    padding: 0.2rem 0.6rem;
    font-size: 1.2rem;
    border-radius: 14px;

    @media (max-device-width: 440px) {
        font-size: 1rem;
    }
`;
