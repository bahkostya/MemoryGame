import {
    CHOOSE_CARD,
    GUESS_PAIR,
    guessPair,
    openCard,
    closeCards,
    finishGame,
} from '../actions';
import { getGame, getGameSize } from '../selectors';

import {
    isFirstCardOpened,
    isPair,
    getGuessedPairsTotal,
} from '../utils/memoryGame';

export default store => next => action => {
    const result = next(action);
    const state = store.getState();

    switch (action.type) {
        case CHOOSE_CARD: {
            if (!isFirstCardOpened(getGame(state))) {
                store.dispatch(openCard(action.cardId));
            } else if (isPair(getGame(state), action.cardId)) {
                store.dispatch(guessPair(action.cardId));
            } else {
                store.dispatch(openCard(action.cardId));

                setTimeout(() => {
                    store.dispatch(closeCards());
                }, 500);
            }

            return result;
        }

        case GUESS_PAIR: {
            const gameSize = getGameSize(state);

            if (getGuessedPairsTotal(getGame(state)) === gameSize * gameSize) {
                setTimeout(() => {
                    store.dispatch(finishGame());
                }, 1000);
            }

            return result;
        }

        default: {
            return result;
        }
    }
};
