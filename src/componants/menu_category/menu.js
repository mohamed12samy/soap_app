import React, { useState } from 'react';
import './menu.css';
import Arrow from '../../assets/images/svg/arrow'


function Menu(props){

    const [nName, selecteMenu] = useState("category");
    const [displayMenu, handleMenuAppearance] = useState(false);
    
    const items = [
        {
            name: 'movies'
        },
        {
            name: 'products'
        },
        {
            name: 'games'
        },
        {
            name: 'Accessories'
        },
        {
            name: 'Others'
        }
    ];
    /* selecteMenu=(event,index)=>{
        this.setState({selectedIndex: index,
            displayMenu: false
        });
    } */


    return(

        <div className="menu">
        <div className= {displayMenu?'menu_header_open':"menu_header"}  
            onClick={()=>handleMenuAppearance(!displayMenu)}
        >
            <span className="menu_select">{nName}</span>               {/* selectedIndex === -1 ? "category": items[selectedIndex].name */ }
            <div className="arrow" 
                style={{
                    transform: displayMenu? "rotate(180deg)":"rotate(0deg)",
                    right: props.right,
                    
                }}
            ><Arrow/></div>
        </div>
        <div className="menu_items" style={{display: displayMenu? "block":"none"  }}>
            <ul className="menu_list">
            {items.map((item,index) => (
                <li key={index} 
                    onClick={ ()=>{ selecteMenu(item.name); handleMenuAppearance(!displayMenu);} }>
                    <span>{item.name}</span>    
                </li>
            ))}
            </ul>
        </div>
    </div>
    );
}

export default Menu;