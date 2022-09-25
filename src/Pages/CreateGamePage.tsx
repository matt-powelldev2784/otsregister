import React, { FC, Fragment, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../components/redux/reduxHooks'
import { setMenu } from '../components/redux/globalState'
import styled from 'styled-components'
import { Header } from '../components/Header/Header'
import { Background } from '../components/Header/Background'
import { CreateGame } from '../components/Games/CreateGame/CreateGame'

export const CreateGamePage: FC = () => {
    const dispatch = useAppDispatch()

    const { isDesktop } = useAppSelector(state => state.globalReducer)
    const { adminUser } = useAppSelector(state => state.authReducer)

    useEffect(() => {
        dispatch(setMenu({ homepage: false, adminUser: adminUser, user: !adminUser }))
    }, [dispatch, adminUser])

    return (
        <Fragment>
            <Header />
            <Main>
                {isDesktop && <Background />}
                <Container>{adminUser && <CreateGame />}</Container>
            </Main>
        </Fragment>
    )
}

const Main = styled.main`
    position: relative;
`

const Container = styled.section`
    position: absolute;
    top: 0;
    width: 100%;
`
