import React, { Fragment } from 'react';
import styled from 'styled-components';

export const FormTitle = props => {
  return (
    <Fragment>
      <TitleText>{props.text}</TitleText>
    </Fragment>
  );
};

const TitleText = styled.h1`
  margin: -2px;
  border-radius: 0.7rem 0.7rem 0rem 0rem;
  text-align: center;
  padding: 0.5rem;
  font-weight: 700;
  font-size: 2rem;
  color: #003a68;
  background: white;

  @media (max-device-width: 440px) {
    border-radius: 0rem;
    font-weight: 700;
    font-size: 1.5rem;
    margin: 0;
  }
`;
