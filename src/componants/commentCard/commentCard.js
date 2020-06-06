import React, { useState } from 'react';
import './commentCardStyle.css';
import PropTypes from 'prop-types';
import Star from "../../assets/images/svg/star";

CommentCard.propTypes = {
    comment: PropTypes.string,
    classRate: PropTypes.number, //instanceOf(Date),
    totalRate: PropTypes.string,
    colord: PropTypes.string

};


function CommentCard(props) {

    return (
        <>
            <div className={"commentCradContainer"} style={{
                borderLeftColor: props.colord, borderColor: props.colord

            }}>
                <div className="CommentRateNuberContainer">
                    <div style={{ position: 'relative',marginTop:'2.4vh' }}>
                        <Star />
                        <p className={'commentRate'}>{props.classRate}</p>
                    </div>
                    <p className='commentTotalRateNumber'> {props.totalRate}</p>
                </div>
                <div className="commentMessege">
                    <span style={{width:"100%"}}>{props.comment}</span>
                </div>

            </div>
        </>
    );


}

export default CommentCard;
