import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import TestApp from './testComponent/TestApp.jsx';

function Routes() {
    return (
        <Router>
            <Route exact path="/" component={TestApp} />
        </Router>
    );
}

export default Routes;
