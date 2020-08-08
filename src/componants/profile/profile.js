import React from 'react';
import './profile.css';
import image from '../../assets/images/Capture.jpg';
import Edit from '../../assets/images/svg/edit'

export default class Profile extends React.Component{


  constructor(props) {
    super(props);
    this.state = {
      editEmail: false,
      editPassword: false,
        email: null,
        password: null,
        errors: {
            email: 'required',
            password: 'required',
        },
        showError: false
    };
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleEdit = (event, id) => {
    
    switch (id) {
      case "email": 
        this.setState({
          editEmail: !this.state.editEmail        
        },()=>{    console.log(this.state.editEmail);}
        );
        break;
      case 'password': 
        this.setState({
          editPassword: !this.state.editPassword        
        });
        break;
        default:
        break;
      }
  }

  render(){
    return(
      <div className="profile_container">
        <div className="profile_content">
          <div className="imge_name">
            <div className="profile_image">
                <img src={image}/>
            </div>
            <span className="username">Mohamed Samy</span>
          </div>

          <div className="card_content">
            
            <form  className="form_edit">
                <div className="input_line">
                      <label>First Name</label>
                    <input className="edit_input" name = "email" type="text" 
                    disabled= {this.state.editEmail ?  "": "disabled"}
                      value="Mohamed"
                    />
                  <div className="edit" id="email" onClick={event => this.handleEdit(event,"email")} style={{marginLeft: "21.5vw"}}> </div>
                </div>

                <div className="input_line">
                      <label>Last Name</label>
                    <input className="edit_input" name = "email" type="text" 
                    disabled= {this.state.editEmail ?  "": "disabled"}
                      value="Samy"
                    />
                  <div className="edit" id="email" onClick={event => this.handleEdit(event,"email")} style={{marginLeft: "21.5vw"}}> </div>
                </div>

                <div className="input_line">
                      <label>email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input className="edit_input" name = "email" type="text" 
                    disabled= {this.state.editEmail ?  "": "disabled"}
                      value="mosamy@saop.com"
                    />
                  <div className="edit" id="email" onClick={event => this.handleEdit(event,"email")} style={{marginLeft: "21.5vw"}}> </div>
                </div>
              
              </form>
          </div>

        </div>
      </div>
    );
}
}
