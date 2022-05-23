import React from 'react';
import styled from 'styled-components';

export const TeamName = ({ teamName }) => {
    return <TableHead>{teamName}</TableHead>;
};

const TableHead = styled.th`
    padding: 0.7rem 0.5rem 0.4rem 0.5rem;
    font-size: 1.2rem;
    text-align: center;

    &:nth-child(even) {
        background: #011826;
        color: #003a68;
    }

    &:nth-child(odd) {
        background: '#003a68';
        color: white;
    }

    @media (max-device-width: 440px) {
        font-size: 1rem;
    }
`;
