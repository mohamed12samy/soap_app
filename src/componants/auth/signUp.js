import React from 'react';
import ReactDOM from 'react-dom';
import './auth.css'
import SOAP from '../../assets/images/svg/logo/SOAP';
import Eye from '../../assets/images/svg/eye';


export default class SignIn extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            email: null,
            name:null,
            password: null,
            confirm_password:null,
            errors: {
                email:'required',
                name:'required',
                password: 'required',
                confirm_password:'required',
                length:0,
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

        var password_check =  RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/); 
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
                ? '': 'Email is not valid!';
                break;
          case 'password':
            errors.password = 
              value.length < 8
                ? 'Password must be at least 8 characters'
                : password_check.test(value) 
                ? '':'password must contain atleast uppercase character and a number';
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
            <div className="sign_in_container" style={{height: "80vh", width:"30vw",}}>
              <div className="logo"><SOAP width="6vW" height="10vh"/></div>
            
                <form onSubmit={this.validateForm} >
                    <div className="content_container">
                        <span className="signin">Sign up</span>
                        <input className="form_input" type="email" placeholder="email"
                            name="email"
                            onChange={this.handleChange}
                        />
                        <span className="error_message">{this.state.showError?this.state.errors.email:''}</span>
                        
                        <input className="form_input" type="text" placeholder="username"
                            name="name"
                            onChange={this.handleChange}
                        />
                        <span className="error_message">{this.state.showError?this.state.errors.name:''}</span>
                            
                        <div >
                            <input className="form_input"                           
                                name="password"
                                onChange={this.handleChange}
                                type={this.state.toggle ? "text" : "password"} 
                                placeholder="password"
                            />    
                            <div className="toggle_eye" 
                                onClick={event => this.handleEyeToggle(event)}
                                style={{bottom:  this.state.showError ? "19.5vh" :"16.8vh" }}
                            >
                                 {/* <div style={{display:"block"}}>  */}
                                <Eye toggle={this.state.toggle? true: false} />{/*</div>*/}
                            </div>
                        </div>
                        <span className="error_message">{this.state.showError?this.state.errors.password:''}</span>   
                        
                        <input className="form_input"
                                type="password"                           
                                name="confirm_password"
                                onChange={this.handleChange}
                                placeholder="confirm password"
                            />    
                        <span className="error_message">{this.state.showError && this.state.errors.password ===''
                            ?this.state.errors.confirm_password:''}</span>   
                        
                        <input type="submit" className="login_button" value=" Sign up" />
                    </div>
                </form>
                <span className="go_to_signup">already have account? <a href="#">Log in</a></span>
        </div>
      );
    }
}