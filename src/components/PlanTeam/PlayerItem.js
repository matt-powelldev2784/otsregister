import React from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';

export const PlayerItem = ({ position, name, id, defaultTeam }) => {
    const [, drag] = useDrag(() => ({
        type: 'player',
        item: { id, defaultTeam, name, position },
        options: { dropEffect: 'move' },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    }));

    return <ListItem ref={drag}>{`${position} ${name}`}</ListItem>;
};

const ListItem = styled.div`
    color: white;
    padding: 0.25rem;
`;
