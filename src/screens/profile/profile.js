import React, { useState, useEffect, useContext } from 'react';

import '../home/homePageStyle.css';
import SideMenu from '../../componants/sideMenu2/sideMenu2';
import Appbar from '../../componants/Appbar/Appbar.js';
import Profile from '../../componants/profile/profile'
import {UserContext} from '../../user_context';



function ProfilePage(props) {
 

    //const {user, setUser} = useContext(UserContext);
    const user = JSON.parse(localStorage.getItem('user'));
    
    console.log(
        JSON.stringify(
        user)+"0000000" + user.userName);


    return (
        <>
            <div className="App">
                <div style={{
                    width: '21.5vw',
                    height: '100%'
                }}>
                    <SideMenu currentPage={''}  isLogged={props.logOut}/>
                </div>
                <div style={{
                    width: '78.5vw',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Appbar username = {user.userName} flag="hide"/>


                    <div class="RecommdationSection">

                        <Profile user = { user}/>

                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfilePage;
