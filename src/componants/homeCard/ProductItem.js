import React, { useState } from 'react';
import './ProductItemStyle.css';
import PropTypes from 'prop-types';
import unavailable from "../../assets/images/unavailable.jpg";
import Like from '../../assets/images/svg/like';
import DisLike from '../../assets/images/svg/dislike';
import Showmore from '../../assets/images/svg/showmore';
ProductItem.propTypes = {
    image: PropTypes.string,
    likes: PropTypes.number, //instanceOf(Date),
    dislikes: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    rate: PropTypes.number,
    category: PropTypes.bool
};


function ProductItem(props) {
    console.log(props.image !== null, "image is not null")
    console.log(props.image == null, "image is  null")

    return (
        <>

            <div className={"ProductItemContainer"}  >
                <a onClick={() => { }}>
                    {
                        props.image !== null ?

                            <div className="productImageContainer" style={{
                                backgroundImage: `url(${props.image})`,
                                backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'
                            }}>


                            </div> :


                            <div className="productImageContainer" style={{
                                backgroundImage: `url(${unavailable})`,
                                backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'
                            }}>


                            </div> 
                    }
                </a>
                <div className="productItemdescriptionContainer">
                    <div className="productItemTitle">{props.title}</div>
                    <span className="productDescription"> {props.description} </span>
                </div>

                {!props.category && <div className="postLikesContainer">
                    <div className="postlike" onClick={() => { }} style={{ alignItems: "bottom" }}>

                        <Like fill={"#247189"} />
                        <p className="postLikesNumber">{props.likes}</p>


                    </div>
                    <div className="postlike" onClick={() => { }}>
                        <div style={{ marginTop: '1.3vh' }}>
                            <DisLike fill={"red"} />
                        </div>
                        <p className="postLikesNumber">{props.dislikes}</p>

                    </div>
                </div>}

                {props.category &&
                    <div className="catShowMore">
                        <span style={{ margin: '5px' }}>details</span>
                        <Showmore />

                    </div>}


            </div>

        </>
    );


}

export default ProductItem;
