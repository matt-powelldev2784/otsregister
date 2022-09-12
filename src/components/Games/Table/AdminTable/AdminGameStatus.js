import React, { Fragment } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { setGameRegister, deleteGame } from '../../../redux/dataState'
import { ToggleButton } from '../../Utilites/ToggleButton'
import { TableButton } from '../../Utilites/TableButton'

export const GameStatus = ({ gameClosed, gameId }) => {
    const dispatch = useDispatch()
    const { isDesktop } = useSelector(state => state.globalReducer)
    const { authToken } = useSelector(state => state.authReducer)
    const { isLoading } = useSelector(state => state.dataReducer)

    const gameStatusHandler = () => {
        if (gameClosed)
            window.confirm(
                'If the game reopened, any manger team selections will be lost. Players will be reset to their default teams. Please confirm you are happy to proceed?'
            )

        const setGameRegisterData = { authToken, body: { gameId, gameClosed: !gameClosed } }
        dispatch(setGameRegister(setGameRegisterData))
    }

    const deleteGameHandler = () => {
        const deleteGameData = { authToken, gameId }
        dispatch(deleteGame(deleteGameData))
    }

    const toggleColor = { toggleOn: 'black', toggleOff: 'green' }
    const gameClosedColor = gameClosed ? 'black' : undefined

    return (
        <Fragment>
            <Flexbox>
                {gameClosed && <GameClosed color={gameClosedColor}>Game Closed</GameClosed>}
                {!gameClosed && <GameOpen>Game Open</GameOpen>}
                <ToggleButton
                    onClick={gameStatusHandler}
                    defaultChecked={gameClosed}
                    toggleColor={toggleColor}
                    isLoading={isLoading}
                />
                {isDesktop && (
                    <TableButton
                        text={'DELETE'}
                        color={'white'}
                        bgColor={'red'}
                        onClick={deleteGameHandler}
                    />
                )}
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

const GameOpen = styled.p`
    display: inline-block;
    background: green;
    color: white;
    width: 10rem;
    padding: 0.2rem 0.6rem;
    font-size: 1.2rem;
    border-radius: 14px;

    @media (max-device-width: 440px) {
        font-size: 1rem;
        width: 5rem;
    }
`

const GameClosed = styled.p`
    display: inline-block;
    background: ${props => props.color};
    color: white;
    width: 10rem;
    padding: 0.2rem 0.6rem;
    font-size: 1.2rem;
    border-radius: 14px;

    @media (max-device-width: 440px) {
        font-size: 1rem;
        width: 5rem;
    }
`
