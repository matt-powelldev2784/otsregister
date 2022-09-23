import React, { FC } from 'react'
import styled from 'styled-components'

interface GamesTableHeadProps {
    cell1: string
    cell2: string
    cell3: string
    cell4: string
}

export const GamesTableHead: FC<GamesTableHeadProps> = ({ cell1, cell2, cell3, cell4 }) => {
    return (
        <TableRow>
            <TableHead>{cell1}</TableHead>
            <TableHead>{cell2}</TableHead>
            <TableHead>{cell3}</TableHead>
            <TableHead>{cell4}</TableHead>
        </TableRow>
    )
}

const TableRow = styled.tr`
    background: white;
    color: #003a68;
`

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
`
