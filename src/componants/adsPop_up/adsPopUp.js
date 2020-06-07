import React from 'react';
import ReactDOM from 'react-dom';
import SOAP from '../../assets/images/svg/logo/SOAP';
import './adsPopUp.css'
import Upload from '../../assets/images/svg/upload'
import Arrow from '../../assets/images/svg/arrow'
import Discard from '../../assets/images/svg/discard'
import image from '../../assets/images/Capture.jpg';



const items = [
    {
        name: 'movies'
    },
    {
        name: 'products'
    },
    {
        name: 'games'
    },
    {
        name: 'Accessories'
    },
    {
        name: 'Others'
    }
];

export default class AdsPopUp extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
           displayMenu: false,
           selectedIndex: -1,
           selectedImage: null,
      }
      this.handleMenuAppearance = this.handleMenuAppearance.bind(this);
      this.selecteMenu = this.selecteMenu.bind(this);
      this.fileChangedHandler = this.fileChangedHandler.bind(this);
      this.discardImage = this.discardImage.bind(this);
    }
    
    handleMenuAppearance=(event)=>{
        this.setState({
            displayMenu:!this.state.displayMenu 
        });
    }
    selecteMenu=(event,index)=>{
        this.setState({selectedIndex: index,
            displayMenu: false
        });
    }

    fileChangedHandler=(event)=>{
        const file = URL.createObjectURL(event.target.files[0]);
        this.setState({selectedImage: file});
    }
    discardImage=(event)=>{
        this.setState({selectedImage: null});
    }

    render(){
      
        return(
            <div className="popup_container">
                <div className="popup_header">
                    <div className="soap"><SOAP width="5.5vW" height="9.5vh"/></div>
                    <span className="popup_title">add new advertise</span>
                </div>

                <div className="popup_content">
                    <div className="left_content">
                        <input className="input_title" type="text" placeholder="title"
                                    name="title" />
                        <textarea className="input_description" type="text" placeholder="description..."
                                    name="description" />
                        <div className="image_area">
                            
                            <label className="upload_icon" for="image_pick">
                                <Upload/> <input type="file" accept="image/*" className="filetype" id="image_pick" onChange={this.fileChangedHandler}/></label>
                            <span>drag and drop image</span>
                            <div className="image_view" style={{display: this.state.selectedImage === null? "none":'' }}>
                                <img src ={this.state.selectedImage}/>
                                <div className="discard_icon" onClick={this.discardImage}><Discard/></div>
                            </div>
                        </div>
                    </div>
                    <div className="right_menu">
                        <div className= {this.state.displayMenu?'menu_header_open':"menu_header"}  
                            onClick={this.handleMenuAppearance}
                        >
                            <span className="menu_select">{this.state.selectedIndex === -1 ? "category": 
                                items[this.state.selectedIndex].name }</span>
                            <div className="arrow"
                                style={{
                                    transform: this.state.displayMenu? "rotate(180deg)":"rotate(0deg)"
                                }}
                            ><Arrow/></div>
                        </div>
                        <div className="menu_items" style={{display: this.state.displayMenu? "block":"none"  }}>
                            <ul className="menu_list">
                            {items.map((item,index) => (
                                <li key={index} 
                                    onClick={event=>this.selecteMenu(event,index)}>
                                    <span>{item.name}</span>
                                </li>
                            ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="popup_footer">
                        <div className="footer_content">
                            <button className="submit_button">submit</button>
                            <button className="cancel_button"  onClick={this.props.closePopup}>cancel</button>
                        </div>
                </div>
               
            </div>
        );
    }

}