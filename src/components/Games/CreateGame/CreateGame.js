import React, { Fragment, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createGame } from '../../redux/dataState'
import styled from 'styled-components'
import { Errors } from '../../Utilities/Errors'
import { Button } from '../../Utilities/Button'
import { FormTitle } from '../../Utilities/FormTitle'

export const CreateGame = () => {
    const dispatch = useDispatch()
    const { authToken } = useSelector(state => state.authReducer)
    const { createGameData } = useSelector(state => state.dataReducer)
    const { authErrors } = createGameData
    const createGameDate = useRef(null)
    const createGameName = useRef(null)

    const onSubmit = async e => {
        e.preventDefault()
        const gameDate = createGameDate.current.value
        const gameName = createGameName.current.value
        const createGameData = { authToken, gameData: { gameDate, gameName } }
        try {
            dispatch(createGame(createGameData))
        } catch (err) {
            throw Error
        }
    }

    return (
        <Fragment>
            <Container>
                <CreateGameForm onSubmit={e => onSubmit(e)}>
                    <FormTitle text="CREATE GAME" />
                    {authErrors && <Errors errors={authErrors} />}
                    <Label htmlFor="date-input"></Label>
                    <Span>DATE</Span>
                    <Input
                        type="date"
                        placeholder="Game Date"
                        label="GAMEDATE"
                        name="date-input"
                        id="date-input"
                        ref={createGameDate}
                    />

                    <Label htmlFor="game-name"></Label>
                    <Span>GAME NAME</Span>
                    <Input
                        type="text"
                        placeholder="Game Name"
                        label="GAME NAME"
                        maxLength="20"
                        id="game-name"
                        ref={createGameName}
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

const Label = styled.label`
    display: block;
    margin: 1rem auto 1rem auto;
`

const Span = styled.span`
    display: block;
    width: 18rem;
    margin: 0rem auto 0rem auto;
    padding: 0.1rem;
    color: white;
    font-weight: 500;
    font-size: 0.8rem;

    background: none;
`

const Input = styled.input.attrs(props => ({
    type: props.type || 'type',
    placeholder: props.placeholder || 'placeholder'
}))`
    display: block;
    margin: 0rem auto 0rem auto;
    width: 18rem;
    padding: 0.5rem;
    border: ${props => (props.error === true ? '2px solid red' : 'none')};
    border-radius: 0rem;
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.3);
    font-size: 1rem;

    &:focus {
        border: 0;
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
