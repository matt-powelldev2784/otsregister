import React, { Fragment } from 'react';

import { GameOpen } from './GameOpen';
import { GameClosed } from './GameClosed';

export const PlayerRegister = props => {
    const gameId = props.gameId;
    const gameClosed = props.gameClosed;

    return (
        <Fragment>
            {!gameClosed && <GameOpen gameId={gameId} gameClosed={props.gameClosed} />}
            {gameClosed && <GameClosed gameId={gameId} gameClosed={props.gameClosed} />}
        </Fragment>
    );
};
