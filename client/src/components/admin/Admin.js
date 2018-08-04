import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import  history  from '../../history';
import { logout } from '../../actions/';
import { PrivateRoute } from '../../routes/privateRoute';
import HomePage from '../Home';
import LoginPage from '../login/Login';

class Admin extends React.Component {
  render() {
    return (
      <div>
        <h1> Hey this is Admin page </h1>
        <button onClick={this.props.logout}> Log out </button>
      </div>
    )
  }
}

function mapStateToProps(state) {

    return {};
}

export default connect(mapStateToProps, {logout})(Admin);
