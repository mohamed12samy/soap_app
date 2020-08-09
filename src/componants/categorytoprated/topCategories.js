
import React, { useState, useEffect } from 'react';

import { Link, Redirect} from "react-router-dom";

import CatButton from '../catButton/catButton'

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
  console.log(data, "Top rated");
  if (data !== null) {
    const cards = data.map((item, index) =>
    <Link to={{pathname:"/postDetails",
    state: { postData: item },
}}><li> <div style={{ marginTop: '25px' }}>
        <ProductItem
          category={true}
          description={item.postContent}
          title={item.postTitle}
          likes={item.NumberOfLikes}
          dislikes={item.NumberOfDislikes}
          image={item.photoUrl}
        />
      </div>
      </li></Link>
    )
    return <ul className="categoryListContainer">{cards}</ul>
  }
  
}

function getCatTopPosts(activeLink , setData){
  fetch(`/API/showTopPostsbyCID/${activeLink}/`, {
    "method": "GET",
  })
    .then(function (response) {
      console.log(response.status, ">>>>>>>>>>")
      if (response.ok) {
        return response.json();
      } else {
        console.log("no posts in top ");
        throw new Error('Something went wrong in top ...');
      }
    }
    )
    .then(response => {
      console.log(response, "cat res top" , activeLink);
      setData(response);
    })
    .catch(err => {
      console.log(err, "ERROR");
    });
}

export default function TopCategories() {
  const [activeLink, setacive] = useState(1);
  const [categories_posts, setData] = useState(
   []
  );

  useEffect(() => {
    getCatTopPosts(activeLink, setData);
  },[]);

  const listItems = categoriesData.map((item, index) =>
    <li >
      <a onClick={() => { setacive(item.id); getCatTopPosts(item.id, setData) }}>
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