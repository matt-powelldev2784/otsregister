import React, { Fragment, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/authContext';
import { apiCall as updateProfile } from '../Utilities/apiUtil';
import { registerUser } from '../Utilities/apiUtil';
import styled from 'styled-components';
import { FormField } from '../Utilities/FormField';
import { Button } from '../Utilities/Button';
import { FormTitle } from '../Utilities/FormTitle';
import { Errors } from './Errors';

export const SignUp = props => {
    const { authError, authErrors } = useContext(AuthContext);
    const updateAppState = useContext(AuthContext).setAppStateHandler;
    const [inputErrors, setInputErrors] = useState({ name: false, email: false, password: false });
    const navigate = useNavigate();

    const setInputErrorsHandler = newState => {
        setInputErrors(prevState => {
            return { ...prevState, ...newState };
        });
    };

    const getInputErrors = authErrors => {
        const inputErrors = {};
        authErrors.forEach(error => {
            const inputName = error.param;
            Object.assign(inputErrors, { [inputName]: true });
        });
        return inputErrors;
    };

    const onChange = e => {
        if (e.target.name === 'email') {
            const emailLowerCase = e.target.value.toLowerCase();
            setFormData({ ...formData, [e.target.name]: emailLowerCase });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
        const clearInputError = { [e.target.name]: false };
        setInputErrorsHandler(clearInputError);
    };

    const [formData, setFormData] = useState({ name: '', email: '', password: '', password2: '' });
    const { name, email, password, password2 } = formData;

    const signUp = async () => {
        try {
            const token = await registerUser(formData);
            const defaultProfile = { defaultTeam: 0, position: 'Unknown' };
            if (token) {
                localStorage.setItem('token', token);
                await updateProfile('post', 'api/profile', token, defaultProfile);
                updateAppState({ token: token, authError: false, authErrors: false });
            }

            navigate('/editprofile');
        } catch (err) {
            updateAppState({ token: false, authError: true, authErrors: err.errors });
            const authErrors = err.errors;
            const inputErrors = getInputErrors(authErrors);
            setInputErrorsHandler(inputErrors);
        }
    };

    const passwordError = () => {
        const error = [{ msg: 'Password do not match. Please try again' }];
        updateAppState({ token: false, isAuth: false, authError: true, authErrors: error });
        setInputErrorsHandler({ password: true });
    };

    const onSubmit = async e => {
        e.preventDefault();
        password !== password2 ? passwordError() : signUp();
    };

    return (
        <Fragment>
            <Container>
                <SignUpForm onSubmit={e => onSubmit(e)}>
                    <FormTitle text="CREATE NEW ACCOUNT" />
                    {authError && <Errors errors={authErrors} />}
                    <FormField
                        error={inputErrors.name}
                        type="text"
                        placeholder="Name"
                        label="FIRST NAME AND SURNAME"
                        name="name"
                        value={name}
                        onChange={onChange}
                        required
                    />
                    <FormField
                        error={inputErrors.email}
                        type="email"
                        placeholder="Email"
                        label="EMAIL"
                        name="email"
                        value={email}
                        onChange={onChange}
                        required
                    />
                    <FormField
                        error={inputErrors.password}
                        type="password"
                        placeholder="Password"
                        label="PASSWORD"
                        name="password"
                        value={password}
                        onChange={onChange}
                        minLength="6"
                        required
                    />
                    <FormField
                        error={inputErrors.password}
                        type="password"
                        placeholder="Confirm Password"
                        label="CONFIRM PASSWORD"
                        name="password2"
                        value={password2}
                        onChange={onChange}
                        minLength="6"
                        required
                    />
                    <Button text="SIGN UP" />
                    <Footer></Footer>
                </SignUpForm>
            </Container>
        </Fragment>
    );
};

const Container = styled.section`
    position: absolute;
    top: 0;
    width: 100%;
`;

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
`;

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
`;
