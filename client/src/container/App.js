
import React, { Component } from 'react';
import './app.css';
import Login from '../components/login/Login.js';

class App extends Component {
 render() {
   return (
     <div className="App">
       <div>
           <Login/>
       </div>
     </div>
   );
 }
}

export default App;
