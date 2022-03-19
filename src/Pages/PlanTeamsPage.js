import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../Context/authContext';
import { PlanTeamsContextProvider } from '../Context/planTeamsContext';
import { getAuthUser } from '../components/Login/authHelpers';
import styled from 'styled-components';
import { Header } from '../components/Header/Header';
import { Background } from '../components/Header/Background';
import { PlanTeams } from '../components/PlanTeams/PlanTeams';

export const PlanTeamsPage = () => {
    const { isDesktop, authUser, token } = useContext(AuthContext);
    const updateAppState = useContext(AuthContext).setAppStateHandler;
    const navigate = useNavigate();

    useEffect(() => {
        const getAuhtorisedUser = async () => {
            try {
                const authorisedUser = await getAuthUser(token);

                updateAppState({ token: token, authUser: authorisedUser, authError: false, authErrors: false });
            } catch (err) {
                navigate('/');
                const invalidCredError = [{ msg: 'Invalid user credentials. Please login' }];
                updateAppState({ token: false, authUser: false, authError: true, authErrors: invalidCredError });
                console.log(err);
            }
        };
        getAuhtorisedUser();
    }, [token, updateAppState, navigate]);

    return (
        <PlanTeamsContextProvider>
            <Header />
            <Main>
                {isDesktop && <Background />}
                <Container>{authUser.admin && <PlanTeams />}</Container>
            </Main>
        </PlanTeamsContextProvider>
    );
};

const Main = styled.main`
    position: relative;
`;

const Container = styled.section`
    position: absolute;
    top: 0;
    width: 100%;
`;
