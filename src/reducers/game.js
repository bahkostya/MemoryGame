import { fromJS } from 'immutable';

import {
    startNewGame,
    openCardById,
    guessPair,
    defaultGameState,
    closeOpenedCards,
    finishGame,
} from '../utils/memoryGame';

import {
    START_NEW_GAME,
    CONTINUE_GAME,
    GUESS_PAIR,
    OPEN_CARD,
    CLOSE_CARDS,
    FINISH_GAME,
} from '../actions';

export default (state = defaultGameState, action) => {
    switch (action.type) {
        case START_NEW_GAME: {
            return startNewGame(action.size);
        }

        case CONTINUE_GAME: {
            return fromJS(JSON.parse(localStorage.getItem('memoryGame')));
        }

        case OPEN_CARD: {
            return openCardById(state, action.cardId);
        }

        case GUESS_PAIR: {
            return guessPair(state, action.cardId);
        }

        case CLOSE_CARDS: {
            return closeOpenedCards(state);
        }

        case FINISH_GAME: {
            return finishGame(state);
        }

        default: {
            return state;
        }
    }
};
