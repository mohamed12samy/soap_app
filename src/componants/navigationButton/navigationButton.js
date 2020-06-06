


import React,{useState} from 'react';
import './navigationButtonStyle.css'
function NavigationButton(props) {
    return (
        // <a onClick={()=>{setSelected(!selected)}}>

            <div className="slideMenuSelection">
                <div className='slideMeneSelectionIcon'>{props.children}</div>
                <span className={"slideMeneSelectionText"} style={{color:props.fill}} >{props.text}</span>
            </div>



        // </a>
    );
}

export default NavigationButton;
