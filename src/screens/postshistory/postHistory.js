import React, { useState, useEffect, useContext } from 'react';
import {UserContext} from '../../user_context';

import SideMenu from '../../componants/sideMenu2/sideMenu2';

import Appbar from '../../componants/Appbar/Appbar.js';
import userimg from '../../assets/images/user.jpg';
import ProductItem from '../../componants/homeCard/ProductItem.js';


import HistoryCard from '../../componants/postHistortCard/historyCard';
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

function get_category(id,categories) {
  console.log(id+JSON.stringify(categories) + "daaaaaaaataaaaaaa");
  var i;
  for( i=0;  i<categories.length; i++){

      if (id == categories[i].id){
          return categories[i].categoryName;
      }
  }
}

function getCategories(setCat){
  fetch(`/API/catList/`, {
    "method": "GET",
  })
    .then(function (response) {
      console.log(response.status, "*-*-*")
      if (response.ok) {
        return response.json();
      } else {
        console.log("no posts");
        throw new Error('Something went wrong ...');
      }
    }
    )
    .then(response => {
      
      setCat(response);
      console.log(JSON.stringify(response)+"*-*-+-+-");
    })
    .catch(err => {
      console.log(err, "ERROR");
    });
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
    const [categories, setCat] = useState([]);
    //const con = useContext(UserContext);
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(()=>{
        showUserPosts(user.id, setAdDAta);
        getCategories(setCat);
    },[]);
    const cards = addData.map((item, index) =>
    <li>  <HistoryCard
    date={item.startDate}
    name={user.userName}
    fullDescription={item.postContent}
    title={item.postTitle}
    rate={item.rate}
    likes={item.NumberOfLikes}
    dislikes={item.NumberOfDislikes}
    postImage={item.photoUrl}
    platform ={get_logo(item.url)}
    category={get_category(item.categoryID, categories)}
    onPreesed={()=>{delete_post(item.id)}}

    postData = {item}

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
                    <Appbar username = {user.userName}/>
                    <div style={{ marginTop: '30px' }}>
                        <ul style={{ listStyle: 'none' }}>{cards}</ul>
                    </div>
                </div>
             
            </div>


        </>

    );
}









export default PostHistory;
