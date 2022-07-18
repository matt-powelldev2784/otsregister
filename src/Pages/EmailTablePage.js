import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMenu } from '../components/redux/globalState';
import styled from 'styled-components';
import { Header } from '../components/Header/Header';
import { Background } from '../components/Header/Background';
import { EmailTable } from '../components/PlanTeam/TableForEmail/EmailTable';

export const EmailTablePage = () => {
    const dispatch = useDispatch();
    const { isDesktop } = useSelector(state => state.globalReducer);
    const { adminUser } = useSelector(state => state.authReducer);

    useEffect(() => {
        dispatch(setMenu({ homepage: false, adminUser: adminUser, user: !adminUser }));
    }, [dispatch, adminUser]);

    return (
        <Fragment>
            <Header />
            <Main>
                {isDesktop && <Background />}
                <Container>{adminUser && <EmailTable />}</Container>
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
