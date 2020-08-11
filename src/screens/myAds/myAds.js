import React, { useState, useEffect, useContext } from 'react';
import {UserContext} from '../../user_context';


import SideMenu from '../../componants/sideMenu2/sideMenu2';

import Appbar from '../../componants/Appbar/Appbar.js';

import HistoryCard from '../../componants/histortCard/historyCard';
import AddButton from "../../assets/images/svg/addButton";
import AdPopUp from '../../componants/adsPop_up/adsPopUp';
var x = {}

function getCookie(name) {
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

function delete_ad(id){
    fetch(`/API/advRemove/${id}/`, {
        "method": "DELETE",
        "headers": { 'Content-Type': 'application/json', "X-CSRFToken": getCookie("csrftoken"),},
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

function showUserAds(id, setAdDAta){
    
    fetch(`/API/showAdvsByUserID/${id}/`, {
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

function MyAds(props) {

    const [showPopup, showAdPopup] = useState(false);
    const [addData, setAdDAta] = useState([]);
    //const con = useContext(UserContext);
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(()=>{
       
        showUserAds(user.id, setAdDAta);
    },[]);

    console.log(x+"9999999999999")
    const cards = addData.map((item, index) =>
        <li>  <HistoryCard
            date={item.startDate}
            name={user.userName}
            //userimage={userData[0].userInfo.userImage}
            fullDescription={item.advContent}
            title={item.advTitle}
            //likes={item.likes}
            //dislikes={item.dislikes}
            postImage={item.photoName}
            //platform ={item.platformLogo}
            //category={item.category}
            onPreesed={()=>{delete_ad(item.id)}}
            adv = {item}
        />
    
        </li>
    )

    return (
        <>
            <div className="App">
                <div style={{
                    width: '21.5vw',
                    height: '100%'
                }}>
                    <SideMenu currentPage="Ads" />
                </div>
                <div style={{
                    width: '78.5vw',
                    height: '100%',
                    display: 'flex',
                    // alignItems: 'center',
                    flexDirection: 'column'
                }}>
                    <Appbar username = {user.userName}/>
                    <div style={{ marginTop: '30px' }}>
                        <ul style={{ listStyle: 'none' }}>{cards}</ul>
                    </div>
                </div>

                <div className="add_button"
                    onClick={!showPopup ? () => showAdPopup(!showPopup) : ''}>
                    <AddButton />
                </div>

                <div className="popup" style={{ 
                    display: showPopup === false ? "none" : '' ,
                    
                    
                    }}>
                    <AdPopUp closePopup={() => showAdPopup(!showPopup)} />
                </div>
            </div>


        </>

    );
}









export default MyAds;
