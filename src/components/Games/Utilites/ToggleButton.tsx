import React, { FC, Fragment } from 'react'
import { useAppSelector } from '../../redux/reduxHooks'
import styled from 'styled-components'
import { ToggleColor } from '../../redux/ts/interfaces'

interface ToggleButtonProps {
    onClick: React.MouseEventHandler<HTMLInputElement> & Function
    defaultChecked?: boolean
    toggleColor: ToggleColor
}

export const ToggleButton: FC<ToggleButtonProps> = ({ onClick, defaultChecked, toggleColor }) => {
    const { isLoading } = useAppSelector(state => state.dataReducer)

    return (
        <Fragment>
            <Input
                type="checkbox"
                disabled={isLoading}
                checked={defaultChecked}
                onClick={onClick}
                toggleColor={toggleColor}
                readOnly
            />
        </Fragment>
    )
}

const Input = styled.input<ToggleButtonProps>`
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
        border-radius: 18px;
        clear: both;
        background: ${({ toggleColor }) => {
            return toggleColor.toggleOff
        }}};
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
        left: 28px;
        
    }

    &:checked:after {
        background: ${({ toggleColor }) => {
            return toggleColor.toggleOn
        }};
    }
`
