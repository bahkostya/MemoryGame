import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import { getGameGrid, isFinished } from '../selectors';

import Grid from '../components/Grid.jsx';

@connect(mapStateToProps, actions)
export default class GameGrid extends Component {
    render() {
        const { grid, chooseCard, isFinished } = this.props;

        return (
            <Grid
                isFinished={isFinished}
                rows={grid}
                onChooseCard={chooseCard}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        grid: getGameGrid(state),
        isFinished: isFinished(state),
    };
}
