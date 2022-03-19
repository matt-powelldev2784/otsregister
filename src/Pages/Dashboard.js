import React, { Fragment, useContext, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../Context/authContext';
import { getAuthUser } from '../components/Login/authHelpers';
import styled from 'styled-components';
import { Header } from '../components/Header/Header';
import { PageTitle } from '../components/Utilities/PageTitle';
import { Background } from '../components/Header/Background';
import { UserGamesTable } from '../components/Games/Table/UserGamesTable';
import { AdminGamesTable } from '../components/Games/Table/AdminGamesTable';
import { Errors } from '../components/Login/Errors';

export const Dashboard = () => {
    const { isDesktop, authUser, token, authErrors, authError } = useContext(AuthContext);
    const updateAppState = useContext(AuthContext).setAppStateHandler;
    const navigate = useNavigate();

    useLayoutEffect(() => {
        const getAuhtorisedUser = async () => {
            try {
                const authorisedUser = await getAuthUser(token);

                updateAppState({ token: token, authUser: authorisedUser });
            } catch (err) {
                navigate('/');
                const invalidCredError = [{ msg: 'Invalid user credentials. Please login' }];
                updateAppState({ token: false, authUser: false, authError: true, authErrors: invalidCredError });
                console.log(err);
            }
        };
        getAuhtorisedUser();
    }, [token, updateAppState, navigate]);

    const playerName = authUser.name === 'admin' ? 'Admin' : authUser.name;
    return (
        <Fragment>
            <Header />
            <Main>
                {isDesktop && <Background />}
                <Container>
                    <PageTitle text={`${playerName} Dashboard`} />
                    {authError && <Errors errors={authErrors} />}
                    {!authUser.admin && <UserGamesTable />}
                    {authUser.admin && <AdminGamesTable />}
                </Container>
            </Main>
        </Fragment>
    );
};

const Main = styled.main`
    position: relative;
    background: #003a68;
`;

const Container = styled.section`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
`;
