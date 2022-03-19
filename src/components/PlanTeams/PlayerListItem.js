import React from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';

export const PlayerListItem = props => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'player',
        item: { _id: props.id, team: props.team },
        options: { dropEffect: 'move' },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    }));

    return (
        <ListItem ref={drag}>
            {props.position} {props.player}
        </ListItem>
    );
};

const ListItem = styled.div`
    color: white;

    padding: 0.25rem;
`;
