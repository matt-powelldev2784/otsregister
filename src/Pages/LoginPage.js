import React, { Fragment, useContext } from 'react';
import AuthContext from '../Context/authContext';
import styled from 'styled-components';
import { Header } from '../components/Header/Header';
import { Background } from '../components/Header/Background';
import { Login } from '../components/Login/Login';

export const LoginPage = () => {
    const { isDesktop } = useContext(AuthContext);

    return (
        <Fragment>
            <Contianer>
                <Header />
                <Main>
                    {isDesktop && <Background />}
                    <Login />
                </Main>
            </Contianer>
        </Fragment>
    );
};

const Contianer = styled.div`
    height: 100vh;
    background: #003a68;
`;

const Main = styled.main`
    position: absolute; ;
`;
