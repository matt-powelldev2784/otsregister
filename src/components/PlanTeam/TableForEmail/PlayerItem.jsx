import React from 'react';
import styled from 'styled-components';

export const PlayerItem = ({ playerName }) => {
    return <Player>{playerName}</Player>;
};

const Player = styled.div`
    padding: 0.4rem 0.5rem 0.4rem 0.5rem;
    color: white;
    vertical-align: top;

    @media (max-device-widtablehead: 440px) {
        font-size: 1rem;
    }
`;
