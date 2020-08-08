import React, { useState, useEffect } from 'react';
import SideMenu from '../../componants/sideMenu2/sideMenu2';
import Appbar from '../../componants/Appbar/Appbar.js';
import Categories from '../../componants/categoryButtons/categoryButtons.js'
import { Link } from "react-router-dom";
import ProductItem from '../../componants/homeCard/ProductItem';





function SearchResult(props) {
    return (
        <>
            <div className="App">
                <div style={{
                    width: '21.5vw',
                    height: '100%'
                }}>
                    <SideMenu currentPage={"Home"} isLogged={props.logOut} />
                </div>
                <div style={{
                    width: '78.5vw',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Appbar username={"name"} />




                    <CatItems data = {[{},{},{}]} />


                </div>
            </div>


        </>

    );
}







function CatItems({ data }) {
    console.log(data, "Top rated");
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
    export default SearchResult;
