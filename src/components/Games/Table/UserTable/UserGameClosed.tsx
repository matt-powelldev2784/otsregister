import React, { FC, Fragment, useLayoutEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../../redux/reduxHooks'
import { getGamesData } from '../../../redux/dataState'
import styled from 'styled-components'

interface UserGameClosedProps {
    gameId: string
    gameClosed?: boolean
    currentPlayerAvailable: boolean
}

export const UserGameClosed: FC<UserGameClosedProps> = ({ currentPlayerAvailable }) => {
    const dispatch = useAppDispatch()
    const { authToken, authUserName } = useAppSelector(state => state.authReducer)

    useLayoutEffect(() => {
        dispatch(getGamesData(authToken))
    }, [authToken, dispatch])

    return (
        <Fragment>
            <Flexbox>
                {currentPlayerAvailable && <PlayerAvailable>{authUserName} Available</PlayerAvailable>}

                {!currentPlayerAvailable && <PlayerUnavialable>{authUserName} NOT Available</PlayerUnavialable>}
            </Flexbox>
        </Fragment>
    )
}

const Flexbox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: left;
    margin: 0rem auto 0rem auto;

    @media (max-device-width: 440px) {
        flex-direction: column;
    }
`

const PlayerAvailable = styled.p`
    display: inline-block;
    background: green;
    color: white;
    padding: 0.2rem 0.6rem;
    font-size: 1.2rem;
    text-align: center;
    border-radius: 14px;

    @media (max-device-width: 440px) {
        font-size: 1rem;
    }
`

const PlayerUnavialable = styled.p`
    display: inline-block;
    background: red;
    color: white;
    padding: 0.2rem 0.6rem;
    text-align: center;
    font-size: 1.2rem;
    border-radius: 14px;

    @media (max-device-width: 440px) {
        font-size: 1rem;
    }
`
