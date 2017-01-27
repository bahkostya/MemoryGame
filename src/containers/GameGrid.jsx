import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';

import * as actions from '../actions';

import Grid from '../components/Grid.jsx';

@connect(mapStateToProps, actions)
export default class GameGrid extends Component {
    render() {
        const { grid, chooseCard, ifFinished } = this.props;

        return (
            <Grid
                ifFinished={ifFinished}
                rows={grid}
                onChooseCard={chooseCard}
            />
        );
    }
}

function getGameGrid(state) {
    const cards = state.getIn(['game', 'cards']);
    const size = state.getIn(['game', 'size']);

    return cards.reduce((rows, cell) => {
        const rowIdx = Math.floor(cell.get('id') / size);
        const row = rows.get(rowIdx);

        return row
            ? rows.set(rowIdx, row.push(cell))
            : rows.push(new List([cell]));
    }, new List());
}

function mapStateToProps(state) {
    return {
        grid: getGameGrid(state),
        ifFinished: state.getIn(['game', 'isFinished']),
    };
}
