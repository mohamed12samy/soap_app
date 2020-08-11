import React, { useState, useEffect } from 'react';
import './menu.css';
import Arrow from '../../assets/images/svg/arrow'



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
      console.log(JSON.stringify(response)+"*-*-+-+-");
      setCat(response);
    })
    .catch(err => {
      console.log(err, "ERROR");
    });
}
function Menu(props) {
    const [categories, setCat] = useState([]);
    const [nName, selecteMenu] = useState("category");
    const [displayMenu, handleMenuAppearance] = useState(false);
    useEffect(() => {
        getCategories(setCat);           
      },[]);

    return (

        <div className="menu">
            <div className={displayMenu ? 'menu_header_open' : "menu_header"}
                onClick={() => handleMenuAppearance(!displayMenu)}
            >
                <span className="menu_select">{nName}</span>               {/* selectedIndex === -1 ? "category": items[selectedIndex].name */}
                <div className="arrow"
                    style={{
                        transform: displayMenu ? "rotate(180deg)" : "rotate(0deg)",
                        right: props.right,

                    }}
                ><Arrow /></div>
            </div>
            <div className="menu_items" style={{ display: displayMenu ? "block" : "none" }}>
                <ul className="menu_list">
                    {categories.map((item, index) => (
                        <li key={index}
                            onClick={() => {
                                selecteMenu(item.categoryName);
                                handleMenuAppearance(!displayMenu);
                                props.menuSelection(item.id);
                            }}>
                            <span>{item.categoryName}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Menu;