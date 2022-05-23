import React, { Fragment } from 'react';
import styled from 'styled-components';

export const TableButton = ({ color, bgColor, width, onClick, isLoading, text }) => {
    return (
        <Fragment>
            <Button color={color} bgColor={bgColor} width={width} onClick={onClick} isLoading={isLoading}>
                {text}
            </Button>
        </Fragment>
    );
};

const Button = styled.button`
    color: ${props => props.color};
    background-color: ${props => props.bgColor};
    border: none;
    padding: 0.2rem 0.5rem;
    margin: 0.3rem 0.5rem 0.3rem 0.5rem;
    width: ${props => props.width};
    border-radius: 14px;
    font-size: 1.2rem;
    letter-spacing: 0.05rem;

    &:active {
        transition-duration: 0.1s;
        transform: translateY(1px);
    }

    @media (max-device-width: 440px) {
        font-size: 1rem;
        padding: 0.3rem;
    }
`;
