import React from 'react';
import './rate.css';
import Menu from '../menu_category/menu'

export default function rate (props){

    return(
        <div className="rate_card">
            <div className="rate_content">
                <input className="post_rate" type="text" placeholder="post link..."
                    name="postLink"
                    
                />
                <input className="post_rate" type="text" placeholder="post title"
                    name="postTitle"
                    
                />
                <div className="menu">
                        <Menu right="67%"/>
                    </div>
                    <input type="submit" className="submit_rate" value="Submit" />

            </div>
        </div>
    );
}
