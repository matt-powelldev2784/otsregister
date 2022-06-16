import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAuhtorisedUser } from '../components/redux/authState';
import { setMenu } from '../components/redux/globalState';
import styled from 'styled-components';
import { Header } from '../components/Header/Header';
import { Background } from '../components/Header/Background';
import { Profile } from '../components/Profile/Profile';
import { Errors } from '../components/Login/Errors';

export const EditProfilePage = () => {
    const dispatch = useDispatch();
    const { isDesktop } = useSelector(state => state.globalReducer);
    const { authToken, adminUser, authErrors } = useSelector(state => state.authReducer);
    const { dataErrors } = useSelector(state => state.dataReducer);

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
                    {authErrors && <Errors errors={authErrors} />}
                    {dataErrors && <Errors errors={dataErrors} />}
                    {!adminUser && <Profile />}
                </Container>
            </Main>
        </Fragment>
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
