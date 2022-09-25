import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import { useAppSelector, useAppDispatch } from '../components/redux/reduxHooks'
import { setMenu } from '../components/redux/globalState'
import { Header } from '../components/Header/Header'
import { Background } from '../components/Header/Background'
import { SignUp } from '../components/Login/SignUp'

export const SignUpPage: FC = () => {
    const dispatch = useAppDispatch()
    const { isDesktop } = useAppSelector(state => state.globalReducer)

    useEffect(() => {
        dispatch(setMenu({ homepage: true, adminUser: false, user: false }))
    }, [dispatch])

    return (
        <Contianer>
            <Header />
            <Main>
                {isDesktop && <Background />}
                <SignUp />
            </Main>
        </Contianer>
    )
}

const Contianer = styled.div`
    height: 100vh;
    background: #003a68;
`

const Main = styled.main`
    position: absolute;
    height: 100%;
`
