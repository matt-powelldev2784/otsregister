import React from 'react';
import styled from 'styled-components';

export const FormField = props => {
    return (
        <Label>
            <Span>{props.label}</Span>
            <Input
                type={props.type}
                placeholder={props.placeholder}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                error={props.error || 'none'}
            />
        </Label>
    );
};

const Label = styled.label`
    display: block;
    margin: 1rem auto 1rem auto;
`;

const Input = styled.input.attrs(props => ({
    type: props.type || 'type',
    placeholder: props.placeholder || 'placeholder'
}))`
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
