import React, { useState, useEffect, useContext } from 'react';
import {UserContext} from '../../user_context';
import '../home/homePageStyle.css';
import SideMenu from '../../componants/sideMenu2/sideMenu2';

import Appbar from '../../componants/Appbar/Appbar.js';
import userimg from '../../assets/images/user.jpg';
import ProductItem from '../../componants/homeCard/ProductItem.js';

import TopCategories from '../../componants/categorytoprated/topCategories.js';


function TopRated() {
    const con = useContext(UserContext);

    return (
        <>
            <div className="App">
                <div style={{
                    width: '21.5vw',
                    height: '100%'
                }}>
                    <SideMenu currentPage="TopRated"/>
                </div>
                <div style={{
                    width: '78.5vw',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Appbar username = {con.user.userName}/>

                    <TopCategories />
                </div>
            </div>


        </>

    );
}









export default TopRated;
