import React from 'react';
import styled from 'styled-components';

export const MenuElement = ({ href, menuContent }) => {
    return (
        <FlexItem>
            <Container href={href}>
                <MenuItem>{menuContent}</MenuItem>
            </Container>
        </FlexItem>
    );
};

const FlexItem = styled.div`
    display: block;
    color: white;
    font-family: Roboto;
    font-weight: 500;

    @media (max-device-width: 440px) {
        width: 100vw;
        font-size: 1.5rem;
    }
`;

const Container = styled.a`
    color: white;
    text-align: center;
`;

const MenuItem = styled.div`
    color: white;
    padding: 0.6rem 1.5rem 0.6rem 1.5rem;
    font-family: Roboto;
    font-weight: 500;
    border-bottom: 3px solid transparent;

    &:hover {
        border-bottom: solid 3px #011826;
        color: #99d8e1;
    }

    @media (max-device-width: 440px) {
        width: 90vw;
        margin: 0 auto 0 auto;
        padding: 0.4rem;
        border-bottom: solid 1px #011826;

        &:hover {
            border-bottom: solid 1px #011826;
            color: #99d8e1;
        }
    }
`;
