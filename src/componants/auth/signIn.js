import React from 'react';
import ReactDOM from 'react-dom';
import './auth.css'
import SOAP from '../../assets/images/svg/logo/SOAP';
import Eye from '../../assets/images/svg/eye';
import {
  BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, useLocation
} from "react-router-dom";

export default class SignIn extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      username: null,
      password: null,
      errors: {
        username: 'required',
        password: 'required',
      },
      showError: false,
      redirectToHome: false,
      userObject : null,
    };
    this.handleEyeToggle = this.handleEyeToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }


  handleEyeToggle = (event) => {
    this.setState({
      toggle: !this.state.toggle
    });
  }



  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    var passw = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/);

    switch (name) {
      case 'username':
        errors.username =
          value.length < 5
            ? 'username too short'
            : '';
        break;

      case 'password':
        errors.password =
          value.length < 8
            ? 'Password must be at least 8 characters'
            : passw.test(value)
              ? '' : 'password must contain atleast uppercase character and a number';
        break;
      default:
        break;
    }

    this.setState({
      errors, [name]: value,
      showError: false
    });
  }

  validateForm = (event) => {
    event.preventDefault();
    this.setState(
      {
        showError: this.state.errors.password !== '' || this.state.errors.username !== '' ? true : false,
      }
    );
    this.signIn();
    //this.props.history.push('/home');        console.log(this.props);
  }

  signIn() {
    fetch(`/API/signIn/?userEmail=${this.state.username}?${this.state.password}`, {
      "method": "GET",

    })
      .then(function (response) {
        console.log(response.status, "*-*-*")
        if (response.ok) {
          return response.json();
        } else {
          console.log("User not found");
          alert("User not found... \n please enter valid data or sign up. (:");
          throw new Error('Something went wrong ...');
        }
      }
      )

      .then(response => {
        console.log(response, "response");
        
        this.setState({
          userObject: response,
          redirectToHome: this.state.errors.password === '' && this.state.errors.username === '' ? true : false,
        });
      })
      .catch(err => {
        console.log(err, "ERROR");
      });
  }



  render() {


    return (
      <div className="sign_in_container">
        <div className="logo"><SOAP width="6vW" height="10vh" /></div>

        <form onSubmit={this.validateForm} >
          <div className="content_container">
            <span className="signin">Sign in</span>
            <input className="form_input" type="text" placeholder="username/email"
              name="username"
              onChange={this.handleChange}
            />
            <span className="error_message">{this.state.showError ? this.state.errors.username : ''}</span>
            <div >
              <input className="form_input"
                name="password"
                onChange={this.handleChange}
                type={this.state.toggle ? "text" : "password"}
                placeholder="password"
              />
              <div className="toggle_eye" onClick={event => this.handleEyeToggle(event)}
                style={{ bottom: this.state.showError && this.state.errors.password !== '' ? "13.2vh" : '' }}
              >
                {/* <div style={{display:"block"}}>  */}
                <Eye toggle={this.state.toggle ? true : false} />{/*</div>*/}
              </div>
            </div>
            <span className="error_message">{this.state.showError ? this.state.errors.password : ''}</span>

            <input type="submit" className="login_button" value=" Log in" onClick={this.props.loggedIn} />
          </div>
        </form>
        <span className="go_to_signup">have no account yet? <Link to={{
          pathname: "/register",
          data: "hi" // your data array of objects
        }}>

          <a href="#">Sign up</a></Link></span>

        <> {this.state.redirectToHome ? <Redirect to={{
          pathname: '/home',
          state: { userData: this.state.userObject }
        }} /> : ''} </>
      </div>
    );
  }
}