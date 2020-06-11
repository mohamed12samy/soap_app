import React, { useState } from 'react';
import './commentCardStyle.css';
import PropTypes from 'prop-types';
import Star from "../../assets/images/svg/star";

CommentCard.propTypes = {
    comment: PropTypes.string,
    classRate: PropTypes.number, //instanceOf(Date),
    totalRate: PropTypes.string,


};


function CommentCard(props) {

    var colord =
        props.classRate === 5 ? "#51A335" :
            props.classRate === 4 ? "#FFE81B" :
                props.classRate === 3 ? "#969696" :
                    props.classRate === 2 ? "#F27011" : "#FF1B1B"
                        
    return (
        <>
            <div className={"commentCradContainer"} style={{
                borderLeftColor: colord, borderColor: colord

            }}>
                <div className="CommentRateNuberContainer">
                    <div style={{ position: 'relative', marginTop: '1.2vh', paddingLeft: '0.5vw' }}>
                        <Star />
                        <p className={'commentRate'}>{props.classRate}</p>
                    </div>
                    <p className='commentTotalRateNumber'> {props.totalRate}</p>
                </div>
                <div className="commentMessege">
                    <span style={{ width: "100%" }}>{props.comment}</span>
                </div>

            </div>
        </>
    );


}

export default CommentCard;
