import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './Examples/App';
import ContactUsContainer from './Examples/ContactUs/ContactUsContainer';

render(
    <Router history={browserHistory}>
        <Route component={App}>
            <Route path="/" component={ContactUsContainer} />
        </Route>
    </Router>, document.getElementById('root'))
