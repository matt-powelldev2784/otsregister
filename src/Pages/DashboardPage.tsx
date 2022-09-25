import React, { FC, Fragment, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../components/redux/reduxHooks'
import { setMenu } from '../components/redux/globalState'
import styled from 'styled-components'
import { Header } from '../components/Header/Header'
import { PageTitle } from '../components/Utilities/PageTitle'
import { Background } from '../components/Header/Background'
import { UserGamesTable } from '../components/Games/Table/UserTable/UserGamesTable'
import { AdminGamesTable } from '../components/Games/Table/AdminTable/AdminGamesTable'
import { Errors } from '../components/Utilities/Errors'

export const DashboardPage: FC = () => {
    const dispatch = useAppDispatch()
    const { isDesktop } = useAppSelector(state => state.globalReducer)
    const { dataErrors } = useAppSelector(state => state.dataReducer)
    const { adminUser, authUserName, authErrors } = useAppSelector(state => state.authReducer)
    const userName = authUserName === 'admin' ? 'Admin' : authUserName

    useEffect(() => {
        dispatch(setMenu({ homepage: false, adminUser: adminUser, user: !adminUser }))
    }, [dispatch, adminUser])

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
    )
}

const Main = styled.main`
    position: relative;
    background: #003a68;
`

const Container = styled.section`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
`
