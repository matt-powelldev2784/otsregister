import React, { Fragment, useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/authContext';
import styled from 'styled-components';
import { apiCall as getProfile } from '../Login/authHelpers';
import { apiCall as updateProfile } from '../Login/authHelpers';
import { Button } from '../Utilities/Button';
import { FormTitle } from '../Utilities/FormTitle';
import { Errors } from '../Login/Errors';
import ProifleImagePlaceholder from '../../img/account_circle_white_24dp.svg';

export const Profile = props => {
    const { token, authError, authErrors } = useContext(AuthContext);
    const updateAppState = useContext(AuthContext).setAppStateHandler;
    const [defaultTeam, setDefaultTeam] = useState();
    const [position, setPosition] = useState();
    const defaultTeamRef = useRef(null);
    const positionRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getProfileData = async () => {
            try {
                const profile = await getProfile('get', 'api/profile/me', token);
                updateAppState({ playerProfile: true, playerDetails: profile });
                const defaultTeam = parseInt(profile.defaultTeam);
                const position = profile.position;
                setDefaultTeam(defaultTeam);
                setPosition(position);
            } catch (err) {
                console.log(err);
                updateAppState({ authError: true, authErrors: err.errors });
            }
        };
        getProfileData();
    }, [token, updateAppState]);

    const onSubmit = async e => {
        e.preventDefault();

        const updateTeam = defaultTeamRef.current.value;
        const updatePosition = positionRef.current.value;
        const formData = { defaultTeam: updateTeam, position: updatePosition };
        console.log(formData);

        try {
            await updateProfile('post', 'api/profile', token, formData);
            updateAppState({ authError: true, authErrors: [{ msg: 'Profile Updated' }] });
            navigate('/editprofile');
        } catch (err) {
            console.log(err);
            updateAppState({ authError: true, authErrors: err.errors });
        }
    };

    return (
        <Fragment>
            <Container>
                <UpdateProfileForm onSubmit={e => onSubmit(e)}>
                    <FormTitle text="PROFILE" />
                    {authError && <Errors errors={authErrors} />}
                    <ProfileImage src={ProifleImagePlaceholder} />
                    <Label>
                        <Span>USUAL MATCHDAY TEAM</Span>
                        <Select placeholder="Usual Matchday Team" defaultValue={defaultTeam} ref={defaultTeamRef}>
                            <option value={defaultTeam}>{defaultTeam}</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="0">Vets</option>
                        </Select>
                    </Label>
                    <Label>
                        <Span>POSITION</Span>
                        <Select placeholder="Position" defaultValue={position} ref={positionRef}>
                            <option value={position}>NK</option>
                            <option value="GK">GK</option>
                            <option value="LB">LB</option>
                            <option value="CB">CB</option>
                            <option value="RB">RB</option>
                            <option value="LM">LM</option>
                            <option value="CM">CM</option>
                            <option value="RM">RM</option>
                            <option value="CF">CF</option>
                        </Select>
                    </Label>
                    <Button text="UPDATE PROFILE" />
                    <Footer>
                        <Link href={'/dashboard'}>Click here to register for Training or Games</Link>
                    </Footer>
                </UpdateProfileForm>
            </Container>
        </Fragment>
    );
};

const Container = styled.section`
    position: relative;
    top: 0;
    width: 100%;
`;

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
`;

const ProfileImage = styled.img`
    display: block;
    margin: 1rem auto 1rem auto;
    width: 5rem;
`;

const Label = styled.label`
    display: block;
    margin: 1rem auto 1rem auto;
`;

const Span = styled.span`
    display: block;
    width: 18rem;
    margin: 0rem auto 0rem auto;
    padding: 0.1rem;
    color: white;
    font-weight: 500;
    font-size: 0.8rem;

    background: none;
`;

const Select = styled.select`
    display: block;
    margin: 0rem auto 0rem auto;
    width: 18rem;
    padding: 0.5rem;
    border: ${props => (props.error === true ? '2px solid red' : 'none')};
    border-radius: 0rem;
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.3);
    font-size: 1rem;

    &:focus {
        border: 0;
    }
`;

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
`;

const Link = styled.a`
    color: #003a68;
    text-align: center;

    &:hover {
        color: black;
    }
`;
