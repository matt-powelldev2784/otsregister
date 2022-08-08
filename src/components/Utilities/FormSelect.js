import React, { Fragment } from 'react';
import styled from 'styled-components';

export const FormSelect = ({ placeholder, name, value, onChange, optionsElements }) => {
    const Options = optionsElements.map((option, i) => {
        const { value, text } = option;
        return (
            <option value={value} key={i}>
                {text}
            </option>
        );
    });

    const labelTitle = placeholder.toUpperCase();

    return (
        <Fragment>
            <Label>
                <Span>{labelTitle}</Span>
                <Select placeholder={placeholder} name={name} value={value} onChange={onChange}>
                    {Options}
                </Select>
            </Label>
        </Fragment>
    );
};

const Select = styled.select`
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
`;

const Label = styled.label`
    display: block;
    margin: 1rem auto 1rem auto;
`;

const Span = styled.span`
    display: block;
    width: 18rem;
    margin: 0rem auto 0rem auto;
    padding: 0.1rem;
    color: white;
    font-weight: 500;
    font-size: 0.8rem;

    background: none;
`;
