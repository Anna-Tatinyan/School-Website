import React, { Component } from 'react';
import './error.css'
import gif from './GIFF.gif'
import history from '../../history'
class Error extends Component {
 render() {
   return (
     <div className="Error">
     <div className="error-div">
      <h2 className="errorRight">ERROR 404</h2>
      <h3 className="errorBottom">This page is not found</h3>
      <button className="go-back" onClick = {history.goBack}>
      Go back
      </button>
    </div>
      <div>
      <img alt="gif" className="gif" src={gif}/>
      </div>

     </div>
   );
 }
}

export default Error;
