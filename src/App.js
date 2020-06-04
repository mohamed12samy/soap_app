import React from 'react';
import Logo from './assets/images/svg/logo';
import './App.css';
import userimg from './assets/images/user.jpg'
import PostCard from './componants/postCard/postcard.js'
import CommentCard from './componants/commentCard/commentCard.js';

function App() {
  const commentsData = [
    {
      comment: "componants commentCard commentCard.js. ",
      classRate: 5,
      totalRate: 43
    },
    {
      comment: "componants commentCard commentCard.js. ",
      classRate: 4,
      totalRate: 22
    }, {
      comment: "componants commentCard commentCard.js. ",
      classRate: 3,
      totalRate: 0
    }, {
      comment: "componants commentCard commentCard.js. ",
      classRate: 2,
      totalRate: 8
    }, {
      comment: "componants commentCard commentCard.js. ",
      classRate: 1,
      totalRate: 15
    },
  ]

  return (
    <div className="App">


      <CommentCard

      colord='#09c'
        comment={commentsData[0].comment}
        classRate={commentsData[0].classRate}
        totalRate={commentsData[0].totalRate}
      />
    </div>
  );
}

export default App;
