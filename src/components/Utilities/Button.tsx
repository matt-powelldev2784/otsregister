import React, { Fragment } from 'react'
import styled from 'styled-components'

interface ButtonProps {
    onClick?: () => any
    isLoading?: boolean
    text: string
}

export const Button: React.FC<ButtonProps> = ({ onClick, isLoading, text }) => {
    return (
        <Fragment>
            <MainButton
                onClick={onClick}
                isLoading={isLoading}
                disabled={isLoading}
                text={text}
            >
                {text}
            </MainButton>
        </Fragment>
    )
}

const MainButton = styled.button<ButtonProps>`
    display: block;
    margin: 1rem auto 1rem auto;
    color: white;
    cursor: ${props => (props.isLoading === true ? 'wait' : 'pointer')};
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
            cursor: ${props => (props.isLoading === true ? 'wait' : 'pointer')};
        }
    }

    &:active {
        transition-duration: 0.1s;
        transform: translateY(1px);
        cursor: ${props => (props.isLoading === true ? 'wait' : 'pointer')};
    }
`
