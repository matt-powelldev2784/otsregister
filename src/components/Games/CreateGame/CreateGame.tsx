import React, { FC, ChangeEvent, Fragment, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/reduxHooks'
import { createGame } from '../../redux/dataState'
import styled from 'styled-components'
import { Errors } from '../../Utilities/Errors'
import { Button } from '../../Utilities/Button'
import { FormTitle } from '../../Utilities/FormTitle'
import { FormField } from 'src/components/Utilities/FormField'

export const CreateGame: FC = () => {
    const dispatch = useAppDispatch()
    const { authToken } = useAppSelector(state => state.authReducer)
    const { authErrors } = useAppSelector(state => state.dataReducer.createGameData)
    const [newGame, setNewGame] = useState({ gameDate: '', gameName: '' })

    const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const inputName = e.target.name
        setNewGame({ ...newGame, [inputName]: e.target.value })
    }

    const onSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
        e.preventDefault()
        const createGameRequest = { authToken, gameData: newGame }
        dispatch(createGame(createGameRequest))
    }

    return (
        <Fragment>
            <Container>
                <CreateGameForm onSubmit={onSubmit}>
                    <FormTitle text="CREATE GAME" />
                    {authErrors && <Errors errors={authErrors} />}
                    <FormField
                        name="gameDate"
                        label="date"
                        type="date"
                        placeholder="Game Date"
                        onChange={onInputChange}
                    />
                    <FormField
                        name="gameName"
                        label="Game Name"
                        type="text"
                        placeholder="Game Name"
                        onChange={onInputChange}
                    />
                    <Button text="CREATE GAME" />
                    <Footer></Footer>
                </CreateGameForm>
            </Container>
        </Fragment>
    )
}

const Container = styled.section`
    position: relative;
    top: 0;
    width: 100%;
`

const CreateGameForm = styled.form`
    margin: 3rem auto 3rem auto;
    width: 22rem;
    border-left: 3px solid white;
    border-right: 3px solid white;
    border-radius: 0.7rem;
    background: #003a68;

    @media (max-device-width: 440px) {
        width: 100vw;
        margin: 0 auto 0 auto;
        border-left: none;
        border-right: none;
        border-radius: 0rem;
    }
`

const Footer = styled.h1`
    margin: -2px;
    border-radius: 0rem 0rem 0.7rem 0.7rem;
    text-align: center;
    padding: 0.5rem;
    font-weight: 700;
    font-size: 1rem;
    color: #003a68;
    background: white;
    text-decoration: underline;

    @media (max-device-width: 440px) {
        border-radius: 0rem;
        font-weight: 700;
        font-size: 1rem;
    }
`
