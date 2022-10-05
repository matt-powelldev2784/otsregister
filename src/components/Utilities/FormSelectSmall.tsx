import React, { FC } from 'react'
import styled from 'styled-components'

interface FormSelectProps {
    placeholder: string
    name?: string
    onChange?: React.ChangeEventHandler<HTMLSelectElement> & Function
    value?: string | number
    optionsElements: any[]
    width?: string
    display?: string
}

export const FormSelectSmall: FC<FormSelectProps> = ({ placeholder, name, value, onChange, optionsElements, width }) => {
    const Options = optionsElements.map((option, i) => {
        const { value, text } = option
        return (
            <option
                value={value}
                key={i}
            >
                {text}
            </option>
        )
    })

    return (
        <Container>
            <Select
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                optionsElements={optionsElements}
                width={width}
            >
                <option
                    selected
                    disabled
                >
                    Move Player
                </option>
                {Options}
            </Select>
        </Container>
    )
}

const Container = styled.div`
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: 0 !important;
    background: none;
    background-image: none;
    color: #fff;
    cursor: pointer;
    font-size: 1em;
    font-family: 'Open Sans', sans-serif;
`

const Select = styled.select<FormSelectProps>`
    display: block;
    margin: auto
    width: ${props => {
        return props.width || '3rem'
    }}}
  
  background-color: none;
    border-radius: 10px;
    padding: 0.1rem;
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.3);
    font-size: 1rem;
    color: white;

-webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    outline: 0;
    box-shadow: none;
    outline: 0;
    box-shadow: none;
    border: 0 !important;
    background: red;
    font-size: 0.8em;
    text-align: center;
`
