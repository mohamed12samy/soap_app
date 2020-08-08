import React, { useState } from 'react';
import Logo from './assets/images/svg/logo';
import './App.css';
import userimg from './assets/images/user.jpg';

import HomePage from './screens/home/homePage'
import cammug from './assets/images/cammug.jpg';
import lamp from './assets/images/lamp.jpg';
import watch from './assets/images/watch1.jpg';
import labtop from './assets/images/labtop.jpg';
import drown from './assets/images/drown.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Routes from './routes/routes'




function App() {

  return (
    
    <Router>
      <Routes/>
    </Router>
     
  );
}



export default App;
