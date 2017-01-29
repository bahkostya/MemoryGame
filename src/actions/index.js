export const START_NEW_GAME = 'START_GAME';
export const CONTINUE_GAME = 'CONTINUE_GAME';
export const FINISH_GAME = 'FINISH_GAME';
export const GUESS_PAIR = 'GUESS_CARD';
export const CHOOSE_CARD = 'CHOOSE_CARD';
export const OPEN_CARD = 'OPEN_CARD';
export const CLOSE_CARDS = 'CLOSE_CARDS';

export const startNewGame = size => ({
    type: START_NEW_GAME,
    size,
});

export const continueGame = () => ({
    type: CONTINUE_GAME,
});

export const chooseCard = cardId => ({
    type: CHOOSE_CARD,
    cardId,
});

export const openCard = cardId => ({
    type: OPEN_CARD,
    cardId,
});

export const guessPair = cardId => ({
    type: GUESS_PAIR,
    cardId,
});

export const closeCards = () => ({
    type: CLOSE_CARDS,
});

export const finishGame = () => ({
    type: FINISH_GAME,
});
