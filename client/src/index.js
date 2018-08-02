import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import Router from './routes'
import store from "./store";
import App from "./container/App";
import Login from "./components/login/Login"


ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root'));
