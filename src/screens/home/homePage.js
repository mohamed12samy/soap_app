import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../user_context';
import './homePageStyle.css';
import SideMenu from '../../componants/sideMenu2/sideMenu2';

import Appbar from '../../componants/Appbar/Appbar.js';
import userimg from '../../assets/images/user.jpg';
import ProductItem from '../../componants/homeCard/ProductItem.js';

import Categories from '../../componants/categoryButtons/categoryButtons.js'
import { Link, Redirect } from "react-router-dom";



var userDataa = {
    
};

function HomePage(props) {


    const [recommendationData, setRecData] = useState([]);


    //if (props.location.state !== undefined) {
        userDataa = JSON.parse(localStorage.getItem('user'));
    //}

    const con = useContext(UserContext);
    useEffect(() => {

        console.log(
            localStorage.getItem('isLogged') + "  **  " +
            JSON.parse(localStorage.getItem('user')).userName
            + "   20505");

      //  con.setUser();

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
    }, [con]);

    return (
        <>

            <div className="App">
                <div style={{
                    width: '21.5vw',
                    height: '100%'
                }}>
                    <SideMenu currentPage={"Home"} isLogged={props.logOut} />
                </div>
                <div style={{
                    width: '78.5vw',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Appbar username={userDataa.userName} />


                    <div class="RecommdationSection">

                        <h2 className="recTitle">Recommendation</h2>
                        <RecItems recData={recommendationData} />

                    </div>

                    <Categories />
                </div>
            </div>


        </>

    );
}


function RecItems({ recData }) {
    console.log(recData[0], "10000000000");
    const cards = recData.map((item, index) =>
        <Link to={{
            pathname: "/postDetails",
            state: { postData: item },
        }}><li> <ProductItem
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
