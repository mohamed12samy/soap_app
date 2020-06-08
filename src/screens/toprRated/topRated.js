import React, { useState } from 'react';

import '../home/homePageStyle.css';
import SideMenu from '../../componants/sideMenu2/sideMenu2';

import Appbar from '../../componants/Appbar/Appbar.js';
import userimg from '../../assets/images/user.jpg';
import ProductItem from '../../componants/homeCard/ProductItem.js';

import cammug from '../../assets/images/cammug.jpg';
import watch from '../../assets/images/watch1.jpg';
import labtop from '../../assets/images/labtop.jpg';
import drown from '../../assets/images/drown.jpg';
import Categories from '../../componants/categoryButtons/categoryButtons.js'
var recommendationData = [
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

];


function TopRated() {
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


    return (
        <>
            <div className="App">
                <div style={{
                    width: '21.5vw',
                    height: '100%'
                }}>
                    <SideMenu currentPage="TopRated"/>
                </div>
                <div style={{
                    width: '78.5vw',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Appbar />

                    <Categories />
                </div>
            </div>


        </>

    );
}









export default TopRated;