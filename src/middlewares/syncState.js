import { toJS } from 'immutable';

import {
    START_NEW_GAME,
    GUESS_PAIR,
    FINISH_GAME,
} from '../actions';

export default store => next => action => {
    const result = next(action);

    switch (action.type) {
        case START_NEW_GAME:
        case GUESS_PAIR:
        case FINISH_GAME: {
            const gameState = store.getState().get('game');
            localStorage.setItem('memoryGame', JSON.stringify(gameState.toJS()));
            return result;
        }

        default: {
            return result;
        }
    }
};
