import React, { Fragment } from 'react';
import styled from 'styled-components';

export const Error = ({ errorMessage }) => {
    return (
        <Fragment>
            <ErrorMessage>{errorMessage}</ErrorMessage>
        </Fragment>
    );
};

const ErrorMessage = styled.p`
    margin: 0.7rem auto 0.7rem auto;
    padding: 0.2rem;
    background: red;
    width: 100%;
    text-align: center;
    font-weight: 500;
    font-size: 1.3rem;
    color: white;

    @media (max-device-width: 440px) {
        font-size: 1rem;
        font-weight: 500;
    }
`;
