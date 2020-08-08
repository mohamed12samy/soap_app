import React from 'react';
import './rate.css';
import Menu from '../menu_category/menu'

let selected_cat;
    
export default class rate extends React.Component{

    menuCallback = (menu_selction) => {
       selected_cat = menu_selction;
        console.log(menu_selction+"  cdcdc");
    }

    render() {
        return (
            <div className="rate_card">
                <div className="rate_content">
                    <input id="postLink" className="post_rate" type="text" placeholder="post link..."
                        name="postLink"

                    />
                    <input id="postTitle" className="post_rate" type="text" placeholder="post title"
                        name="postTitle"

                    />
                    <div className="menu">
                        <Menu right="67%" menuSelection = {this.menuCallback}/>
                    </div>
                    <input type="submit" className="submit_rate" value="Submit" onClick={() => {
                        console.log(document.getElementById("postLink").value + " ghghgh");
                        this.props.postData([document.getElementById("postLink").value, document.getElementById("postTitle").value, selected_cat]);
                    }} />

                </div>
            </div>
        );
    }
}
