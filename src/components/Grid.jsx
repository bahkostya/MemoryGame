import React from 'react';
import { Link } from 'react-router';

import Card from './Card.jsx';

import styles from './Grid.scss';

export default props => {
    const { rows, onChooseCard, ifFinished } = props;

    return (
        <div className={styles.root}>
            {
                ifFinished
                ? <div className={styles.congrats}>🎉 CONGRATS! 🎉</div>
                : rows.map((row, idx) =>
                    <div
                        className={styles.row}
                        key={idx}
                    >
                        {
                            row.map(card =>
                                <Card
                                    cardId={card.get('id')}
                                    image={card.get('image')}
                                    isGuessed={card.get('isGuessed')}
                                    isOpened={card.get('isOpened')}
                                    key={card.get('id')}
                                    pairKey={card.get('pairKey')}
                                    onChooseCard={onChooseCard}
                                />
                            )
                        }
                    </div>
                )
            }

            <Link
                className={styles.link}
                to="/"
            >
                Back to menu
            </Link>
        </div>
    );
};
