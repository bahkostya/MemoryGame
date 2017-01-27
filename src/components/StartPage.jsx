import React from 'react';
import { Link } from 'react-router';

import isSavedStateExpired from '../utils/isSavedStateExpired';

import styles from './StartPage.scss';

export default () => (
    <div className={styles.root}>
        <div className={styles.text} >Start new game:</div>
        <Link
            className={styles.link}
            to="/game/new/2"
        >
            Easy (2 x 2)
        </Link>
        <Link
            className={styles.link}
            to="/game/new/4"
        >
            Medium (4 x 4)
        </Link>
        <Link
            className={styles.link}
            to="/game/new/6"
        >
            Hard (6 x 6)
        </Link>
        {
            !isSavedStateExpired() &&
            (
                <div className={styles.continue} >
                    <div className={styles.text} >or</div>
                    <Link
                        className={styles.link}
                        to="/game/continue"
                    >
                        Continue
                    </Link>
                </div>
            )
        }
    </div>
);
