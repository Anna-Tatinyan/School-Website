import React from 'react';
import './login.css';
import validator from 'validator';
import { connect } from 'react-redux';
import { login, formRequirments, setEmail, setPassword, isButtonEnabled } from '../../actions/action.js';


class Login extends React.Component {


    submitHandler = (e) => {
      alert("submit")
        e.preventDefault();
        let { email, password } = this.props;
        this.props.login(email, password);

    }
       // dispatch like you usually do

    componentDidUpdate = () => {

      const email = this.props.email;
      const password = this.props.password;
      if(password !== undefined && email !== undefined) {
        const requirementValidation = formRequirments(email, password);
        if(requirementValidation){
           this.props.isButtonEnabled();
        }
      }
    }

   onChangeEmail(e) {
    setTimeout(() => {
        this.props.setEmail(e)}, 0)
   }

  onChangePassword(e) {
   setTimeout(() => {
       this.props.setPassword(e)}, 0)

  }
    render() {

      const {isLoggingIn, isLoggedIn, error} = this.props
        return (
          <div className="limiter">
  		       <div className="container-login100" style={{backgroundImage: "url(https://i0.wp.com/switchee.co/wp-content/uploads/2014/04/blurred-bg.jpg)"}}>
  			        <div className="wrap-login100">
  				          <div className="login100-form-title" style={{backgroundImage: "url(https://www.tbo.com/storyimage/TB/20150515/ARTICLE/150519557/AR/0/AR-150519557.jpg?MaxW=950&cachebuster=499632)"}}>

  				           </div>

              			<form className="login100-form validate-form" onSubmit={this.submitHandler}>
              			<div className="wrap-input100 validate-input m-b-26">
              						<span className="label-input100">Email</span>
              						<input className="input100" type="text" name="email" required
                            onChange={(e) => {this.onChangeEmail(e.target.value)}} value={this.props.email} />
              						<span className="focus-input100"></span>
              			</div>

          					<div className="wrap-input100 validate-input m-b-18">
          						<span className="label-input100">Password</span>
          						<input className="input100" type="password" name="password" required
                            onChange={(e) => {this.onChangePassword(e.target.value)}} value={this.props.password} />
          						<span className="focus-input100"></span>
          					</div>
                    <div className="help-block">* Email and Password are rquired</div>


          					<div className="flex-sb-m w-full p-b-30">
          						<div className="contact100-form-checkbox">
          							<input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>

    						</div>

  					</div>

  					<div className="container-login100-form-btn">
            <button className="login100-form-btn" disabled={(this.props.buttonIsDisabled === undefined) ? true : this.props.buttonIsDisabled}>
                Login
            </button>
  					</div>
            <div className="message">
            { isLoggingIn && <div>Please wait...</div> }
            { isLoggedIn && <div>Success.</div> }
            { error && <div>{error.message}</div> }
          </div>
  				</form>
  			</div>
  		</div>
  	</div>
        );
      }
  }

  const mapStateToProps = (state) => {
    return {
      email: state.email,
      password: state.password,
      buttonIsDisabled: state.buttonIsDisabled,
      isLoggingIn: state.isLoggingIn,
      isLoggedIn: state.isLoggedIn,
      error: state.error

    };
  }




export default connect(mapStateToProps, {login, setEmail, setPassword, isButtonEnabled})(Login);
