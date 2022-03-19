import React, { Fragment } from 'react';
import styled from 'styled-components';

export const TableButton = props => {
  return (
    <Fragment>
      <Button color={props.color} width={props.width} onClick={props.onClick}>
        {props.text}
      </Button>
    </Fragment>
  );
};

const Button = styled.button`
  color: ${props => props.color};
  background-color: white;
  border-radius: 0.7rem;
  padding: 0.2rem 0.5rem;
  margin: 0.3rem 0.5rem 0.3rem 0rem;
  width: ${props => props.width};
  border: 0.2rem solid ${props => props.color};
  border-radius: 0.7rem;
  font-weight: 700;
  font-size: 1rem;
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
