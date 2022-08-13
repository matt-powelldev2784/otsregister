import React from 'react'
import { Fragment } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { formatDate } from '../../../Utilities/formatDate'
import { UserTableRow } from './UserTableRow'

export const UserTableBody = () => {
    const { gamesData } = useSelector(state => state.dataReducer)
    const { gamesList } = gamesData

    let UserTableBody = (
        <TableRow>
            <TableCell></TableCell>
            <TableCell name={'No Games Scheduled'}>No Games Scheduled</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
        </TableRow>
    )

    if (gamesList && gamesList.length > 0) {
        UserTableBody = gamesList.map(game => {
            const gameDate = formatDate(game.gameDate)
            const { gameName, _id, gameClosed, currentPlayerAvailable } = game
            const registeredPlayers = game.playersAvailable.length

            return (
                <UserTableRow
                    key={_id}
                    gameId={_id}
                    gameClosed={gameClosed}
                    gameDate={gameDate}
                    gameName={gameName}
                    registeredPlayers={registeredPlayers}
                    currentPlayerAvailable={currentPlayerAvailable || false}
                />
            )
        })
    }

    return <Fragment>{UserTableBody}</Fragment>
}

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
`

const TableCell = styled.td`
    padding: 0.4rem 0.5rem 0.4rem 0.5rem;
    color: ${props => props.color};
    text-align: center;

    @media (max-device-width: 440px) {
        font-size: 1rem;
    }
`