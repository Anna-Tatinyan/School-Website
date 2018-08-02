import React from 'react';
import { Router, Route, IndexRoute, Switch } from 'react-router';

import App from './container/App.js';
import LoginPage from './components/login/Login.js';
import Error from './components/error/Error.js';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();


export default class Routy extends React.Component{
  render(){
    return(
    <Router history={history}>
        <Switch>
          <Route exact path="/home" component={App} />
          <Route exact path="/login" component={LoginPage} />
          <Route component={Error} />
        </Switch>
    </Router>
    )
  }
}
