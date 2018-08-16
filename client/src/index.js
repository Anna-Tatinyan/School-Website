import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import Router from './routes/routes';
import store from "./store";
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render((
  <Provider store={store}>
     <BrowserRouter >
        <Router />
     </BrowserRouter >
  </Provider>),
  document.getElementById('root'));
