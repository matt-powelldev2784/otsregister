import React from 'react';
import { PlayerListItem } from './PlayerListItem';

export const renderTeams = playersList => {
    let playersForDOM = [];
    if (playersList) {
        playersForDOM = playersList.map(player => {
            return (
                <PlayerListItem
                    key={player._id}
                    id={player._id}
                    player={player.name}
                    position={player.position}
                    team={player.defaultTeam}
                />
            );
        });
    }
    return playersForDOM;
};
