import React from 'react';
import ReactDOM from 'react-dom';
import './Appbar.css'
import image from '../../assets/images/Capture.PNG';
import Search from '../../assets/images/svg/searchIcon';
import {
    Link, Redirect
  } from "react-router-dom";

export default function Appbar(props) {
    console.log("flag ",props.flag);
    return (

        <div className="appbar">
            <Link to="/profile"><a href="#"><div className="user_info">
                <img 
                    src={image}
                />
                <p className="user_name">Name</p>
            </div></a></Link>
            <div className="searchbar" style={{display: props.flag === "hide"  ? "none":"flex" }}>
                <div className="search_icon" ><Search /></div>
                <input
                    className="searchbar_input"
                    type="text"
                    placeholder="Search..."

                />
            </div>
        </div>
    );
}