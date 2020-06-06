import React, { useState } from 'react';
import './ProductItemStyle.css';
import PropTypes from 'prop-types';
import drown from "../../assets/images/drown.jpg";
import watch from "../../assets/images/watch.jpg";
import Like from '../../assets/images/svg/like';
import DisLike from '../../assets/images/svg/dislike';
CategoryCard.propTypes = {
    image: PropTypes.string,
    likes: PropTypes.number, //instanceOf(Date),
    dislikes: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    rate: PropTypes.number,
    category: PropTypes.bool


};


function CategoryCard(props) {

    return (
        <>
            <a onClick={() => { }}>
                <div className={"CategoryCardContainer"}  >
                    <div className="productImageContainer" style={{ backgroundImage: `url(${props.image})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}>
                        {/* <img src={drown} style={{ width: '100%', height: '100%', borderRadius: '25px 25px 0px 0px' }} /> */}
                        {/* <div className="productItemRate">{props.rate}</div> */}

                    </div>
                    {!props.category && <div className="productItemdescriptionContainer">
                        <div className="productItemTitle">{props.title}</div>
                        <span className="productDescription"> {props.description} </span>
                    </div>}
                    {props.category &&
                        <div>
                        </div>
                    }
                </div>
            </a>
        </>
    );


}

export default CategoryCard;
