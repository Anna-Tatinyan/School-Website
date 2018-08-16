
import React from 'react';
import './login.css';
import validator from 'validator';
import image from "./blur.jpg"
import logo from "./logo.jpg"

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isButtonEnabled: false,
      validationWarning: ''

    }
  }

  submitHandler = (e) => {
          e.preventDefault();
          let { email, password } = this.state;
          if(this.state.isButtonEnabled) {
            this.props.login(email, password);
          }
      }


    inputValidator() {
      const {email, password} = this.state;
      let validationWarning;
      if(password && email) {
            const validateEmail = validator.isEmail(email);
            !validateEmail ? validationWarning = "Email in not valid" : true;
            const passwordValidate = validator.isLength(password, { min: 3 });
            !passwordValidate ? validationWarning =  "Password in too short": true;
            const emptyEmail = validator.isEmpty(email);
            const emptyPassword = validator.isEmpty(password);
            const isButtonEnabled =  validateEmail && !emptyPassword && !emptyEmail && passwordValidate
            this.setState({isButtonEnabled, validationWarning});


      }
      else {
            this.setState({isButtonEnabled: false, validationWarning: null})
      }

    }

    changeHandler = (e) => {
       const { name, value } = e.target;
       this.setState({ [name]: value },
       () => {
         this.inputValidator()
       });
       this.props.loginError(null)

   }
    render() {

       let {email, password} = this.state;
      let requirementStatus;
      this.props.error ? requirementStatus = this.props.error.message : requirementStatus= this.state.validationWarning;
        return (
          <React.Fragment>
  		       <div className="container-login100" style={{backgroundImage: `url(${image})`}}>
  			        <div className="wrap-login100">
  				          <div className="login100-form-title" style={{backgroundImage: `url(${logo})`}}>
  				          </div>

              			<form className="login100-form validate-form" onSubmit={this.submitHandler}>
                  			<div className="wrap-input100 validate-input m-b-26">
                  						<span className="label-input100">Email</span>
                  						<input className="input100" type="text" name="email" required
                                onChange={this.changeHandler} value={email} />
                  						<span className="focus-input100"></span>
                  			</div>
                        <div className="wrap-input100 validate-input m-b-18">
                          <span className="label-input100">Password</span>
                          <input className="input100" type="text" name="password" required
                                onChange={this.changeHandler} value={password} />
                          <span className="focus-input100"></span>
                        </div>

                          <div className="help-block">{requirementStatus}</div>
              					<div className="flex-sb-m w-full p-b-30">
              						<div className="contact100-form-checkbox">
              							<input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>

        						      </div>

      					        </div>

              					<div className="container-login100-form-btn">
                        <button className="login100-form-btn" disabled={this.state.buttonIsEnabled}>
                            Login
                        </button>
              					</div>

  				         </form>
  			       </div>
  		      </div>
  	    </React.Fragment>
      );
    }
  }
export default LoginForm;
