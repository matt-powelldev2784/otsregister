import React, { FC, Fragment } from 'react'
import styled from 'styled-components'
import { useAppSelector, useAppDispatch } from '../../../redux/reduxHooks'
import { setGameRegister, deleteGame } from '../../../redux/dataState'
import { ToggleButton } from '../../Utilites/ToggleButton'
import { TableButton } from '../../Utilites/TableButton'
import { SetGameRegisterData } from '../../../redux/ts/dataState_interface'

interface GameStatusProps {
    gameClosed: boolean
    gameId: string
}

export const GameStatus: FC<GameStatusProps> = ({ gameClosed, gameId }) => {
    const dispatch = useAppDispatch()
    const { isDesktop } = useAppSelector(state => state.globalReducer)
    const { authToken } = useAppSelector(state => state.authReducer)

    const gameStatusHandler = () => {
        const gameClosedMessage =
            'If the game reopened, any manger team selections will be lost. Players will be reset to their default teams. Please confirm you are happy to proceed?'

        if (gameClosed) {
            const okToCloseGame = window.confirm(gameClosedMessage)
            if (!okToCloseGame) {
                return
            }
        }
        const setGameRegisterData: SetGameRegisterData = {
            authToken,
            body: {
                gameId,
                gameClosed: !gameClosed
            }
        }
        dispatch(setGameRegister(setGameRegisterData))
    }

    const deleteGameHandler = () => {
        const deleteGameData = {
            authToken,
            gameId
        }
        dispatch(deleteGame(deleteGameData))
    }

    const toggleColor = {
        toggleOn: 'black',
        toggleOff: 'green'
    }

    return (
        <Fragment>
            <Flexbox>
                {gameClosed && <GameClosed>Game Closed</GameClosed>}
                {!gameClosed && <GameOpen>Game Open</GameOpen>}
                <ToggleButton
                    onClick={gameStatusHandler}
                    defaultChecked={gameClosed}
                    toggleColor={toggleColor}
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
    background: black;
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
