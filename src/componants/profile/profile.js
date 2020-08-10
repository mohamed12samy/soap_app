import './profile.css';
import image from '../../assets/images/Capture.jpg';
import Edit from '../../assets/images/svg/edit'
import { UserContext } from '../../user_context';
import React, { useState, useEffect, useContext } from 'react';

export default class Profile extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      email: null,
      password: null,
      errors: {
        email: 'required',
        password: 'required',
      },
      showError: false
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {

    const { user, setUser } = this.context
    console.log(JSON.stringify(this.props.user) + "2222111");
    //setUser(151);
    this.setState({
      user: user
    });
    //console.log(user+"///////") // { name: 'Tania', loggedIn: true }
  }
  handleEdit = () => {
    this.setState({
      edit: !this.state.edit
    }
    );
  }

  updateUser(id) {
    fetch(`/API/userUpdate/${id}/`, {
      "method": "PUT",
      "headers": { 'Content-Type': 'application/json', },
      "body": JSON.stringify({
        userName: document.getElementById("profileusername").value == '' ? document.getElementById("profileusername").defaultValue :
          document.getElementById("profileusername").value,
        password: document.getElementById("password").value == '' ? document.getElementById("password").defaultValue :
          document.getElementById("password").value,
        //userType: this.state.usertype,
        userEmail: document.getElementById("email").value == '' ? document.getElementById("email").defaultValue :
          document.getElementById("email").value,
        userFirstName:
          document.getElementById("profileusername").value.split(" ")[0] == '' ?
            document.getElementById("profileusername").defaultValue.split(" ")[0] :
            document.getElementById("profileusername").value.split(" ")[0]

        ,
        userLastName:
          document.getElementById("profileusername").value.split(" ")[1] == '' ?
            document.getElementById("profileusername").defaultValue.split(" ")[1] :
            document.getElementById("profileusername").value.split(" ")[1]

              ??
              document.getElementById("profileusername").value.split(" ")[0] == '' ?
              document.getElementById("profileusername").defaultValue.split(" ")[0] :
              document.getElementById("profileusername").value.split(" ")[0]
        ,
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
        console.log(response, "response");
      })
      .catch(err => {
        console.log(err, "ERROR");
      });
  }

  render() {
    return (
      <div className="profile_container">
        <div className="profile_content">
          <div className="imge_name">
            <div className="profile_image">
              <img src={image} />
            </div>
            <span className="username">{this.props.user.userName}</span>
          </div>

          <div className="card_content">

            <form className="form_edit">
              <div className="input_line">
                <label>username</label>
                <input
                  id = "profileusername"
                  className="edit_input" name="username" type="text"
                  disabled={this.state.edit ? "" : "disabled"}
                  defaultValue={this.props.user.userName}

                />

              </div>

              <div className="input_line">
                <label>email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input className="edit_input" name="email" type="text" id="email"
                  disabled={this.state.edit ? "" : "disabled"}
                  defaultValue={this.props.user.userEmail}
                />
              </div>

              <div className="input_line">
                <label>Password</label>
                <input id="password" className="edit_input" name="password" type={this.state.edit ? "text" : "password"}
                  disabled={this.state.edit ? "" : "disabled"}
                  defaultValue={this.props.user.password}
                />

              </div>

            </form>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div type="submit" style={{ display: this.state.edit ? "none" : "", width: "5vw", height: "4vh", marginLeft: "20vw", backgroundColor: "#3A7F95", marginTop: "1vh", marginRight: "2vw" }}
                onClick={this.handleEdit}>
                Edit
                  </div>

              <div type="submit" style={{ display: this.state.edit ? "" : "none", width: "5vw", height: "4vh", marginLeft: "17vw", backgroundColor: "#3A7F95", marginTop: "1vh", marginRight: "2vw" }}
                onClick={()=> this.updateUser(25)}>
                Submit
                  </div>

              <div type="submit" style={{
                width: "5vw", height: "4vh", backgroundColor: "#3A7F95", marginTop: "1vh",
                display: this.state.edit ? "inline-block" : 'none'
              }} onClick={this.handleEdit}>
                Cancel
                  </div>


            </div>

          </div>

        </div>

      </div>
    );
  }
}
