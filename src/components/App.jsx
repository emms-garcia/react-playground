import React from 'react';
import { browserHistory, Route, Router } from 'react-router';

import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';

const App = () => {
    return (
        <Router history={browserHistory}>
            <Route path='/home' component={HomePage} />
            <Route path='/todo' component={TodoPage} />

            <Route path='*' onEnter={(nextState, replace) => replace({pathname: '/home'})} />
        </Router>
    );
};

export default App;
