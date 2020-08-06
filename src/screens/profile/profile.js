import React, { useState } from 'react';

import '../home/homePageStyle.css';
import SideMenu from '../../componants/sideMenu2/sideMenu2';
import Appbar from '../../componants/Appbar/Appbar.js';
import Profile from '../../componants/profile/profile'



function ProfilePage(props) {
 
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
                    <Appbar flag="hide"/>


                    <div class="RecommdationSection">

                        <Profile />

                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfilePage;
