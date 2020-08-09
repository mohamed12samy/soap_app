import React, { useState, useEffect, useContext } from 'react';
import {UserContext} from '../../user_context';

import SideMenu from '../../componants/sideMenu2/sideMenu2';

import Appbar from '../../componants/Appbar/Appbar.js';
import userimg from '../../assets/images/user.jpg';
import ProductItem from '../../componants/homeCard/ProductItem.js';

import cammug from '../../assets/images/cammug.jpg';
import watch from '../../assets/images/watch1.jpg';
import labtop from '../../assets/images/labtop.jpg';
import drown from '../../assets/images/drown.jpg';
import HistoryCard from '../../componants/histortCard/historyCard';
import AddButton from "../../assets/images/svg/addButton";
import AdPopUp from '../../componants/adsPop_up/adsPopUp';
function delete_post(id){
    fetch(`/API/postRemove/${id}/`, {
        "method": "DELETE",
       
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
          
        })
        .catch(err => {
          console.log(err, "ERROR");
        });
}

function showUserPosts(id,setAdDAta){
    
    fetch(`/API/showPostsByUserID/${id}/`, {
        "method": "GET",
        "headers": {'Content-Type': 'application/json',   },
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
            setAdDAta(response);
          console.log(response, "response");
          
        })
        .catch(err => {
          console.log(err, "ERROR");
        });
}


function get_category(id) {
    switch (id) {
        case 1:
            return "Movies";
            break;
        case 2:
            return "Products";
            break;
        case 3:
            return "Games";
            break;
        case 4:
            return "Others";
            break;

    }
}
function get_logo(url) {
    var logo = "";
    logo = url.includes("youtube") ? "youtube" :
        url.includes("facebook") ? "facebook" :
            url.includes("instagram") ? "instagram" :
                url.includes("twitter") ? "twitter" : "linkedin";

    return logo;
}


function PostHistory(props) {

    const [addData, setAdDAta] = useState([]);
    const con = useContext(UserContext);

    useEffect(()=>{
        showUserPosts(con.user.id, setAdDAta);
    },[]);
    const cards = addData.map((item, index) =>
    <li>  <HistoryCard
    date={item.startDate}
    name={"user"}
    fullDescription={item.postContent}
    title={item.postTitle}
    rate={item.rate}
    likes={item.NumberOfLikes}
    dislikes={item.NumberOfDislikes}
    postImage={item.photoUrl}
    platform ={item.platformLogo}
    category={get_category(item.categoryID)}
    onPreesed={()=>{delete_post(item.id)}}

/>

</li>
    )
    const [showPopup, showAdPopup] = useState(false);

    return (
        <>
            <div className="App">
                <div style={{
                    width: '21.5vw',
                    height: '100%'
                }}>
                    <SideMenu currentPage="Posts" />
                </div>
                <div style={{
                    width: '78.5vw',
                    height: '100%',
                    display: 'flex',
                    // alignItems: 'center',
                    flexDirection: 'column'
                }}>
                    <Appbar username = {con.user.userName}/>
                    <div style={{ marginTop: '30px' }}>
                        <ul style={{ listStyle: 'none' }}>{cards}</ul>
                    </div>
                </div>
             
            </div>


        </>

    );
}









export default PostHistory;
