import React from 'react'
import { Fragment } from 'react'
import styled from 'styled-components'

interface FormFieldProps {
    label?: string
    type?: string
    placeholder?: string
    name?: string
    value?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement> & Function
    error?: boolean
    aria?: any
    autocomplete?: 'on' | 'off'
    required?: boolean
}

export const FormField: React.FC<FormFieldProps> = ({
    label,
    type,
    placeholder,
    name,
    value,
    onChange,
    error,
    autocomplete,
    required,
    aria
}) => {
    const labelUppercase = label?.toUpperCase()

    return (
        <Fragment>
            <Label htmlFor={name}></Label>
            <Span>{labelUppercase}</Span>
            <Input
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                id={name}
                error={error}
                autocomplete={autocomplete}
                required={required}
            />
        </Fragment>
    )
}

const Label = styled.label`
    display: block;
    margin: 1rem auto 1rem auto;
`

const Input = styled.input<FormFieldProps>`
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
`

const Span = styled.span`
    display: block;
    width: 18rem;
    margin: 0rem auto 0rem auto;
    padding: 0.1rem;
    color: white;
    font-weight: 500;
    font-size: 0.8rem;
    background: none;
`
