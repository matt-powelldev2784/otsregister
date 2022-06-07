import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAuhtorisedUser } from '../components/redux/authState';
import { setMenu } from '../components/redux/globalState';
import styled from 'styled-components';
import { Header } from '../components/Header/Header';
import { PageTitle } from '../components/Utilities/PageTitle';
import { Background } from '../components/Header/Background';
import { UserGamesTable } from '../components/Games/Table/UserGamesTable';
import { AdminGamesTable } from '../components/Games/Table/AdminGamesTable';
import { Errors } from '../components/Login/Errors';

export const DashboardPage = () => {
    const dispatch = useDispatch();
    const { isDesktop } = useSelector(state => state.globalReducer);
    const { dataErrors } = useSelector(state => state.dataReducer);
    const { authToken, adminUser, authUserName, authErrors } = useSelector(state => state.authReducer);
    const userName = authUserName === 'admin' ? 'Admin' : authUserName;

    useEffect(() => {
        try {
            if (authToken) {
                dispatch(getAuhtorisedUser(authToken));
            }
        } catch (err) {
            throw Error;
        }
    }, [authToken, dispatch]);

    useEffect(() => {
        dispatch(setMenu({ homepage: false, adminUser: adminUser, user: !adminUser }));
    }, [dispatch, adminUser]);

    return (
        <Fragment>
            <Header />
            <Main>
                {isDesktop && <Background />}
                <Container>
                    {authUserName && <PageTitle text={`${userName} Dashboard`} />}
                    {authErrors && <Errors errors={authErrors} />}
                    {dataErrors && <Errors errors={dataErrors} />}
                    {!adminUser && <UserGamesTable />}
                    {adminUser && <AdminGamesTable />}
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
