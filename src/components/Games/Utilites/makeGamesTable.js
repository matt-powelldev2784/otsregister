import React from 'react';
import { GamesTableRow } from '../Table/GamesTableRow';
import { formatDate } from '../../Utilities/formatDate';

export const makeGamesTable = gamesData => {
    let GamesTable;
    if (gamesData) {
        GamesTable = gamesData.map(game => {
            const gameDate = formatDate(game.gameDate);
            const { gameName, _id, registeredPlayers = game.playersAvailable.length, gameClosed = game.gameClosed } = game;

            return (
                <GamesTableRow
                    key={_id}
                    gameId={_id}
                    gameClosed={gameClosed}
                    gameDate={gameDate}
                    gameName={gameName}
                    registeredPlayers={registeredPlayers}
                />
            );
        });
    }
    return GamesTable;
};
