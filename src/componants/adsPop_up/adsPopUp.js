import React from 'react';
import ReactDOM from 'react-dom';
import SOAP from '../../assets/images/svg/logo/SOAP';
import './adsPopUp.css'
import Upload from '../../assets/images/svg/upload'
import Arrow from '../../assets/images/svg/arrow'







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
           selectedIndex: -1

      }
      this.handleMenuAppearance = this.handleMenuAppearance.bind(this);
      this.selecteMenu = this.selecteMenu.bind(this);
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
                            <div className="upload_icon"><Upload/></div>
                            <span>drag and drop image</span>
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
                    
                </div>

            </div>
        );
    }

}