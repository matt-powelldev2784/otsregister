import React, { useContext } from 'react';
import styled from 'styled-components';
import PlanTeamsContext from '../../Context/planTeamsContext';

export const FinalTeamforEmail = () => {
    const { finalTeamData, finalTeamDom, fixtureDate, fixtureName } = useContext(PlanTeamsContext);

    return (
        <Table>
            <TableRow>
                <TableHead>Team0</TableHead>
                <TableHead>Team1</TableHead>
                <TableHead>Team2</TableHead>
                <TableHead>Team3</TableHead>
                <TableHead>Team4</TableHead>
                <TableHead>Team5</TableHead>
                <TableHead>Team6</TableHead>
                <TableHead>Team7</TableHead>
                <TableHead>Team8</TableHead>
                <TableHead>Team9</TableHead>
            </TableRow>
            <TableCell>{finalTeamDom[0]}</TableCell>
            <TableCell>{finalTeamDom[1]}</TableCell>
            <TableCell>{finalTeamDom[2]}</TableCell>
            <TableCell>{finalTeamDom[3]}</TableCell>
            <TableCell>{finalTeamDom[4]}</TableCell>
            <TableCell>{finalTeamDom[5]}</TableCell>
            <TableCell>{finalTeamDom[6]}</TableCell>
            <TableCell>{finalTeamDom[7]}</TableCell>
            <TableCell>{finalTeamDom[8]}</TableCell>
            <TableCell>{finalTeamDom[9]}</TableCell>
        </Table>
    );
};

const Table = styled.table`
    margin: 1rem auto 1rem auto;
    widtablehead: 90%;
    border-spacing: 0;
    background: #003a68;
    width: 90vw;
`;

const TableRow = styled.tr`
    height: 3rem;
    font-weight: 500;
    color: white;
`;

const TableCell = styled.td`
    padding: 0.4rem 0.5rem 0.4rem 0.5rem;

    &:nth-child(even) {
        background: #011826;
        color: #003a68;
    }

    &:nth-child(odd) {
        background: '#003a68';
        color: white;
    }

    @media (max-device-widtablehead: 440px) {
        font-size: 1rem;
    }
`;

const TableHead = styled.th`
    padding: 0.7rem 0.5rem 0.4rem 0.5rem;
    font-size: 1.2rem;
    text-align: left;

    &:nth-child(odd) {
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
