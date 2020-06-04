import React from 'react';
import Logo from './assets/images/svg/logo';
import './App.css';
import Sidebar from './Sidebar/Sidebar.js';
import Appbar from './Appbar/Appbar.js';

import HistoryCard from './componants/histortCard/historyCard.js'
import userimg from './assets/images/user.jpg'
import PostCard from './componants/postCard/postcard.js'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Logo />
    <Appbar/>
        <Sidebar/>
      <HistoryCard
        name={"Mohamed Samy"}
        date={"22 sep 2019 10:45pm"}
        image={userimg}
        title={"Watch"}
        description={"rolecs watch"}
      />
       <HistoryCard
        name={"Mohamed Samy"}
        date={"22 sep 2019 10:45pm"}
        image={userimg}
        title={"Watch"}
        description={"rolecs watch"}
      />
       <HistoryCard
        name={"Mohamed Samy"}
        date={"22 sep 2019 10:45pm"}
        image={userimg}
        title={"Watch"}
        description={"rolecs watch"}
      />
       <HistoryCard
        name={"Mohamed Samy"}
        date={"22 sep 2019 10:45pm"}
        image={userimg}
        title={"Watch"}
        description={"rolecs watch"}
      />
     
      {/* <PostCard
        likes={23}
        dislikes={2}
        rate={4.4}
        image={lamp}
        fullDescription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
      /> */}
      {/* </header> */}
    </div>
  );
}

export default App;
