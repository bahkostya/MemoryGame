import { createSelector } from 'reselect';
import { List } from 'immutable';

export const getGame = state => state.get('game');

export const getCards = createSelector(
    getGame,
    game => game.get('cards'),
);

export const getGameSize = createSelector(
    getGame,
    game => game.get('size'),
);

export const getGameGrid = createSelector(
    getCards,
    getGameSize,
    (cards, gameSize) => cards.reduce((rows, cell) => {
        const rowIdx = Math.floor(cell.get('id') / gameSize);
        const row = rows.get(rowIdx);

        return row
            ? rows.set(rowIdx, row.push(cell))
            : rows.push(new List([cell]));
    }, new List()),
);

export const isFinished = createSelector(
    getGame,
    game => game.get('isFinished'),
);
