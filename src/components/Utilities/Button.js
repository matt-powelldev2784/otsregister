import React, { Fragment } from 'react';
import styled from 'styled-components';

export const Button = props => {
    return (
        <Fragment>
            <MainButton onClick={props.onClick}>{props.text}</MainButton>
        </Fragment>
    );
};

const MainButton = styled.button`
    display: block;
    margin: 1rem auto 1rem auto;
    color: white;

    background-color: #011826;
    border: 3px solid white;
    border-radius: 0.7rem;
    padding: 0.5rem;
    font-weight: 700;
    font-size: 1.2rem;
    letter-spacing: 0.05rem;

    &:hover {
        transition-duration: 0.4s;
        background-color: white;
        color: #011826;
        border: 3px solid #011826;
        &:hover {
            cursor: pointer;
        }
    }

    &:active {
        transition-duration: 0.1s;
        transform: translateY(1px);
        &:hover {
            cursor: wait;
        }
    }
`;
