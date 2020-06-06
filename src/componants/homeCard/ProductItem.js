import React, { useState } from 'react';
import './ProductItemStyle.css';
import PropTypes from 'prop-types';
import drown from "../../assets/images/drown.jpg";
import watch from "../../assets/images/watch.jpg";
import Like from '../../assets/images/svg/like';
import DisLike from '../../assets/images/svg/dislike';
ProductItem.propTypes = {
    image: PropTypes.string,
    likes: PropTypes.number, //instanceOf(Date),
    dislikes: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    rate: PropTypes.number


};


function ProductItem(props) {
   
    return (
        <>
            <a  onClick={() => { }}>
                <div className={"ProductItemContainer"}  >
                    <div className="productImageContainer" style={{ backgroundImage: `url(${drown})`, backgroundRepeat: 'no-repeat', backgroundSize: '290px 200px'}}>
                        {/* <img src={drown} style={{ width: '100%', height: '100%', borderRadius: '25px 25px 0px 0px' }} /> */}
                        {/* <div className="productItemRate">{props.rate}</div> */}
                        
                    </div>
                    <div className="productItemdescriptionContainer">
                        <div className="productItemTitle">{props.title}</div>
                        <span className="productDescription"> {props.description} </span>
                    </div>


                    <div className="postLikesContainer">
                        <div className="postlike" onClick={() => { }}>

                            <Like fill={"#247189"} />
                            <p className="postLikesNumber">{props.likes}</p>


                        </div>
                        <div className="postDislike" onClick={() => { }}>

                            <div style={{ marginTop: '10px' }}> <DisLike fill={"red"} /></div>
                            <p className="postLikesNumber">{props.dislikes}</p>

                        </div>
                    </div>


                </div>
            </a>
        </>
    );


}

export default ProductItem;
