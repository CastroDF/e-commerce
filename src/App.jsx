import React from "react";
import "./globalStyle.css";
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Routes from './Routes';

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Routes />
                </Switch>
            </Router>
        </div>
    )
}

export default App;
