import React from 'react';
import ReactDOM from 'react-dom';
import './Appbar.css'
import image from '../../assets/images/Capture.PNG';
import ExampleComponent from "react-rounded-image";

export default function Appbar(){
    return(

        <div className="appbar">
            <a href="#"><div className="user_info">
                <ExampleComponent
                    image={image}
                    roundedSize="1"
                    imageWidth="40"
                    imageHeight="40"
                />
                <p className="user_name">Name</p>
            </div></a>
            <div className="searchbar">
            </div>
        </div>
    );
}