import React from 'react';
import Logo from './assets/images/svg/logo';
import './App.css';
import HistoryCard from './componants/histortCard/historyCard.js'
import userimg from './assets/images/user.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <HistoryCard
          name={"Mohamed Samy"}
          date={"22 sep 2019 10:45pm"}
          image={userimg}
          title={"Watch"}
          description={"rolecs watch"}
        />
      </header>
    </div>
  );
}

export default App;
