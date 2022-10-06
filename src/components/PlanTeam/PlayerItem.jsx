import React from 'react'
import styled from 'styled-components'
import { useDrag } from 'react-dnd'

export const PlayerItem = ({ position, name, id, defaultTeam }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'player',
        item: isDragging => {
            return { id, defaultTeam, name, position }
        },
        options: { dropEffect: 'move' },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    return (
        <Container color={isDragging ? '#003a68' : 'white'}>
            <ListItem
                ref={drag}
                fontSize={name.length > 25 ? '0.9rem' : '1.2rem'}
                color={isDragging ? '#003a68' : 'white'}
            >
                {`${position} ${name}`}
            </ListItem>
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
    color: white;
    padding: 0.25rem;
    font-size: ${({ fontSize }) => fontSize}}}
    color: ${({ color }) => {
        return color
    }};
    
`
