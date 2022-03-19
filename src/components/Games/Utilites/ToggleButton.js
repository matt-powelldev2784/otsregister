import React, { Fragment } from 'react';
import styled from 'styled-components';

export const ToggleButton = props => {
    return (
        <Fragment>
            <Input
                type="checkbox"
                id="playeravailibity"
                onClick={props.onClick}
                toggle={props.toggle}
                defaultChecked={props.toggle}
                colorTrue={props.colorTrue}
            />
        </Fragment>
    );
};

const Input = styled.input`
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    position: relative;
    border: 0;
    margin: 0.5rem 0.5rem;
    outline: 0;
    cursor: pointer;
    vertical-align: middle;
    transform: translateY(1px);

    @media (max-device-width: 440px) {
        display: block;
        margin: 0.4rem auto;
    }

    &:after {
        content: '';
        width: 48px;
        height: 22px;
        display: inline-block;
        background: ${props => (props.colorTrue && 'green') || 'red'};
        border-radius: 18px;
        clear: both;
    }

    &:before {
        content: '';
        width: 26px;
        height: 26px;
        display: block;
        position: absolute;
        left: 0;
        top: -3px;
        border-radius: 50%;
        background: rgb(255, 255, 255);
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
    }

    &:checked:before {
        box-shadow: -1px 1px 3px rgba(0, 0, 0, 0.6);
        left: ${props => props.toggle && '28px'};
    }

    &:checked:after {
        background: ${props => (props.colorTrue && 'black') || (props.toggle && 'green')};
    }
`;
