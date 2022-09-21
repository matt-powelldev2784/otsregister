import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPlayerRegister } from '../../../redux/dataState'
import styled from 'styled-components'
import { ToggleButton } from '../../Utilites/ToggleButton'

export const UserGameOpen = ({ gameId, currentPlayerAvailable }) => {
    const dispatch = useDispatch()
    const { authToken, authUserName } = useSelector(state => state.authReducer)
    const reduxData = useSelector(state => state.dataReducer)
    console.log('reduxData', reduxData)

    const playerRegHandler = () => {
        const setPlayerRegisterData = { authToken, body: { gameId: gameId, playerAvailable: !currentPlayerAvailable } }
        dispatch(setPlayerRegister(setPlayerRegisterData))
    }

    const toggleColor = { toggleOn: 'green', toggleOff: 'red' }

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
