import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

import GameGrid from '../containers/GameGrid.jsx';

@connect(null, actions)
export default class GamePage extends Component {
    componentDidMount() {
        if (this.props.location.pathname === '/game/continue') {
            this.props.continueGame();
            return;
        }

        !isValidLevel(+this.props.params.level)
            ? this.props.router.replace({ pathname: '/' })
            : this.props.startNewGame(+this.props.params.level);
    }

    componentWillReceiveProps() {
        this.props.startNewGame(+this.props.params.level);
    }

    render() {
        return (
            <div>
                <GameGrid />
            </div>
        );
    }
}

function isValidLevel(level) {
    return [2, 4, 6].some(el => el === level);
}
