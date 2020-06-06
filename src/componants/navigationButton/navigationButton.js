


import React, { useState } from 'react';
import './navigationButtonStyle.css';

import PropTypes from 'prop-types';


NavigationButton.propTypes = {
    children: PropTypes.node,
    fill: PropTypes.string,


};

function NavigationButton(props) {
    return (
        // <a onClick={()=>{setSelected(!selected)}}>

        <div className="slideMenuSelection">
            <div className='slideMeneSelectionIcon'>{props.children}</div>
            <span className={"slideMeneSelectionText"} style={{ color: props.fill }} >{props.text}</span>
        </div>



        // </a>
    );
}

export default NavigationButton;
