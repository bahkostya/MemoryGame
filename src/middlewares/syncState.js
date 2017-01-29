import { toJS } from 'immutable';

import {
    START_NEW_GAME,
    GUESS_PAIR,
    FINISH_GAME,
} from '../actions';
import { getGame } from '../selectors';

export default store => next => action => {
    const result = next(action);
    const state = store.getState();

    switch (action.type) {
        case START_NEW_GAME:
        case GUESS_PAIR:
        case FINISH_GAME: {
            const gameState = getGame(state);
            localStorage.setItem('memoryGame', JSON.stringify(gameState.toJS()));
            return result;
        }

        default: {
            return result;
        }
    }
};
