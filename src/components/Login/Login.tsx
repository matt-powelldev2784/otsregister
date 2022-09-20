import React, { FC, Fragment, useState, ChangeEvent } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/reduxHooks'
import { login } from '../redux/authState'
import styled from 'styled-components'
import { FormField } from '../Utilities/FormField'
import { Button } from '../Utilities/Button'
import { FormTitle } from '../Utilities/FormTitle'
import { Errors } from '../Utilities/Errors'

export const Login: FC = () => {
    const dispatch = useAppDispatch()
    const { authIsLoading, authErrors } = useAppSelector(state => state.authReducer)
    const [formData, setFormData] = useState({ email: '', password: '' })

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputName = e.target.name
        setFormData({ ...formData, [inputName]: e.target.value })
    }

    const loginUser = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(login(formData))
    }

    return (
        <Fragment>
            <Container>
                <LoginForm onSubmit={loginUser}>
                    <FormTitle text="LOGIN" />
                    {authErrors && <Errors errors={authErrors} />}
                    <FormField
                        type="text"
                        placeholder="Email"
                        label="EMAIL"
                        name="email"
                        onChange={onInputChange}
                    />
                    <FormField
                        type="password"
                        placeholder="Password"
                        label="PASSWORD"
                        name="password"
                        onChange={onInputChange}
                    />
                    <Button
                        text="SIGN IN"
                        isLoading={authIsLoading}
                    />
                    <Footer>
                        <Link href={'/signup'}>Need an account? Sign Up here</Link>
                    </Footer>
                </LoginForm>
            </Container>
        </Fragment>
    )
}

const Container = styled.section`
    position: absolute;
    top: 0;
    width: 100%;
`

const LoginForm = styled.form`
    margin: 3rem auto 3rem auto;
    width: 22rem;
    border-radius: 0.7rem;
    background: #003a68;
    border-left: 3px solid white;
    border-right: 3px solid white;

    @media (max-device-width: 440px) {
        width: 100vw;
        margin: 0 auto 0 auto;
        border-radius: 0rem;
        border-left: none;
        border-right: none;
    }
`

const Footer = styled.h1`
    margin-top: 1rem;
    border-radius: 0rem 0rem 0.7rem 0.7rem;
    text-align: center;
    padding: 0.5rem;
    font-weight: 700;
    font-size: 1rem;
    color: #003a68;
    background: white;
    margin: -2px;
    text-decoration: underline;

    @media (max-device-width: 440px) {
        border-radius: 0rem;
        font-weight: 700;
        font-size: 1rem;
    }
`

const Link = styled.a`
    color: #003a68;
    text-align: center;

    &:hover {
        color: black;
    }
`
