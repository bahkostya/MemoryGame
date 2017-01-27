import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

import rootReducer from '../reducers';

import chooseCard from '../middlewares/chooseCard';
import syncState from '../middlewares/syncState';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, chooseCard, syncState)),
);
