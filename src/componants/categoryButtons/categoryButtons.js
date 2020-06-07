
import React, { useState } from 'react';


import CatButton from '../catButton/catButton'
import cammug from '../../assets/images/cammug.jpg';
import watch from '../../assets/images/watch1.jpg';
import labtop from '../../assets/images/labtop.jpg';
import drown from '../../assets/images/drown.jpg';
import ProductItem from '../../componants/homeCard/ProductItem.js';

const categoriesData = [
  {
    id: 1,
    name: "All",

    posts: [
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

    ]

  },
  
  {
    id: 2,
    name: "Movies",

    posts: [
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

    ]

  },
  {
    id: 3,
    name: "Products",
    posts: [
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

    ]

  },
  {
    id: 4,
    name: "Games",
    posts: [{
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
  
    },]

  },
  {
    id: 5,
    name: "Others",
    posts: [
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


    ]

  },
  
];


// function CategoryButtons(props) {
//   // const categories = [{text:"Products",selected:1}, {text:"Products",selected:2}, {text:"Products",selected:3}, {text:"Products",selected:4}];
//   ;

//   return
// }


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
  return <ul className="categoryListContainer">{cards}</ul>

}


export default function Categories() {
  const [activeLink, setacive] = useState(1)

  const listItems = categoriesData.map((item, index) =>
    <li >
      <a onClick={() => { setacive(item.id) }}>
        <CatButton text={item.name} selected={item.id === activeLink ? item.id : null} />

      </a>

    </li>);



return (
  <div style={{ marginLeft: '2.342606149341142vw' }}>

    <ul className='ButtonsList'>{listItems}</ul>

    <div style={{ marginLeft: '5.258418740849195vw', marginBottom: '4.8vh' }}>
      <CatItems data={categoriesData[activeLink-1].posts} />
    </div>
  </div>
);

}