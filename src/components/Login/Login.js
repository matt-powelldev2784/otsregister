import React, { Fragment, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AuthContext from '../../Context/authContext';
import { loginUser } from './authHelpers';
import { FormField } from '../Utilities/FormField';
import { Button } from '../Utilities/Button';
import { FormTitle } from '../Utilities/FormTitle';
import { Errors } from './Errors';

export const Login = props => {
    const { authError, authErrors } = useContext(AuthContext);
    const updateAppState = useContext(AuthContext).setAppStateHandler;
    const [formData, setFormData] = useState({ email: '', password: '' });
    const { email, password } = formData;
    let navigate = useNavigate();

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const login = async () => {
        try {
            const token = await loginUser(formData);

            if (token) {
                localStorage.setItem('token', token);
                updateAppState({ token: token, authError: false, authErrors: false });
                navigate('/dashboard');
            }
        } catch (err) {
            updateAppState({ token: false, isAuth: false, authUser: false, authError: true, authErrors: err.errors });
        }
    };

    const onSubmit = async e => {
        e.preventDefault();
        login();
    };

    return (
        <Fragment>
            <Container>
                <LoginForm onSubmit={e => onSubmit(e)}>
                    <FormTitle text="LOGIN" />
                    {authError && <Errors errors={authErrors} />}
                    <FormField type="email" placeholder="Email" label="EMAIL" name="email" value={email} onChange={onChange} required />
                    <FormField
                        type="password"
                        placeholder="Password"
                        label="PASSWORD"
                        name="password"
                        value={password}
                        onChange={onChange}
                        minLength="6"
                        required
                    />
                    <Button text="SIGN IN" />
                    <Footer>
                        <Link href={'/signup'}>Need an account? Sign Up here</Link>
                    </Footer>
                </LoginForm>
            </Container>
        </Fragment>
    );
};

const Container = styled.section`
    position: absolute;
    top: 0;
    width: 100%;
`;

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
    margin: -2px;
    text-decoration: underline;

    @media (max-device-width: 440px) {
        border-radius: 0rem;
        font-weight: 700;
        font-size: 1rem;
    }
`;

const Link = styled.a`
    color: #003a68;
    text-align: center;

    &:hover {
        color: black;
    }
`;
