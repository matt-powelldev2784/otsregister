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

export const FormSelect: FC<FormSelectProps> = ({ placeholder, name, value, onChange, optionsElements, width }) => {
    console.log(width)

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

    const labelTitle = placeholder.toUpperCase()

    return (
        <Container>
            <Label>
                <Span>{labelTitle}</Span>
                <Select
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    optionsElements={optionsElements}
                    width={width}
                >
                    {Options}
                </Select>
            </Label>
        </Container>
    )
}

const Container = styled.section`
    position: relative;
    display: block;
    top: 0;
    width: 100%;
`

const Select = styled.select<FormSelectProps>`
    display: block;
    margin: 0rem auto 0rem auto;
    width: ${props => {
        return props.width || '18rem'
    }}}
    padding: 0.5rem;
    border-radius: 0rem;
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.3);
    font-size: 1rem;

    &:focus {
        border: 0;
    }
`

const Label = styled.label`
    display: block;
    margin: 1rem auto 1rem auto;
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
