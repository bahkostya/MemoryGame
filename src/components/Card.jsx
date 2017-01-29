import React, { Component } from 'react';

import styles from './Card.scss';

export default class Card extends Component {
    handleClick() {
        const { cardId, isOpened, isGuessed, onChooseCard } = this.props;

        if (!isOpened && !isGuessed) {
            onChooseCard(cardId);
        }
    }

    render() {
        const { isOpened, isGuessed, image } = this.props;

        return (
            <div
                className={isGuessed ? styles.guessed : styles.root}
                onClick={() => this.handleClick()}
            >
                <img
                    className={isOpened ? styles.frontFlipped : styles.frontSide}
                    src={image}
                />
                <div
                    className={isOpened ? styles.backFlipped : styles.backSide}
                />
            </div>
        );
    }
}
