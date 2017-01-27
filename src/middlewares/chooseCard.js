import {
    CHOOSE_CARD,
    GUESS_PAIR,
    guessPair,
    openCard,
    closeCardsWithPause,
    finishGameWithPause,
} from '../actions';

import {
    isFirstCardOpened,
    isPair,
    getGuessedPairsTotal,
} from '../utils/memoryGame';

export default store => next => action => {
    const result = next(action);

    switch (action.type) {
        case CHOOSE_CARD: {
            if (!isFirstCardOpened(store.getState().get('game'))) {
                store.dispatch(openCard(action.cardId));

                return result;
            }

            if (isPair(store.getState().get('game'), action.cardId)) {
                store.dispatch(guessPair(action.cardId));

                return result;
            }

            store.dispatch(openCard(action.cardId));
            store.dispatch(closeCardsWithPause(500));
            return result;
        }

        case GUESS_PAIR: {
            const gameSize = store.getState().getIn(['game', 'size']);
            if (getGuessedPairsTotal(store.getState().get('game')) === gameSize * gameSize) {
                store.dispatch(finishGameWithPause(1000));
            }

            return result;
        }

        default: {
            return result;
        }
    }
};
