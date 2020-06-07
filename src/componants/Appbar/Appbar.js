import React from 'react';
import ReactDOM from 'react-dom';
import './Appbar.css'
import image from '../../assets/images/Capture.PNG';
import Search from '../../assets/images/svg/searchIcon';

export default function Appbar() {
    return (

        <div className="appbar">
            <a href="#"><div className="user_info">
                <img 
                    src={image}
                />
                <p className="user_name">Name</p>
            </div></a>
            <div className="searchbar">
                <div className="search_icon"><Search /></div>
                <input
                    className="searchbar_input"
                    type="text"
                    placeholder="Search..."

                />
            </div>
        </div>
    );
}