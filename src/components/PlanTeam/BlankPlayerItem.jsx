import React from 'react'
import styled from 'styled-components'

export const BlankPlayerItem = () => {
    return (
        <Container color={'#003a68'}>
            <ListItem color={'#003a68'}></ListItem>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    display: block;
    top: 0;
    width: 100%;
    border-bottom: 1px solid ${({ color }) => color}}};
`
const ListItem = styled.div`
    width: 95%;
    min-height: 2rem;
    color: white;
    padding: 0.25rem;
    font-size: ${({ fontSize }) => fontSize}}}
    color: ${({ color }) => {
        return color
    }};
    
`
