import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Appbar.css'
import image from '../../assets/images/Capture.PNG';
import Search from '../../assets/images/svg/searchIcon';
import {
    Link, Redirect
} from "react-router-dom";


function searchPostTitle(postTitle, setRedirect, setPosts) {
    console.log(postTitle)
   

    fetch(`API/searchPostbyTitle/?postTitle=${postTitle}`, {
        "method": "GET",
        "headers": { 'Content-Type': 'application/json', },
    },
    )
        .then(function (response) {
            console.log(response.status, "-*-")
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong ...');
            }
        }
        )
        .then(response => {
           
            console.log(response, "response");
            setPosts(response);
            setRedirect(true);

        })
        .catch(err => {
            console.log(err, "ERROR");
        });
}


export default function Appbar(props) {

    const [redirect, setRedirect] = useState(false);
    const [searchResult, setPosts] = useState([]);
    console.log("flag ", props.flag);
    return (

        <div className="appbar">
            <Link to="/profile"><a href="#"><div className="user_info">
                <img
                    src={image}
                />
                <p className="user_name">{props.username ?? "name"}</p>
            </div></a></Link>
            <div className="searchbar" style={{ display: props.flag === "hide" ? "none" : "flex" }}>
                <div onClick={()=>{searchPostTitle(document.getElementById("searchValue").value,
            setRedirect, setPosts)}} className="search_icon" ><Search /></div>
                <input
                    className="searchbar_input"
                    type="text"
                    id="searchValue"
                    placeholder="Search..."
                />
            </div>
            <> {
        
        redirect ? <Redirect to={{
             pathname: '/searchResult',
             state: { postData: searchResult }
           }} />
         :''
       
     
     } </>
        </div>
    );
}