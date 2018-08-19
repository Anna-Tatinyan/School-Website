import React from 'react';
import {
  connect
} from 'react-redux';
import {
  login,
  loginError
} from '../../actions';
import LoginForm from "./components/LoginForm"



class Login extends React.Component {
  render() {
    return ( <
      LoginForm login = {
        this.props.login
      }
      error = {
        this.props.error
      }
      loginError = {
        this.props.loginError
      }
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggingIn: state.userLogin.isLoggingIn,
    isLoggedIn: state.userLogin.isLoggedIn,
    error: state.userLogin.error

  };
}




export default connect(mapStateToProps, {
  login,
  loginError
})(Login);
