import React, { FC, ChangeEvent, Fragment, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/reduxHooks'
import styled from 'styled-components'
import { getProfileData, updateProfileData, setPlayerProfile } from '../redux/dataState'
import { Button } from '../Utilities/Button'
import { FormTitle } from '../Utilities/FormTitle'
import { FormSelect } from '../Utilities/FormSelect'
import { Errors } from '../Utilities/Errors'
import ProifleImagePlaceholder from '../../img/account_circle_white_24dp.svg'

export const Profile: FC = () => {
    const dispatch = useAppDispatch()
    const { authToken, authErrors } = useAppSelector(state => state.authReducer)
    const { isLoading, playerProfile } = useAppSelector(state => state.dataReducer)
    const { defaultTeam, position } = useAppSelector(state => state.dataReducer.playerProfile)

    useEffect(() => {
        dispatch(getProfileData(authToken))
    }, [authToken, dispatch])

    const onSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
        e.preventDefault()
        const updatedProfileData = { authToken, body: { defaultTeam, position } }
        dispatch(updateProfileData(updatedProfileData))
    }

    const onInputChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        const inputName = e.target.name
        dispatch(setPlayerProfile({ ...playerProfile, [inputName]: e.target.value }))
    }

    const teamOptions = [
        { value: '1', text: '1' },
        { value: '2', text: '2' },
        { value: '3', text: '3' },
        { value: '4', text: '4' },
        { value: '5', text: '5' },
        { value: '6', text: '6' },
        { value: '7', text: '7' },
        { value: '0', text: 'Vets' }
    ]

    const positionOptions = [
        { value: 'GK', text: 'GK' },
        { value: 'LB', text: 'LB' },
        { value: 'CB', text: 'CB' },
        { value: 'RB', text: 'RB' },
        { value: 'LM', text: 'LM' },
        { value: 'CM', text: 'CM' },
        { value: 'RM', text: 'RM' },
        { value: 'CF', text: 'CF' }
    ]

    return (
        <Fragment>
            <Container>
                <UpdateProfileForm onSubmit={onSubmit}>
                    <FormTitle text="PROFILE" />
                    {authErrors && <Errors errors={authErrors} />}
                    <ProfileImage src={ProifleImagePlaceholder} />
                    <FormSelect
                        placeholder="Usual Matchday Team"
                        name={'defaultTeam'}
                        value={defaultTeam || 1}
                        onChange={onInputChange}
                        optionsElements={teamOptions}
                    />
                    <FormSelect
                        placeholder="Position"
                        name={'position'}
                        value={position || 'XX'}
                        onChange={onInputChange}
                        optionsElements={positionOptions}
                    />
                    <Button
                        text="UPDATE PROFILE"
                        isLoading={isLoading}
                    />
                    <Footer>
                        <Link href={'/dashboard'}>Click here to register for Training or Games</Link>
                    </Footer>
                </UpdateProfileForm>
            </Container>
        </Fragment>
    )
}

const Container = styled.section`
    position: relative;
    top: 0;
    width: 100%;
`

const UpdateProfileForm = styled.form`
    margin: 3rem auto 3rem auto;
    width: 22rem;
    border-left: 3px solid white;
    border-right: 3px solid white;
    border-radius: 0.7rem;
    background: #003a68;

    @media (max-device-width: 440px) {
        width: 100vw;
        margin: 1rem auto 1rem auto;
        border-left: none;
        border-right: none;
        border-radius: 0rem;
    }
`

const ProfileImage = styled.img`
    display: block;
    margin: 1rem auto 1rem auto;
    width: 5rem;
`

const Footer = styled.h1`
    margin: -2px;
    border-radius: 0rem 0rem 0.7rem 0.7rem;
    text-align: center;
    padding: 0.5rem;
    font-weight: 700;
    font-size: 1rem;
    color: #003a68;
    background: white;
    text-decoration: underline;

    @media (max-device-width: 440px) {
        border-radius: 0rem;
        font-weight: 700;
        font-size: 1rem;
    }
`

const Link = styled.a`
    color: #003a68;
    text-align: center;

    &:hover {
        color: black;
    }
`
