import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMenu } from '../components/redux/globalState';
import { deleteAuthToken } from '../components/redux/authState';
import { deleteAuthData } from '../components/redux/dataState';
import styled from 'styled-components';
import { Header } from '../components/Header/Header';
import { Background } from '../components/Header/Background';
import { Login } from '../components/Login/Login';

export const LoginPage = () => {
    const dispatch = useDispatch();
    const { isDesktop } = useSelector(state => state.globalReducer);

    useEffect(() => {
        localStorage.clear();
        sessionStorage.clear();
        dispatch(deleteAuthToken());
        dispatch(deleteAuthData());
        dispatch(setMenu({ homepage: true }));
    }, [dispatch]);

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
