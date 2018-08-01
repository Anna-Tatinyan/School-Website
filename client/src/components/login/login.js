import React from 'react';
import './login.css';
import { connect } from 'react-redux';
import { login} from '../../actions/action.js';


  class Login extends React.Component {

    constructor(props) {
      super(props);
      this.state = {};
    }

    changeHandler = (e) => {
          const { name, value } = e.target;
          this.setState({ [name]: value });
      }

    submitHandler = (e) => {
        e.preventDefault();
        let { email, password } = this.state;
        this.props.login(email, password);
        this.setState({
          email: '',
          password: ''
        });
    }

    render() {
      let {email, password} = this.state;

      let {isLoginPending, isLoginSuccess, loginError} = this.props;

      let status;
        if(email && !password) {
          status = "* password is required"
        }
        else if(!email && !password) {
          status = "* email and password are required"
        }
        else if(!email && password) {
          status = "* email is required"
        }



        return (
          <div className="limiter">
  		       <div className="container-login100" style={{backgroundImage: "url(http://www.creditlenders.info/wp-content/uploads/free-website-background-images-50-must-have-free-backgrounds-for-your-next-web-design-project.jpg)"}}>
  			        <div className="wrap-login100">
  				          <div className="login100-form-title" style={{backgroundImage: "url(https://www.tbo.com/storyimage/TB/20150515/ARTICLE/150519557/AR/0/AR-150519557.jpg?MaxW=950&cachebuster=499632)"}}>

  				           </div>

              			<form className="login100-form validate-form" onSubmit={this.submitHandler}>
              			<div className="wrap-input100 validate-input m-b-26" data-validate="Username is required">
              						<span className="label-input100">Email</span>
              						<input className="input100" type="text" name="email"
                            onChange={this.changeHandler} value={email} />

              						<span className="focus-input100"></span>
              			</div>

          					<div className="wrap-input100 validate-input m-b-18" data-validate = "Password is required">
          						<span className="label-input100">Password</span>
          						<input className="input100" type="password" name="password"
                           onChange={this.changeHandler} value={password}/>



          						<span className="focus-input100"></span>
          					</div>
                    <div className="help-block">{status}</div>

          					<div className="flex-sb-m w-full p-b-30">
          						<div className="contact100-form-checkbox">
          							<input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>

    						</div>


  					</div>

  					<div className="container-login100-form-btn">
  						<button className="login100-form-btn" >
  							Login
  						</button>
  					</div>
            <div className="message">
            { isLoginPending && <div>Please wait...</div> }
            { isLoginSuccess && <div>Success.</div> }
            { loginError && <div>{loginError.message}</div> }
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

      isLoginPending: state.isLoginPending,
      isLoginSuccess: state.isLoginSuccess,
      loginError: state.loginError
    };
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      login: (email, password) => dispatch(login(email, password))
    };
  }


export default connect(mapStateToProps, mapDispatchToProps)(Login);
