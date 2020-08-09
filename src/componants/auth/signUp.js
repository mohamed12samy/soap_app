import React from 'react';
import ReactDOM from 'react-dom';
import './auth.css'
import SOAP from '../../assets/images/svg/logo/SOAP';
import Eye from '../../assets/images/svg/eye';
import {
  BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, useLocation
} from "react-router-dom";

import {UserContext} from '../../user_context';

//const {user, setUser} ;
export default class SignIn extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {
      user:{user:null},
      toggle: false,
      email: null,
      name: null,
      password: null,
      confirm_password: null,
      errors: {
        email: 'required',
        name: 'required',
        password: 'required',
        confirm_password: 'required',
        length: 0,
      },
      showError: false,
      redirectToHome: false,
      userObject: null,
    };
    this.handleEyeToggle = this.handleEyeToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateForm = this.validateForm.bind(this);

  }


  static contextType = UserContext

  componentDidMount() {
    
   //const {user, setUser} = this.context
   //setUser(151);
    // this.setState({
    //   user : this.context
    // });
    //console.log(user+"///////") // { name: 'Tania', loggedIn: true }
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

    var password_check = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/);
    var email_check = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

    switch (name) {
      case 'name':
        errors.name =
          value.length < 5
            ? 'Name too short'
            : '';
        break;
      case 'email':
        errors.email =
          email_check.test(value)
            ? '' : 'Email is not valid!';
        break;
      case 'password':
        errors.password =
          value.length < 8
            ? 'Password must be at least 8 characters'
            : password_check.test(value)
              ? '' : 'password must contain atleast uppercase character and a number';
        break;
      case 'confirm_password':
        errors.confirm_password =
          value === this.state.password
            ? ''
            : "password don't match";
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
        showError: this.state.errors.password !== '' || this.state.errors.name !== '' ? true : false,
      }
    );
    this.signUp();
  }

  signUp() {
    var name = this.state.name;
    // const { user, setUser } = this.context;
    
    fetch(`/API/userCreate/`, {
      "method": "POST",
      "headers": {'Content-Type': 'application/json',   },
      "body": JSON.stringify({
        userName: this.state.name,
        password: this.state.password,
        //userType: this.state.usertype,
        userEmail: this.state.email,
        userFirstName: name.split(" ")[0],
        userLastName: name.split(" ")[1] ?? name.split(" ")[0],
        //userLastVistedCategoryID: 1
      })
    },
    )
      .then(function (response) {
        console.log(response.status, "*-*-*")
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      }
      )

      .then(response => {

        
        //this.state.user.setUser(response.id);
        console.log(response, "response");
        
        //console.log(this.state.user.user+"-----------------");
        this.setState({
          userObject: response,
          redirectToHome: this.state.errors.password === '' && this.state.errors.name === '' && this.state.errors.email === '' ? true : false,
        });
       
      })
      .catch(err => {
        console.log(err, "ERROR");
      });
  }
  render() {
    
     //const { user, setUser } = this.context;
    // setUser(20);
    // console.log(user+"/******/");

    return (
      <div className="sign_in_container" style={{ height: "80vh", width: "30vw", top: "10vh" }}>
        <div className="logo"><SOAP width="6vW" height="10vh" /></div>

        <form onSubmit={this.validateForm} >
          <div className="content_container">
            <span className="signin">Sign up</span>
            <input className="form_input" type="email" placeholder="email"
              name="email"
              onChange={this.handleChange}
            />
            <span className="error_message">{this.state.showError ? this.state.errors.email : ''}</span>

            <input className="form_input" type="text" placeholder="username"
              name="name"
              onChange={this.handleChange}
            />
            <span className="error_message">{this.state.showError ? this.state.errors.name : ''}</span>

            <div >
              <input className="form_input"
                name="password"
                onChange={this.handleChange}
                type={this.state.toggle ? "text" : "password"}
                placeholder="password"
              />
              <div className="toggle_eye"
                onClick={event => this.handleEyeToggle(event)}
                style={{ bottom: this.state.showError ? "23.8vh" : "21.4vh" }}
              >
                {/* <div style={{display:"block"}}>  */}
                <Eye toggle={this.state.toggle ? true : false} />{/*</div>*/}
              </div>
            </div>
            <span className="error_message">{this.state.showError ? this.state.errors.password : ''}</span>

            <input className="form_input"
              type="password"
              name="confirm_password"
              onChange={this.handleChange}
              placeholder="confirm password"
            />
            <span className="error_message">{this.state.showError && this.state.errors.password === ''
              ? this.state.errors.confirm_password : ''}</span>

            <input type="submit" className="login_button" value=" Sign up" />
          </div>
        </form>
       
    <span className="go_to_signup">already have account  <Link to="/login"><a href="#">Log in</a></Link></span>
        <> {
        
           this.state.redirectToHome ? <Redirect to={{
                pathname: '/home',
                state: { userData: this.state.userObject }
              }} />
            :''
          
        
        } </>
      </div>
    );
  }
}