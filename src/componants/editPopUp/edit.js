import React from 'react';
import ReactDOM from 'react-dom';
import SOAP from '../../assets/images/svg/logo/SOAP';
import './edit.css'
import Upload from '../../assets/images/svg/upload'
import Discard from '../../assets/images/svg/discard'
import Menu from '../menu_category/menu'
import {UserContext} from '../../user_context';

export default class EditPopup extends React.Component{

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

           updated: false
      }
      }
      componentDidMount() {
        
        const {user, setUser} = this.context
          this.setState({
            userID : JSON.parse(localStorage.getItem('user')).id
          });
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
    updateAdv(adv){
        console.log(document.getElementById("title").value +"\n"+document.getElementById("desc").value+"\n"+document.getElementById("image_url").value+"----------85");
        fetch(`/API/advUpdate/${adv.id}/`, {
            "method": "PUT",
            "headers": { 'Content-Type': 'application/json', "X-CSRFToken": this.getCookie("csrftoken"),},
            "body": JSON.stringify({ 
                advTitle: document.getElementById("title").value == '' ? document.getElementById("title").defaultValue:
                document.getElementById("title").value ,
                advContent: document.getElementById("desc").value == '' ? document.getElementById("desc").defaultValue:
                document.getElementById("desc").value ,
                pricePerMonth: adv.pricePerMonth,
                startDate: adv.startDate,
                durationPerDay: adv.durationPerDay,
                photoName: document.getElementById("image_url").value == '' ? document.getElementById("image_url").defaultValue:
                document.getElementById("image_url").value ,
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
                console.log(response, "*****************************adv update DAta ");
                this.setState({
                    updated:true
                })
                document.getElementById("title").value = null;
                document.getElementById("desc").value = null;
                document.getElementById("priceMounth").value = null;
                document.getElementById("startDate").value = null;
                document.getElementById("image_url").value = null;
                document.getElementById("durationDay").value = null;
                window.location.reload(false);
                
            })
            .catch(err => {
                console.log(err, "ERROR");
            });
    }

    render(){
        return(
            <div className="popup_containerr">
                <div className="popup_header">
                    <div className="soap"><SOAP width="5.5vW" height="9.5vh"/></div>
                    <span className="popup_title">update your advertise</span>
                </div>

                <div className="popup_content">
                    <div className="left_content">
                        <input className="input_title" type="text" placeholder="title" 
                                    id="title" defaultValue={this.props.advData.advTitle} />
                        <textarea className="input_description" type="text" placeholder="description..."
                                    id="desc" defaultValue={this.props.advData.advContent}/>
                        <input className="input_title" type="text" placeholder="image url"
                                    id="image_url" defaultValue={this.props.advData.photoName }/>
                    </div>
                </div>
                <div className="popup_footer">
                        <div className="footer_content">
                            <button className="submit_button" onClick = {()=> this.updateAdv(this.props.advData) }>submit</button>
        <button className="cancel_button"  onClick={this.props.closePopup}>{this.state.updated ? "Done":"Cancel"}</button>
                        </div>
                </div>
               <>
                {
                    
                }
               </>
            </div>
        );
    }

}