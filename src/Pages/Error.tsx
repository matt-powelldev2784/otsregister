import React, { FC } from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../components/redux/reduxHooks'
import { Background } from '../components/Header/Background'
import { Header } from '../components/Header/Header'
import { PageTitle } from '../components/Utilities/PageTitle'

export const Error: FC = () => {
    const { isDesktop } = useAppSelector(state => state.globalReducer)

    return (
        <div>
            <Header />
            <Container>
                {isDesktop && <Background />}
                <Main>
                    <PageTitle text="Error. Page not found." />
                </Main>
            </Container>
        </div>
    )
}

const Container = styled.section`
    position: absolute;
    width: 100%;
`

const Main = styled.main`
    position: absolute;
    top: 0;
    width: 100%;
    display: block;
    margin: 0 auto 0 auto;
`
