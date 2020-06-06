
import React, { useState } from 'react';
import Logo from '../../assets/images/svg/logo';
import './sideMenuStyle.css';


import HomeIcon from '../../assets/images/svg/HomeIcon';
import RateIcon from '../../assets/images/svg/RateIcon';
import PostIcon from '../../assets/images/svg/PostIcon';
import AdsIcon from '../../assets/images/svg/AdsIcon';
import TopRatedIcon from '../../assets/images/svg/TopRatedIcon';

// import Logo from './assets/images/svg/logo.js'

import NavigationButton from '../navigationButton/navigationButton.js';
import Logout from '../../assets/images/svg/LogOutIcon'

function SideMenu2() {
  const [selected, setSelected] = useState("Home")

  return (
    <div className="slideMenu2">
      <div class="slideMenu2Logo"><Logo /></div>
      <a onClick={() => { setSelected("Home") }}>
        <NavigationButton text={"Home"} fill={selected === "Home" ? "#247189" : ""} >
          <HomeIcon fill={selected === "Home" ? "#247189" : ""} />
        </NavigationButton>
      </a>



      <a onClick={() => { setSelected("Postes") }}>
        <NavigationButton text={"Postes"} fill={selected === "Postes" ? "#247189" : ""} >
          <PostIcon fill={selected === "Postes" ? "#247189" : ""} />
        </NavigationButton>
      </a>

      <a onClick={() => { setSelected("Ads") }}>
        <NavigationButton text={"Ads"} fill={selected === "Ads" ? "#247189" : ""} >
          <AdsIcon fill={selected === "Ads" ? "#247189" : ""} />
        </NavigationButton>
      </a>

      <a onClick={() => { setSelected("Rate") }}>
        <NavigationButton text={"Rate"} fill={selected === "Rate" ? "#247189" : ""} >
          <RateIcon fill={selected === "Rate" ? "#247189" : ""} />
        </NavigationButton>
      </a>

      <a onClick={() => { setSelected("TopRated") }}>
        <NavigationButton text={"TopRated"} fill={selected === "TopRated" ? "#247189" : ""} >
          <TopRatedIcon fill={selected === "TopRated" ? "#247189" : ""} />
        </NavigationButton>
      </a>

      <a style={
        {
          position: 'absolute',
          top: '85vh',
          left: '5vw',
          cursor: 'pointer'
        }
      }>
        <Logout />

      </a>
    </div>
  );
}

export default SideMenu2