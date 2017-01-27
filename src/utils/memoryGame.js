import { fromJS, Map } from 'immutable';

import repeat from './repeat';
import generateImage from './imagesGenerator';

export const defaultGameState = fromJS({
    cards: [],
});

export function generateCardsList(rowLength) {
    const cardsTotal = rowLength * rowLength;

    const defaultCard = Map({
        isGuessed: false,
        isOpened: false,
    });

    const cardsHalfList = repeat(cardsTotal / 2, defaultCard).map((card, index) =>
        card.set('pairKey', index).set('image', generateImage(index)));

    return cardsHalfList.concat(cardsHalfList)
        .sort(() => Math.random() - 0.5)
        .map((card, index) => card.set('id', index));
}

export function startNewGame(size) {
    const game = fromJS({
        size,
        cards: generateCardsList(size),
        startedAt: Date.now(),
        firstOpenedCardId: -1,
        isFinished: false,
    });

    return game;
}

export function openCardById(game, cardId) {
    return game.set('firstOpenedCardId', cardId)
        .setIn(['cards', cardId, 'isOpened'], true);
}

export function closeOpenedCards(game) {
    const listOfClosedCards = game.get('cards').map(card => (
        card.get('isOpened')
        ? card.set('isOpened', false)
        : card
    ));

    return game.set('firstOpenedCardId', -1).set('cards', listOfClosedCards);
}

export function isPair(game, cardId) {
    const cardPairKey = getPairKeyByCardId(game, cardId);
    return game.getIn(['cards', game.get('firstOpenedCardId'), 'pairKey']) === cardPairKey;
}

export function isFirstCardOpened(game) {
    return game.get('firstOpenedCardId') !== -1;
}

export function getPairKeyByCardId(game, cardId) {
    return game.getIn(['cards', cardId, 'pairKey']);
}

export function getGuessedPairsTotal(game) {
    const guessedCards = game.get('cards').filter(card => card.get('isGuessed') === true);
    return guessedCards.size;
}

export function guessPair(game, cardId) {
    const cardPairKey = getPairKeyByCardId(game, cardId);
    const newCardsList = openCardById(game, cardId).get('cards').map(card => (
        card.get('pairKey') === cardPairKey
        ? card.set('isGuessed', true)
        : card
    ));

    const newGame = game.set('firstOpenedCardId', -1).set('cards', newCardsList);

    return newGame;
}

export function finishGame(game) {
    return game.set('isFinished', true);
}
