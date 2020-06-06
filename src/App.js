import React, { useState } from 'react';
import Logo from './assets/images/svg/logo';
import './App.css';
import SideMenu from './componants/sideMenu2/sideMenu2';
import Appbar from './componants/Appbar/Appbar.js';

import HistoryCard from './componants/histortCard/historyCard.js'
import userimg from './assets/images/user.jpg';
import CommentCard from './componants/commentCard/commentCard.js'
import PostCard from './componants/postCard/postcard.js'
import ProductItem from './componants/homeCard/ProductItem.js';
//import SignIn from './componants/signIn/signIn.js';
import SignIn from './componants/auth/signUp.js';
import AdsPopUp from './componants/adsPop_up/adsPopUp.js';
import CatButton from './componants/catButton/catButton';


import cammug from './assets/images/cammug.jpg';
import lamp from './assets/images/lamp.jpg';
import watch from './assets/images/watch1.jpg';
import labtop from './assets/images/labtop.jpg';
import drown from './assets/images/drown.jpg';

var recommendationData = [
  {
    title: "drown",
    description: "Black Drown is simply dummy text of the printing ",
    fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rate: 3.5,
    likes: 31,
    dislikes: 12,
    platformLogo: "facebook",
    date: "22 sep 2019 10:45pm",
    image: drown,
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

  },
  {
    title: "Watch",
    description: "Black Drown is simply dummy text of the printing ",
    fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rate: 3.5,
    likes: 31,
    dislikes: 12,
    platformLogo: "facebook",
    date: "22 sep 2019 10:45pm",
    image: watch,
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

  },
  {
    title: "Mug",
    description: "Camera mug is simply dummy text of the printing ",
    fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rate: 3.5,
    likes: 31,
    dislikes: 12,
    platformLogo: "facebook",
    date: "22 sep 2019 10:45pm",
    image: cammug,
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
      },

    ],

  },
  {
    title: "laptop",
    description: "laptop is simply dummy text of the printing ",
    fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rate: 3.5,
    likes: 31,
    dislikes: 12,
    platformLogo: "facebook",
    date: "22 sep 2019 10:45pm",
    image: labtop,
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

  },
  {
    title: "drown",
    description: "Black Drown is simply dummy text of the printing ",
    fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rate: 3.5,
    likes: 31,
    dislikes: 12,
    platformLogo: "facebook",
    date: "22 sep 2019 10:45pm",
    image: drown,
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

  },
  {
    title: "Watch",
    description: "Black Drown is simply dummy text of the printing ",
    fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rate: 3.5,
    likes: 31,
    dislikes: 12,
    platformLogo: "facebook",
    date: "22 sep 2019 10:45pm",
    image: watch,
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

  },
  {
    title: "Mug",
    description: "Camera mug is simply dummy text of the printing ",
    fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rate: 3.5,
    likes: 31,
    dislikes: 12,
    platformLogo: "facebook",
    date: "22 sep 2019 10:45pm",
    image: cammug,
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
      },

    ],

  },
  {
    title: "laptop",
    description: "laptop is simply dummy text of the printing ",
    fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rate: 3.5,
    likes: 31,
    dislikes: 12,
    platformLogo: "facebook",
    date: "22 sep 2019 10:45pm",
    image: labtop,
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

  },
  {
    title: "drown",
    description: "Black Drown is simply dummy text of the printing ",
    fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rate: 3.5,
    likes: 31,
    dislikes: 12,
    platformLogo: "facebook",
    date: "22 sep 2019 10:45pm",
    image: drown,
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

  },
  {
    title: "Watch",
    description: "Black Drown is simply dummy text of the printing ",
    fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rate: 3.5,
    likes: 31,
    dislikes: 12,
    platformLogo: "facebook",
    date: "22 sep 2019 10:45pm",
    image: watch,
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

  },
  {
    title: "Mug",
    description: "Camera mug is simply dummy text of the printing ",
    fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rate: 3.5,
    likes: 31,
    dislikes: 12,
    platformLogo: "facebook",
    date: "22 sep 2019 10:45pm",
    image: cammug,
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
      },

    ],

  },
  {
    title: "laptop",
    description: "laptop is simply dummy text of the printing ",
    fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rate: 3.5,
    likes: 31,
    dislikes: 12,
    platformLogo: "facebook",
    date: "22 sep 2019 10:45pm",
    image: labtop,
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

  },
];


