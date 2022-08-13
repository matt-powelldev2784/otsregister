import React, { useLayoutEffect } from 'react'
import { Fragment } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getGamesData } from '../../../redux/dataState'
import { formatDate } from '../../../Utilities/formatDate'
import { AdminTableRow } from './AdminTableRow'

export const AdminTableBody = () => {
    const dispatch = useDispatch()
    const { authToken } = useSelector(state => state.authReducer)
    const { gamesData } = useSelector(state => state.dataReducer)
    const { gamesList } = gamesData

    useLayoutEffect(() => {
        if (authToken) {
            dispatch(getGamesData(authToken))
        }
    }, [authToken, dispatch])

    let AdminTableBody = (
        <TableRow>
            <TableCell></TableCell>
            <TableCell>No Games Scheduled</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
        </TableRow>
    )

    if (gamesList && gamesList.length > 0) {
        AdminTableBody = gamesList.map(game => {
            const gameDate = formatDate(game.gameDate)
            const { gameName, _id, registeredPlayers = game.playersAvailable.length, gameClosed } = game

            return (
                <AdminTableRow
                    key={_id}
                    gameId={_id}
                    gameClosed={gameClosed}
                    gameDate={gameDate}
                    gameName={gameName}
                    registeredPlayers={registeredPlayers}
                />
            )
        })
    }

    return <Fragment>{AdminTableBody}</Fragment>
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
