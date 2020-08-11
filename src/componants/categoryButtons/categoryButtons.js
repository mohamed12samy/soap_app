
import React, { useState, useEffect } from 'react';
import { Link, Redirect} from "react-router-dom";


import CatButton from '../catButton/catButton'

import ProductItem from '../../componants/homeCard/ProductItem.js';



function CatItems({data}) {
  console.log(data, "asasas");
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

function getCategories(setCat){
  fetch(`/API/catList/`, {
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
      
      setCat(response);
    })
    .catch(err => {
      console.log(err, "ERROR");
    });
}

export default function Categories() {
  const [activeLink, setacive] = useState(1);
  const [categories, setCat] = useState([]);
  const [categories_posts, setData] = useState(
   []
  );

  useEffect(() => {
    getCategories(setCat);
    
      getCatPosts(activeLink, setData);
       
  },[]);

  const listItems = categories.map((item, index) =>
    <li >
      <a onClick={() => { setacive(item.id); getCatPosts(item.id, setData) }}>
        <CatButton text={item.categoryName} selected={item.id === activeLink ? item.id : null} />

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