import React, { FC, Fragment, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../components/redux/reduxHooks'
import { setMenu } from '../components/redux/globalState'
import { deleteAuthToken } from '../components/redux/authState'
import { deleteAuthData } from '../components/redux/dataState'
import styled from 'styled-components'
import { Header } from '../components/Header/Header'
import { Background } from '../components/Header/Background'
import { Login } from '../components/Login/Login'

export const LoginPage: FC = () => {
    const dispatch = useAppDispatch()
    const { isDesktop } = useAppSelector(state => state.globalReducer)

    useEffect(() => {
        localStorage.clear()
        sessionStorage.clear()
        dispatch(deleteAuthToken())
        dispatch(deleteAuthData())
        dispatch(setMenu({ homepage: true, adminUser: false, user: false }))
    }, [dispatch])

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
    )
}

const Contianer = styled.div`
    height: 100vh;
    background: #003a68;
`

const Main = styled.main`
    position: absolute; ;
`
