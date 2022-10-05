import React from 'react'
import styled from 'styled-components'
import { useDrag } from 'react-dnd'

export const PlayerItem = ({ position, name, id, defaultTeam }) => {
    const [, drag] = useDrag(() => ({
        type: 'player',
        item: { id, defaultTeam, name, position },
        options: { dropEffect: 'move' },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    const nameLength = name.length
    const fontSize = nameLength > 25 ? '0.9rem' : '1.2rem'

    return (
        <Container>
            <Flexbox>
                <ListItem
                    ref={drag}
                    fontSize={fontSize}
                >{`${position} ${name}`}</ListItem>
            </Flexbox>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    display: block;
    top: 0;
    width: 100%;
    border-bottom: 1px solid white;
`

const Flexbox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0rem auto 0rem auto;

    @media (max-device-width: 440px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: top;
        margin: 0rem auto 0rem auto;
    }
`

const ListItem = styled.div`
    width: 95%;
    color: white;
    padding: 0.25rem;
    font-size: ${props => {
        return props.fontSize
    }}}
    
`
