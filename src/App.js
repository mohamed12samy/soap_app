import React, { useState } from 'react';
import Logo from './assets/images/svg/logo';
import './App.css';

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
