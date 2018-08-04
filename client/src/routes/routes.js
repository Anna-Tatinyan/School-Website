import React from 'react';
import { Router, Route, IndexRoute, Switch } from 'react-router';
import { Redirect } from 'react-router-dom';
import App from '../container/App.js';
import LoginPage from '../components/login/Login.js';
import Home from '../components/Home.js';
import Error from '../components/error/Error.js';
import history from '../history';
import Admin from "../components/admin/Admin";
import { PrivateRoute } from './privateRoute';


export default class Routy extends React.Component{
  render(){
    return(
    <Router history={history}>
        <Switch>
          <Route exact path="/home" component={Home} />
          <PrivateRoute exact path="/admin" component={Admin} />
          <Route  path="/login" render={() => (
              localStorage.getItem('user') ? (<Redirect to={"/admin"}/>) : (<LoginPage/>))}/>

          <Route component={Error} />
        </Switch>
    </Router>
    )
  }
}
