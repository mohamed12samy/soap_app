
import React, { useState, useEffect } from 'react';


import CatButton from '../catButton/catButton'
import cammug from '../../assets/images/cammug.jpg';
import watch from '../../assets/images/watch1.jpg';
import labtop from '../../assets/images/labtop.jpg';
import drown from '../../assets/images/drown.jpg';
import ProductItem from '../../componants/homeCard/ProductItem.js';

const categoriesData = [
  {
    id: 1,
    name: "Games",
  },
  {
    id: 2,
    name: "Movies",
  },
  {
    id: 3,
    name: "Products",
  },
  {
    id: 4,
    name: "Others",
  }
];


function CatItems({data}) {
  console.log(data, "asasas");
  if (data !== null) {
    const cards = data.map((item, index) =>
      <li> <div style={{ marginTop: '25px' }}>
        <ProductItem
          category={true}
          description={item.postContent}
          title={item.postTitle}
          likes={item.NumberOfLikes}
          dislikes={item.NumberOfDislikes}
          image={item.photoUrl}
        />
      </div>
      </li>
    )
    return <ul className="categoryListContainer">{cards}</ul>
  }
  
}

function getCatPosts(activeLink , setData){
  fetch(`/API/showPostsByCatID/${activeLink}/`, {
    "method": "GET",
  })
    .then(function (response) {
      console.log(response.status, "*-*-*")
      if (response.ok) {
        return response.json();
      } else {
        console.log("no posts");
        throw new Error('Something went wrong ...');
      }
    }
    )
    .then(response => {
      console.log(response, "cat res" , activeLink);
      setData(response);
    })
    .catch(err => {
      console.log(err, "ERROR");
    });
}

export default function Categories() {
  const [activeLink, setacive] = useState(1);
  const [categories_posts, setData] = useState(
   [
      {
        "id": 1,
        "userID": 1,
        "categoryID": 1,
        "url": "https://www.google.com/?hl=ar",
        "postTitle": "This is Google people!.",
        "postContent": "red.",
        "photoUrl": "URL"
      },
      {
        "id": 2,
        "userID": 1,
        "categoryID": 1,
        "url": "https://www.google.com/?hl=ar",
        "postTitle": "This is Google people!.",
        "postContent": "red.",
        "photoUrl": "URL"
      },
    ]
  );

  useEffect(() => {
    getCatPosts(activeLink, setData);
  },[]);

  const listItems = categoriesData.map((item, index) =>
    <li >
      <a onClick={() => { setacive(item.id); getCatPosts(item.id, setData) }}>
        <CatButton text={item.name} selected={item.id === activeLink ? item.id : null} />

      </a>

    </li>);



  return (
    <div style={{ marginLeft: '2.342606149341142vw' }}>

      <ul className='ButtonsList'>{listItems}</ul>

      <div style={{ marginLeft: '5.258418740849195vw', marginBottom: '4.8vh' }}>
        <CatItems data={categories_posts} />
      </div>
    </div>
  );

}