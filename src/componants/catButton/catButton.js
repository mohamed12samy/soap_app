



import React, { useState } from 'react';
import './catButtonStyle.css';
import PropTypes from 'prop-types';

CatButton.propTypes = {
    colord: PropTypes.string,
    text: PropTypes.string,
    backgroundColord: PropTypes.string,
    selected: PropTypes.number

};

function CatButton(props) {
    
    // {console.log(props.text,"    ",category)}
    return (

        // <a onClick={() => { setCategory(props.text) }}>
            <div class="catButton" style={props.selected? { color:'white', backgroundColor:'#226F87' } : {}}>

                <span className="catButtonText">{props.text}</span>
            </div>
        
    );
}


export default CatButton;