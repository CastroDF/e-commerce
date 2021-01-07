import React from 'react';
import './globalStyles/style.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Routes from './Routes';
import AppContainer from './globalStyles/app';

const App = () => {
    return (
        <AppContainer>
            <Router>
                <Switch>
                    <Routes />
                </Switch>
            </Router>
        </AppContainer>
    );
};

export default App;
