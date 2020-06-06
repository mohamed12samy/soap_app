import React from 'react';
import ReactDOM from 'react-dom';
import './signIn.css'
import SOAP from '../../assets/images/svg/logo/SOAP';
import Eye from '../../assets/images/svg/eye';


export default class SignIn extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            username: null,
            password: null,
            errors: {
                username: '',
                password: '',
            },
            showError: false
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
        var passw=  /^[A-Z]*$/;
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
                ? '':'password must contain atleast uppercase character';
            break;
            default:
            break;
        }
      
        this.setState({
            errors, [name]: value, 
            showError: false
        });
      } 
    
      validateForm=(event)=>{
        event.preventDefault();
          this.setState(
            {
            showError: this.state.errors ? true : false
        }
        );
      }
     

    render(){
        return(
            <div className="sign_in_container">
              <div className="logo"><SOAP width="6vW" height="10vh"/></div>
            
                <form onSubmit={this.validateForm} >
                    <div className="content_container">
                        <span className="signin">Sign in</span>
                        <input className="form_input" type="text" placeholder="username/email"
                            name="username"
                            onChange={this.handleChange}
                        />
                        <span className="error_message">{this.state.showError?this.state.errors.username:''}</span>    
                        <div >
                            <input className="form_input"                           
                                name="password"
                                onChange={this.handleChange}
                                type={this.state.toggle ? "text" : "password"} 
                                placeholder="password"
                            />    
                            <div className="toggle_eye" onClick={event => this.handleEyeToggle(event)}
                                style={{bottom:  this.state.showError? "10.5vh" :'' }}
                            >
                                 {/* <div style={{display:"block"}}>  */}
                                <Eye toggle={this.state.toggle? true: false} />{/*</div>*/}
                            </div>
                        </div>
                        <span className="error_message">{this.state.showError?this.state.errors.password:''}</span>   

                        <input type="submit" className="login_button" value=" Log in" />
                    </div>
                </form>
                <span className="go_to_signup">have no account yet? <a href="#">Sign up</a></span>
        </div>
      );
    }
}