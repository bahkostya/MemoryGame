import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';

import App from './components/App.jsx';
import StartPage from './components/StartPage.jsx';
import GamePage from './containers/GamePage.jsx';

import isSavedStateExpired from './utils/isSavedStateExpired';

import store from './store';

import 'normalize.css';
import './assets/main.css';

const routes = (
    <Route
        component={App}
        path="/"
    >
        <IndexRoute component={StartPage} />
        <Route
            component={GamePage}
            path="game/new/:level"
        />
        {
            !isSavedStateExpired() &&
            <Route
                component={GamePage}
                path="game/continue"
            />
        }
        <Redirect
            from="*"
            to="/"
        />
    </Route>
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('root'),
);
