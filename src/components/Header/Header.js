import React, { Fragment } from 'react';
import styled from 'styled-components';

import { LogoTitle } from './LogoTitle';
import { Navbar } from './Navbar';

export const Header = () => {
    return (
        <Fragment>
            <Container>
                <Flexbox>
                    <FlexItem>
                        <LogoTitle />
                    </FlexItem>
                    <FlexItem>
                        <Navbar />
                    </FlexItem>
                </Flexbox>
            </Container>
        </Fragment>
    );
};

const Container = styled.header`
    width: 100vw;
    background-color: #003a68;
`;

const Flexbox = styled.div`
    background-color: #003a68;
    max-width: 1600px;
    margin: auto;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    @media (max-device-width: 440px) {
        justify-content: center;
    }
`;

const FlexItem = styled.div`
    display: block;
    margin: 0 auto 0 auto;
    color: white;
    font-family: Roboto;
    font-weight: 500;
`;
