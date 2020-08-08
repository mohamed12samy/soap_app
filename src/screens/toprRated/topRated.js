import React, { useState } from 'react';

import '../home/homePageStyle.css';
import SideMenu from '../../componants/sideMenu2/sideMenu2';

import Appbar from '../../componants/Appbar/Appbar.js';
import userimg from '../../assets/images/user.jpg';
import ProductItem from '../../componants/homeCard/ProductItem.js';

import TopCategories from '../../componants/categorytoprated/topCategories.js';


function TopRated() {
   

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
                    <Appbar />

                    <TopCategories />
                </div>
            </div>


        </>

    );
}









export default TopRated;
