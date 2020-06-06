import React, { useState } from 'react';
import Logo from './assets/images/svg/logo';
import './App.css';
import Sidebar from './componants/Sidebar/Sidebar.js';
import Appbar from './componants/Appbar/Appbar.js';

import HistoryCard from './componants/histortCard/historyCard.js'
import userimg from './assets/images/user.jpg';
import SideMenu2 from './componants/sideMenu2/sideMenu2';

import PostCard from './componants/postCard/postcard.js'
import ProductItem from './componants/homeCard/ProductItem.js';
//import SignIn from './componants/signIn/signIn.js';
import SignIn from './componants/auth/signUp.js';



function App() {
  const userData = [
    {
      userInfo: {
        userName: "mohamed samy",
        userImage: userimg,
        email: "",
        posts: [{
          comments: [
            {
              commentMessege: "this is amazing , wow",
              numberOfRater: 12,
              classRate: 5
            },
            {
              commentMessege: "this is poor , yuki",
              numberOfRater: 32,
              classRate: 2
            },
            {
              commentMessege: "this is bullshit , don't buy it",
              numberOfRater: 5,
              classRate: 1
            },
            {
              commentMessege: "this is very good product",
              numberOfRater: 12,
              classRate: 4
            },
            {
              commentMessege: "it's normal item , there is more amazing product is other stocks.",
              numberOfRater: 12,
              classRate: 3
            }
          ],
          title: "Rolex Watch",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          rate: 3.5,
          likes: 31,
          dislikes: 12,
          platformLogo: "facebook",
          date: "22 sep 2019 10:45pm",
          image: "",
        },
        {
          comments: [
            {
              commentMessege: "this is amazing , wow",
              numberOfRater: 12,
              classRate: 5
            },
            {
              commentMessege: "this is poor , yuki",
              numberOfRater: 32,
              classRate: 2
            },
            {
              commentMessege: "this is bullshit , don't buy it",
              numberOfRater: 5,
              classRate: 1
            },
            {
              commentMessege: "this is very good product",
              numberOfRater: 12,
              classRate: 4
            },
            {
              commentMessege: "it's normal item , there is more amazing product is other stocks.",
              numberOfRater: 12,
              classRate: 3
            }
          ],
          title: "Rolex Watch",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          rate: 3.5,
          likes: 31,
          dislikes: 12,
          platformLogo: "facebook",
          date: "22 sep 2019 10:45pm",
          image: "",
        },
        {
          comments: [
            {
              commentMessege: "this is amazing , wow",
              numberOfRater: 12,
              classRate: 5
            },
            {
              commentMessege: "this is poor , yuki",
              numberOfRater: 32,
              classRate: 2
            },
            {
              commentMessege: "this is bullshit , don't buy it",
              numberOfRater: 5,
              classRate: 1
            },
            {
              commentMessege: "this is very good product",
              numberOfRater: 12,
              classRate: 4
            },
            {
              commentMessege: "it's normal item , there is more amazing product is other stocks.",
              numberOfRater: 12,
              classRate: 3
            }
          ],
          title: "Rolex Watch",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          rate: 3.5,
          likes: 31,
          dislikes: 12,
          platformLogo: "facebook",
          date: "22 sep 2019 10:45pm",
          image: "",
        },
        {
          comments: [
            {
              commentMessege: "this is amazing , wow",
              numberOfRater: 12,
              classRate: 5
            },
            {
              commentMessege: "this is poor , yuki",
              numberOfRater: 32,
              classRate: 2
            },
            {
              commentMessege: "this is bullshit , don't buy it",
              numberOfRater: 5,
              classRate: 1
            },
            {
              commentMessege: "this is very good product",
              numberOfRater: 12,
              classRate: 4
            },
            {
              commentMessege: "it's normal item , there is more amazing product is other stocks.",
              numberOfRater: 12,
              classRate: 3
            }
          ],
          title: "Rolex Watch",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          rate: 3.5,
          likes: 31,
          dislikes: 12,
          platformLogo: "facebook",
          date: "22 sep 2019 10:45pm",
          image: "",
        },



        ]

      }
    }

  ]



  return (

      <div className="App">

    {/*<div className="appbar"><Appbar/></div>
    <div className="sidebar">    <Sidebar/></div>*/} 
  <SignIn/>
 {/* <div className="page_content">
      <ProductItem
       rate={3.3} 
       likes={32}
       dislikes={12}
      title={"Watch"}
      description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry"} />
      <ProductItem
       rate={3.3} 
       likes={32}
       dislikes={12}
      title={"Watch"}
      description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry"} />
      <ProductItem
       rate={3.3} 
       likes={32}
       dislikes={12}
      title={"Watch"}
      description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry"} />
    </div>  */}
    </div>
  );
}

export default App;
