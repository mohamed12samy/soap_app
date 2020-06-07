import React from 'react';
import ReactDOM from 'react-dom';
import SOAP from '../../assets/images/svg/logo/SOAP';
import './adsPopUp.css'
import Upload from '../../assets/images/svg/upload'
import Discard from '../../assets/images/svg/discard'
import Menu from '../menu_category/menu'



export default class AdsPopUp extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
           displayMenu: false,
           selectedIndex: -1,
           selectedImage: null,
      }
      this.fileChangedHandler = this.fileChangedHandler.bind(this);
      this.discardImage = this.discardImage.bind(this);
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
                        <Menu/>
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