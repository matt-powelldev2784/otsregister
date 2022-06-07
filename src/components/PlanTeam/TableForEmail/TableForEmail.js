import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { TeamName } from './TeamName';
import { PlayerItem } from './PlayerItem';

export const TableForEmail = () => {
    const { planTeamsData } = useSelector(state => state.dataReducer);
    const { sortedFinalTeamData } = planTeamsData;

    const TableHeaders = sortedFinalTeamData.map(({ team }, i) => {
        if (team === 'Bin') {
            return null;
        }

        const key = `${team}${i}`;
        return <TeamName teamName={team} key={key}></TeamName>;
    });

    const PlayersList = sortedFinalTeamData.map(({ team, players }, i) => {
        if (team === 'Bin') {
            return null;
        }

        const key = `${team}${i}`;
        const Players = players.map(player => {
            const { _id } = player;
            const name = player.user.name;
            return <PlayerItem playerName={name} key={_id}></PlayerItem>;
        });
        return <TableCell key={key}>{Players}</TableCell>;
    });

    return (
        <Table>
            <TableHead>
                <TableRow>{TableHeaders}</TableRow>
            </TableHead>
            <TableBody>
                <TableRow>{PlayersList}</TableRow>
            </TableBody>
        </Table>
    );
};

const Table = styled.table`
    margin: 1rem auto 1rem auto;
    border-spacing: 0;
    background: #003a68;
    width: 90vw;
`;

const TableRow = styled.tr`
    color: white;
`;

const TableCell = styled.td`
    width: 10rem;

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

const TableHead = styled.thead``;

const TableBody = styled.tbody``;
