import React, { FC, Fragment, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../components/redux/reduxHooks'
import { setMenu } from '../components/redux/globalState'
import styled from 'styled-components'
import { Header } from '../components/Header/Header'
import { Background } from '../components/Header/Background'
import { Profile } from '../components/Profile/Profile'
import { Errors } from '../components/Utilities/Errors'

export const EditProfilePage: FC = () => {
    const dispatch = useAppDispatch()
    const { isDesktop } = useAppSelector(state => state.globalReducer)
    const { adminUser, authErrors } = useAppSelector(state => state.authReducer)
    const { dataErrors } = useAppSelector(state => state.dataReducer)

    useEffect(() => {
        dispatch(setMenu({ homepage: false, adminUser: adminUser, user: !adminUser }))
    }, [dispatch, adminUser])

    return (
        <Fragment>
            <Header />
            <Main>
                {isDesktop && <Background />}
                <Container>
                    {authErrors && <Errors errors={authErrors} />}
                    {dataErrors && <Errors errors={dataErrors} />}
                    {!adminUser && <Profile data-testid="profile" />}
                </Container>
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
