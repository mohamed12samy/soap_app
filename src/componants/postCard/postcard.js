import React, { useState } from 'react';
import './postCardStyle.css';
import PropTypes from 'prop-types';

import Like from "../../assets/images/svg/like.js";
import DisLike from "../../assets/images/svg/dislike.js";










PostCard.propTypes = {
    fullDescription: PropTypes.string,
    image: PropTypes.string,
    rate: PropTypes.number,
    likes: PropTypes.number,
    dislikes: PropTypes.number,
    cardStyle: PropTypes.object,


};


function PostCard(props) {

    const [like, setlike] = useState(0);
    const [dislike, setdislike] = useState(0)
    console.log(props.style);
    return (
        < div className="postCardContainer" style={props.cardStyle} >

            <div className="postImageContainer">
                <div className="postCardRate">
                  
        
                        {props.rate}
                  
                </div>
                <div style={{ width: '100%', height: '100%' }}><img src={props.image ? props.image : ''} style={{ width: '100%', height: '100%' }} /></div>
            </div>
            <div className="postFullDescripstion">
                {props.fullDescription}
            </div>
            <div className="postLikesContainer">
                <div className="postlike" onClick={() => { setlike(!like, setdislike(0)) }}>

                    <Like fill={like ? "#247189" : 'gray'} />
                    <p className="postLikesNumber">{like && !dislike ? props.likes + 1 : props.likes}</p>


                </div>
                <div className="postDislike" onClick={() => { setdislike(!dislike, setlike(0)) }}>

                    <div style={{ marginTop: '10px' }}> <DisLike fill={dislike ? "red" : 'gray'} /></div>
                    <p className="postLikesNumber">{dislike && !like ? props.dislikes + 1 : props.dislikes}</p>

                </div>
            </div>

        </div >

    );
}


export default PostCard;