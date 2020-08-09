
import Logo from '../../assets/images/svg/logo/SOAP';
import './sideMenuStyle.css';
import React, { useState, useEffect, useContext } from 'react';
import {UserContext} from '../../user_context';

import HomeIcon from '../../assets/images/svg/HomeIcon';
import RateIcon from '../../assets/images/svg/RateIcon';
import PostIcon from '../../assets/images/svg/PostIcon';
import AdsIcon from '../../assets/images/svg/AdsIcon';
import TopRatedIcon from '../../assets/images/svg/TopRatedIcon';

// import Logo from './assets/images/svg/logo.js'

import NavigationButton from '../navigationButton/navigationButton.js';
import Logout from '../../assets/images/svg/LogOutIcon'
import {
  Link, Redirect
} from "react-router-dom";

function SideMenu2(props) {
  const [logOut, loggedOut] = useState(false);
  const con = useContext(UserContext);


  const selected = props.currentPage;
  return (
    <div className="slideMenu2">
      <div class="slideMenu2Logo"><Logo /></div>
      
      <Link to="/home"><a /* onClick={() => { setSelected("Home") }} */>
        <NavigationButton text={"Home"} fill={selected === "Home" ? "#247189" : ""} >
          <HomeIcon fill={selected === "Home" ? "#247189" : ""} />
        </NavigationButton>
      </a></Link>

      <Link to="/posts"><a /* onClick={() => { setSelected("Posts") }} */>
        <NavigationButton text={"Posts"} fill={selected === "Posts" ? "#247189" : ""} >
          <PostIcon fill={selected === "Posts" ? "#247189" : ""} />
        </NavigationButton>
      </a></Link>

      <Link to="/ads"><a /* onClick={() => { setSelected("Ads") }} */>
        <NavigationButton text={"Ads"} fill={selected === "Ads" ? "#247189" : ""} >
          <AdsIcon fill={selected === "Ads" ? "#247189" : ""} />
        </NavigationButton>
      </a></Link>

      <Link to="/rate"><a /* onClick={() => { setSelected("Rate") }} */>
        <NavigationButton text={"Rate"} fill={selected === "Rate" ? "#247189" : ""} >
          <RateIcon fill={selected === "Rate" ? "#247189" : ""} />
        </NavigationButton>
      </a></Link>

      <Link to="/topRated"><a /* onClick={() => { setSelected(props.currentPage) }} */>
        <NavigationButton text={"TopRated"} fill={selected === "TopRated" ? "#247189" : ""} >
          <TopRatedIcon fill={selected === "TopRated" ? "#247189" : ""} />
        </NavigationButton>
      </a></Link>

      <a style={
        {
          position: 'absolute',
          top: '85vh',
          left: '5vw',
          cursor: 'pointer'
        }
      }
      onClick={ ()=>{
        con.setUser(null);
        console.log(con.user.userName + "0000222222");
        loggedOut(true);
      } }
      >
        <Logout />

      </a>

      {logOut === true?  <Redirect to="/login" />:''}
    </div>
  );
}

export default SideMenu2