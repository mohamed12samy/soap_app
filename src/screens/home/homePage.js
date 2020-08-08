import React, { useState, useEffect } from 'react';

import './homePageStyle.css';
import SideMenu from '../../componants/sideMenu2/sideMenu2';

import Appbar from '../../componants/Appbar/Appbar.js';
import userimg from '../../assets/images/user.jpg';
import ProductItem from '../../componants/homeCard/ProductItem.js';

import cammug from '../../assets/images/cammug.jpg';
import watch from '../../assets/images/watch1.jpg';
import labtop from '../../assets/images/labtop.jpg';
import drown from '../../assets/images/drown.jpg';
import Categories from '../../componants/categoryButtons/categoryButtons.js'
import { Link} from "react-router-dom";



var userDataa =  {
    userName : null,
};

function HomePage(props) {
  
    const [recommendationData, setRecData] = useState([
        
            {
                "id": 6,
                "url": "https://www.gooddglemaps.com/?hl=ar",
                "postTitle": "This is Google people!.",
                "postContent": "red2.",
                "photoUrl": "https://www.google.com",
                "rate": "5.00",
                "numberOfComments": null,
                "numberOfRealComments": null,
                "numberOf_5_StarsComments": null,
                "numberOf_4_StarsComments": null,
                "numberOf_3_StarsComments": null,
                "numberOf_2_StarsComments": null,
                "numberOf_1_StarsComments": null,
                "Comment_5_StarsSample": "5",
                "Comment_4_StarsSample": "4",
                "Comment_3_StarsSample": "3",
                "Comment_2_StarsSample": "2",
                "Comment_1_StarsSample": "1",
                "NumberOfLikes": 0,
                "NumberOfDislikes": 1,
                "userID": 2,
                "categoryID": 1
            },
            {
                "id": 4,
                "url": "https://www.googlemaps.com/?hl=ar",
                "postTitle": "This is Google people!.",
                "postContent": "red2.",
                "photoUrl": null,
                "rate": "4.50",
                "numberOfComments": null,
                "numberOfRealComments": null,
                "numberOf_5_StarsComments": null,
                "numberOf_4_StarsComments": null,
                "numberOf_3_StarsComments": null,
                "numberOf_2_StarsComments": null,
                "numberOf_1_StarsComments": null,
                "Comment_5_StarsSample": "5",
                "Comment_4_StarsSample": "4",
                "Comment_3_StarsSample": "3",
                "Comment_2_StarsSample": "2",
                "Comment_1_StarsSample": "1",
                "NumberOfLikes": 0,
                "NumberOfDislikes": 0,
                "userID": 1,
                "categoryID": 1
            },
    ]);


    // if(props.location !== undefined || props.location.state !== undefined ){
    //     userDataa = props.location.state.userData;  
    // }

    useEffect(() =>  {
        
        fetch(`/API/showTopPosts/`, {
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
              console.log(response, "response");
              
              setRecData(response);
              
            })
            .catch(err => {
              console.log(err, "ERROR");
            });
      },[]);
    
    return (
        <>
            <div className="App">
                <div style={{
                    width: '21.5vw',
                    height: '100%'
                }}>
                    <SideMenu currentPage={"Home"}  isLogged={props.logOut}/>
                </div>
                <div style={{
                    width: '78.5vw',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Appbar username = {userDataa['userName'] ?? "name"}/>


                    <div class="RecommdationSection">

                        <h2 className="recTitle">Recommendation</h2>
                        <RecItems recData = {recommendationData}/>

                    </div>

                    <Categories />
                </div>
            </div>


        </>

    );
}


function RecItems({recData}) {
   console.log(recData[0] , "10000000000");
    const cards = recData.map((item, index) =>
        <Link to="/postDetails"><li> <ProductItem
            category={false}
            description={item.postContent}
            title={item.postTitle}
            likes={item.NumberOfLikes}
            dislikes={item.NumberOfDislikes}
            image={item.photoUrl}
        />
        </li></Link>
    )
    return <ul className="recommendationListContainer">{cards}</ul>;

}










export default HomePage;
