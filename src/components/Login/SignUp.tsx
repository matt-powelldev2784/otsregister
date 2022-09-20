import React, { FC, ChangeEvent, Fragment, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/reduxHooks'
import { setAuthErrors, registerNewUser } from '../redux/authState'
import styled from 'styled-components'
import { FormField } from '../Utilities/FormField'
import { Button } from '../Utilities/Button'
import { FormTitle } from '../Utilities/FormTitle'
import { Errors } from '../Utilities/Errors'

export const SignUp: FC = () => {
    const dispatch = useAppDispatch()
    const { authIsLoading, authErrors } = useAppSelector(state => state.authReducer)
    const [formData, setFormData] = useState({ name: '', email: '', password: '', password2: '' })
    const { password, password2 } = formData

    const signUp = () => {
        try {
            dispatch(registerNewUser(formData))
        } catch (err) {
            throw Error
        }
    }

    const onFormSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (password !== password2) {
            const error = [{ name: 'Error', message: 'Passwords do not match', stack: 'CUSTOM_ERROR' }]
            dispatch(setAuthErrors(error))
            return
        }
        signUp()
    }

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'email') {
            const emailLowerCase = e.target.value.toLowerCase()
            setFormData({ ...formData, [e.target.name]: emailLowerCase })
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value })
        }
    }

    return (
        <Fragment>
            <Container>
                <SignUpForm onSubmit={onFormSubmit}>
                    <FormTitle text="CREATE NEW ACCOUNT" />
                    {authErrors && <Errors errors={authErrors} />}
                    <FormField
                        type="text"
                        placeholder="Name"
                        label="FIRST NAME AND SURNAME"
                        name="name"
                        onChange={onInputChange}
                    />
                    <FormField
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
                    <FormField
                        type="password"
                        placeholder="Confirm Password"
                        label="CONFIRM PASSWORD"
                        name="password2"
                        onChange={onInputChange}
                    />
                    <Button
                        text="SIGN UP"
                        isLoading={authIsLoading}
                    />
                    <Footer></Footer>
                </SignUpForm>
            </Container>
        </Fragment>
    )
}

const Container = styled.section`
    position: absolute;
    top: 0;
    width: 100%;
`

const SignUpForm = styled.form`
    margin: 3rem auto 3rem auto;
    width: 22rem;
    border-radius: 0.7rem;
    background: #003a68;
    border-left: 3px solid white;
    border-right: 3px solid white;

    @media (max-device-width: 440px) {
        width: 100vw;
        margin: 0 auto 0 auto;
        padding: 1rem 0 1rem 0;
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
    text-decoration: underline;
    margin: -2px;

    @media (max-device-width: 440px) {
        border-radius: 0rem;
        font-weight: 700;
        font-size: 1rem;
    }
`
