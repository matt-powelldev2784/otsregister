//@ts-nocheck

import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../redux/reduxHooks'
import { setPlanGamesId, setGamesNotClosedError, deletePlanTeamsGameId } from '../../../redux/dataState'
import styled from 'styled-components'
import { GameStatus } from './AdminGameStatus'

interface AdminTableRowProps {
    gameId: string
    gameDate: string
    gameName: string
    registeredPlayers: number
    gameClosed: boolean
}

export const AdminTableRow: FC<AdminTableRowProps> = ({ gameId, gameDate, gameName, registeredPlayers, gameClosed }) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const planTeamsHandler = () => {
        sessionStorage.removeItem('planTeamsGameId')
        dispatch(deletePlanTeamsGameId())
        if (gameClosed) {
            sessionStorage.setItem('planTeamsGameId', gameId)
            dispatch(setPlanGamesId(gameId))
            navigate('/planteams')
        } else {
            const planTeamsError = [
                { name: 'error', message: 'Player registartion must be closed before planning teams!', stack: 'CUSTOM_ERROR' }
            ]
            dispatch(setGamesNotClosedError(planTeamsError))
        }
    }

    return (
        <TableRow>
            <TableCell>
                <Link onClick={planTeamsHandler}>{gameDate}</Link>
            </TableCell>
            <TableCell>{gameName}</TableCell>
            <TableCell>{registeredPlayers}</TableCell>
            <TableCell>
                <GameStatus
                    gameClosed={gameClosed}
                    gameId={gameId}
                />
            </TableCell>
        </TableRow>
    )
}

const TableRow = styled.tr<AdminTableRowProps>`
    height: 3rem;
    font-weight: 500;

    &:nth-child(even) {
        background: white;
        color: #003a68;
    }

    &:nth-child(odd) {
        background: #003a68;
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

const Link = styled.span<AdminTableRowProps>`
    text-decoration: underline;
    color: '#003a68';
    &:hover {
        border-bottom: 2px solid black;
        cursor: pointer;
    }
`
