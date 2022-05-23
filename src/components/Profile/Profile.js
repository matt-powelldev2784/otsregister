import React, { Fragment, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getProfileData, updateProfileData } from '../redux/dataState';
import { setDataIsLoading } from '../redux/dataState';
import { Button } from '../Utilities/Button';
import { FormTitle } from '../Utilities/FormTitle';
import { Errors } from '../Login/Errors';
import ProifleImagePlaceholder from '../../img/account_circle_white_24dp.svg';

export const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { authToken, authErrors } = useSelector(state => state.authReducer);
    const { dataIsLoading, playerProfile } = useSelector(state => state.dataReducer);
    const { defaultTeam, position } = playerProfile.playerProfile;
    console.log('position', position);
    console.log('defaultTeam', defaultTeam);

    const defaultTeamRef = useRef(position);
    const positionRef = useRef(null);

    useEffect(() => {
        try {
            dispatch(getProfileData({ authToken }));
        } catch (err) {
            throw Error;
        }
    }, [authToken, dispatch, navigate]);

    const onSubmit = async e => {
        e.preventDefault();
        dispatch(setDataIsLoading(true));
        const updateTeam = defaultTeamRef.current.value;
        const updatePosition = positionRef.current.value;
        const formData = { defaultTeam: updateTeam, position: updatePosition };
        try {
            const updatedProfile = await dispatch(updateProfileData({ authToken, formData }));
            if (updatedProfile) {
                navigate('/dashboard');
            }
            dispatch(setDataIsLoading(false));
        } catch (err) {
            throw Error;
        }
    };

    return (
        <Fragment>
            <Container>
                <UpdateProfileForm onSubmit={e => onSubmit(e)}>
                    <FormTitle text="PROFILE" />
                    {authErrors && <Errors errors={authErrors} />}
                    <ProfileImage src={ProifleImagePlaceholder} />
                    <Label>
                        <Span>USUAL MATCHDAY TEAM</Span>
                        <Select placeholder="Usual Matchday Team" ref={defaultTeamRef}>
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
                        <Select placeholder="Position" ref={positionRef}>
                            <option value={position}>{position}</option>
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
                    <Button text="UPDATE PROFILE" disabled={dataIsLoading} />
                    <Footer>
                        <Link>Click here to register for Training or Games</Link>
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
