import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar/Sidebar.js';
import Appbar from './Appbar/Appbar.js';

function App() {
  return (
    <React.Fragment>
      <Appbar/>
        <Sidebar/>

    </React.Fragment>
  );
}

export default App;
