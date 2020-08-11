import React from 'react';
import ReactDOM from 'react-dom';
import SOAP from '../../assets/images/svg/logo/SOAP';
import './adsPopUp.css'
import Upload from '../../assets/images/svg/upload'
import Discard from '../../assets/images/svg/discard'
import Menu from '../menu_category/menu'
import {UserContext} from '../../user_context';

export default class AdsPopUp extends React.Component{

    static contextType = UserContext

    constructor(props) {
        super(props);
        this.state = {
            title: null,
            desc: null,
            priceMounth: 0,
            durationDay:0,
            startDate:null,

            userID: null,

           displayMenu: false,
           selectedIndex: -1,
           selectedImage: null,
      }
      this.fileChangedHandler = this.fileChangedHandler.bind(this);
      this.discardImage = this.discardImage.bind(this);
      }
      componentDidMount() {
    
        const {user, setUser} = this.context
          this.setState({
            userID : JSON.parse(localStorage.getItem('user')).id
          });
         }

    fileChangedHandler=(event)=>{
        const file = URL.createObjectURL(event.target.files[0]);
        this.setState({selectedImage: file});
    }
    discardImage=(event)=>{
        this.setState({selectedImage: null});
    }
    handleDrop = (files) => {
        let fileList = this.state.files
        for (var i = 0; i < files.length; i++) {
          if (!files[i].name) return
          fileList.push(files[i].name)
        }
        this.setState({files: fileList})
      }
      getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie =cookies[i];
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    createAdd(id){
        fetch(`/API/advCreate/`, {
            "method": "POST",
            "headers": { 'Content-Type': 'application/json', "X-CSRFToken": this.getCookie("csrftoken"),},
            "body": JSON.stringify({ 
                advTitle: document.getElementById("title").value,
                advContent: document.getElementById("desc").value,
                pricePerMonth: document.getElementById("priceMounth").value,
                startDate: document.getElementById("startDate").value,
                durationPerDay: document.getElementById("durationDay").value,
                photoName: document.getElementById("image_url").value,
                userID: this.state.userID,
            })

        })
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
                console.log(response, "*****************************adv DAta ");
                
            })
            .catch(err => {
                console.log(err, "ERROR");
            });
    }

    render(){
        console.log(this.state.userID+"///////") // { name: 'Tania', loggedIn: true }
        return(
            <div className="popup_container">
                <div className="popup_header">
                    <div className="soap"><SOAP width="5.5vW" height="9.5vh"/></div>
                    <span className="popup_title">add new advertise</span>
                </div>

                <div className="popup_content">
                    <div className="left_content">
                        <input className="input_title" type="text" placeholder="title"
                                    id="title" />
                        <textarea className="input_description" type="text" placeholder="description..."
                                    id="desc" />
                        {/*<div className="image_area">*/}
                            <input className="input_title" type="text" placeholder="image url"
                                    id="image_url" />
                        {/*<div>*/}
                    </div>
                    <div className="right_menu">
                        {/*<Menu/>*/}
                        <input className="input_other" type="number" placeholder="price/mounth"
                                    id="priceMounth" />
                        <input className="input_other" type="number" placeholder="duration/day"
                                    id="durationDay" />  
                        <input className="input_other" type="date" placeholder="start date"
                                    id="startDate" />
                                  
                    </div>
                </div>
                <div className="popup_footer">
                        <div className="footer_content">
                            <button className="submit_button" onClick = {()=> this.createAdd(this.state.userID)}>submit</button>
                            <button className="cancel_button"  onClick={this.props.closePopup}>cancel</button>
                        </div>
                </div>
               
            </div>
        );
    }

}