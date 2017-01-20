import React from 'react';

import styles from './App.scss';

export default props => (
    <div className={styles.root}>
        <h1 className={styles.title}>Memory Game</h1>
        {props.children}
    </div>
);
