import React, { FC, Fragment } from 'react'
import { useAppSelector, useAppDispatch } from '../../../redux/reduxHooks'
import { setPlayerRegister } from '../../../redux/dataState'
import styled from 'styled-components'
import { ToggleButton } from '../../Utilites/ToggleButton'
import { ToggleColor } from '../../../redux/ts/interfaces'

interface UserGameOpenProps {
    gameId: string
    currentPlayerAvailable: boolean
}

export const UserGameOpen: FC<UserGameOpenProps> = ({ gameId, currentPlayerAvailable }) => {
    const dispatch = useAppDispatch()
    const { authToken, authUserName } = useAppSelector(state => state.authReducer)

    const playerRegHandler = () => {
        const setPlayerRegisterData = { authToken, body: { gameId: gameId, playerAvailable: !currentPlayerAvailable } }
        dispatch(setPlayerRegister(setPlayerRegisterData))
    }

    const toggleColor: ToggleColor = { toggleOn: 'green', toggleOff: 'red' }

    return (
        <Fragment>
            <Flexbox>
                {currentPlayerAvailable && <PlayerAvailable data-testid="available">{authUserName} Available</PlayerAvailable>}
                {!currentPlayerAvailable && <PlayerUnavialable data-testid="unavailable">{authUserName} NOT Available</PlayerUnavialable>}
                <ToggleButton
                    onClick={playerRegHandler}
                    defaultChecked={currentPlayerAvailable}
                    toggleColor={toggleColor}
                />
            </Flexbox>
        </Fragment>
    )
}

const Flexbox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0rem auto 0.3rem auto;

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
