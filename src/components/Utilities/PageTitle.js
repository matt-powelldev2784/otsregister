import React, { Fragment } from 'react';
import styled from 'styled-components';

export const PageTitle = ({ text }) => {
    return (
        <Fragment>
            <TitleText>{text}</TitleText>
        </Fragment>
    );
};

const TitleText = styled.h1`
    display: block;
    margin: 1.5rem auto 1.5rem auto;
    text-align: center;
    padding: 0.5rem;
    font-weight: 700;
    font-size: 2rem;
    color: white;

    @media (max-device-width: 440px) {
        margin: 0.4rem 0rem 0.4rem 0rem;
        color: #003a68;
        background: white;
    }
`;
