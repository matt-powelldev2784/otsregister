import React, { Fragment } from 'react';
import styled from 'styled-components';
import logoImage from '../../img/Old-Thorntonians-CrestOnly-2014_150dpi.png';

export const LogoTitle = () => {
  return (
    <Fragment>
      <Link href="/">
        <Flexbox>
          <FlexItem>
            <Logo src={logoImage}></Logo>
          </FlexItem>
          <FlexItem>
            <Title>OLD THORNTONIANS FC</Title>
          </FlexItem>
        </Flexbox>
      </Link>
    </Fragment>
  );
};

const Flexbox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0.3rem;
  background-color: #003a68;
`;

const FlexItem = styled.div`
  color: white;
  font-family: Roboto;
  font-weight: 500;
`;

const Logo = styled.img`
  display: block;
  margin: 0 auto 0 auto;
  width: 4rem;

  @media (max-device-width: 440px) {
    width: 5rem;
    padding: 0rem;
  }
`;

const Title = styled.h1`
  display: block;
  text-align: center;
  color: white;
  margin: 0;
  padding: 0;
  font-size: 2.2rem;

  @media (max-device-width: 440px) {
    font-size: 2rem;
    padding: 0.4rem;
    text-align: center;
  }
`;

const Link = styled.a``;
