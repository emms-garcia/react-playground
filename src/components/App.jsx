import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';

const App = () => {
    const NotFoundRedirect = () => <Redirect to='/home' />;
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/todo' component={TodoPage} />

                    <Route component={NotFoundRedirect} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
