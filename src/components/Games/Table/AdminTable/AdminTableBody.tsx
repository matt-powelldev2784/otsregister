import React, { FC, ReactElement, useLayoutEffect } from 'react'
import { Fragment } from 'react'
import styled from 'styled-components'
import { useAppSelector, useAppDispatch } from '../../../redux/reduxHooks'
import { getGamesData } from '../../../redux/dataState'
import { formatDate } from '../../../Utilities/formatDate'
import { AdminTableRow } from './AdminTableRow'

export const AdminTableBody: FC = () => {
    const dispatch = useAppDispatch()
    const { authToken } = useAppSelector(state => state.authReducer)
    const { gamesData } = useAppSelector(state => state.dataReducer)
    const { gamesList } = gamesData

    useLayoutEffect(() => {
        if (authToken) {
            dispatch(getGamesData(authToken))
        }
    }, [authToken, dispatch])

    let BlankAdminTable = (
        <TableRow>
            <TableCell></TableCell>
            <TableCell>No Games Scheduled</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
        </TableRow>
    )

    let GamesAdminTable: ReactElement[] | null = null
    if (gamesList && gamesList.length > 0) {
        GamesAdminTable = gamesList.map(game => {
            const gameDate = formatDate(game.gameDate)
            const { gameName, _id, gameClosed } = game
            const registeredPlayers = game.playersAvailable.length

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

    return <Fragment>{GamesAdminTable || BlankAdminTable}</Fragment>
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
