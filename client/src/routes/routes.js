import React from 'react';
import { Router, Route, IndexRoute, Switch } from 'react-router';
import { Redirect } from 'react-router-dom';
import App from '../container/App.js';
import LoginPage from '../components/login/Login.js';
import Home from '../components/home/Home.js';
import Error from '../components/error/Error.js';
import history from '../history';
import Admin from "../components/admin/Admin";
import { PrivateRoute } from './privateRoute';
import Classes from '../components/classes/Classes';
import Students from '../components/students/Students';
import Teachers from '../components/teachers/Teachers';




export default class Routy extends React.Component{
  render(){
    return(
    <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/admin" component={Admin} />
          <Route  path="/login" render={() => (
              localStorage.getItem('user') ? (<Redirect to={"/admin"}/>) : (<LoginPage/>))}/>

          <Route exact path="/admin/teachers" component={Teachers} />
          <Route exact path="/admin/classes" component={Classes} />
          <Route exact path="/admin/students" component={Students} />
          <Route component={Error} />

           //nav items and route will automatically updated upon selection

        </Switch>
    </Router>
    )
  }
}
