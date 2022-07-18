import React from 'react';
import styled from 'styled-components';

export const GamesTableHead = props => {
    return (
        <TableRow>
            <TableHead>{props.cell1}</TableHead>
            <TableHead>{props.cell2}</TableHead>
            <TableHead>{props.cell3}</TableHead>
            <TableHead>{props.cell4}</TableHead>
        </TableRow>
    );
};

const TableRow = styled.tr`
    background: white;
    color: #003a68;
`;

const TableHead = styled.th`
    padding: 0.7rem 0.5rem 0.4rem 0.5rem;
    font-size: 1.2rem;
    text-align: center;
    border-bottom: 5px solid #011826;

    &:first-child {
        border: 1px solid none;
        border-top-left-radius: 0.7rem;
    }
    &:last-child {
        border: 1px solid none;
        border-top-right-radius: 0.7rem;
    }

    @media (max-device-width: 440px) {
        font-size: 1rem;
    }
`;
