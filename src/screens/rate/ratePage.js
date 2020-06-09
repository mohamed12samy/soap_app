import React, { useState } from 'react';

import '../home/homePageStyle.css';
import SideMenu from '../../componants/sideMenu2/sideMenu2';
import Appbar from '../../componants/Appbar/Appbar.js';
import Rate from '../../componants/rate/rate.js'



function RatePage(props) {
 
    return (
        <>
            <div className="App">
                <div style={{
                    width: '21.5vw',
                    height: '100%'
                }}>
                    <SideMenu currentPage={"Rate"}  isLogged={props.logOut}/>
                </div>
                <div style={{
                    width: '78.5vw',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Appbar flag="hide"/>


                    <div class="RecommdationSection">

                        <Rate />

                    </div>
                </div>
            </div>
        </>
    );
}










export default RatePage;