function App() {
  var userData = [
    {
      userInfo: {
        userName: "mohamed samy",
        userImage: userimg,
        email: "",
        posts: [{
          title: "Rolex Watch",
          description: "Lorem Ipsum is simply dummy text of the printing ",
          fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          rate: 3.5,
          likes: 31,
          dislikes: 12,
          platformLogo: "facebook",
          date: "22 sep 2019 10:45pm",
          image: "",
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

        },
        {
          title: "Rolex Watch",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          rate: 3.5,
          likes: 31,
          dislikes: 12,
          platformLogo: "facebook",
          date: "22 sep 2019 10:45pm",
          image: "",
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

  console.log(userData)

  return (
    <>
      <div className="App">
        <div style={{
          width: '21.5vw',
          height: '100%'
        }}>
          <SideMenu /></div>
        <div style={{
          width: '78.5vw',
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Appbar />
          <div class="RecommdationSection">
            <h2 className="recTitle">Recommendation</h2>
            <RecItems />

    {/*<div className="appbar"><Appbar/></div>
    <div className="sidebar">    <Sidebar/></div>*/} 
    //<HistoryCard/>

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
            {/* <CommentCard
              classRate={userData[0].userInfo.posts[0].comments[0].classRate}
              colord={"#51A335"}
              comment={userData[0].userInfo.posts[0].comments[0].commentMessege}
              totalRate={userData[0].userInfo.posts[0].comments[0].numberOfRater}
              
            /> */}
            {/* <HistoryCard
              date={userData[0].userInfo.posts[0].date}
              rate={userData[0].userInfo.posts[0].rate}
              name={userData[0].userInfo.userName}
              title={userData[0].userInfo.posts[0].title}
              image={userData[0].userInfo.userImage}
              likes={userData[0].userInfo.posts[0].likes}
              dislikes={userData[0].userInfo.posts[0].dislikes}
              
            /> */}
            {/* <SignIn /> */}
          </div>
          <div className="CategoriesSection">
            <CategoryList />
          </div>
          <CatItems data={recommendationData} />

        </div>


      </div>

    </>

  );
}


function RecItems() {
  const cards = recommendationData.map((item, index) =>
    <li> <ProductItem
      category={false}
      description={item.description}
      title={item.title}
      likes={item.likes}
      dislikes={item.dislikes}
      image={item.image}
    />
    </li>
  )
  return <ul className="recommendationListContainer">{cards}</ul>;

}


function CatItems(props) {

  const cards = props.data.map((item, index) =>
    <li> <div style={{ marginTop: '25px' }}>
      <ProductItem
        category={true}
        description={item.description}
        title={item.title}
        likes={item.likes}
        dislikes={item.dislikes}
        image={item.image}
      />
    </div>
    </li>
  )
  return <ul className="categoryListContainer">{cards}</ul>;

}


function CategoryList() {
  // const categories = [{text:"Products",selected:1}, {text:"Products",selected:2}, {text:"Products",selected:3}, {text:"Products",selected:4}];
  const [activeLink, setacive] = useState(1)
  const categories = [
    {
      id: 1,
      name: "Movies",

    },
    {
      id: 2,
      name: "Products",

    },
    {
      id: 3,
      name: "Games",

    },
    {
      id: 4,
      name: "Others",

    }
  ];

  const listItems = categories.map((item, index) =>
    <li >
      <a onClick={() => { setacive(item.id) }}>
        <CatButton text={item.name} selected={item.id === activeLink ? item.id : null} />

      </a>

    </li>);

  return <ul style={{
    listStyleType: 'none',
    display: 'flex',
    margin: '0px',
    padding: '0px'
  }}>{listItems}</ul>;
}


export default App;
