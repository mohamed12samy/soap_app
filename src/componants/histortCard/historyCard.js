import React, { useState } from 'react';
import './historyCardStyle.css';
import PropTypes from 'prop-types';


function DeleteIcon(props) {

    return (
        <svg width={31} height={41} viewBox="0 0 31 41" fill="none" {...props}>
            <path
                d="M2.601 35.702c0 2.445 1.929 4.445 4.286 4.445H24.03c2.357 0 4.286-2 4.286-4.445V9.035H2.6v26.667zM30.46 2.37h-7.5L20.816.147H10.1L7.958 2.369h-7.5v4.444h30V2.37z"
                fill="#FF4141"
            />
        </svg>
    )
};


HistoryCard.propTypes = {
    // You can declare that a prop is a specific JS type. By default, these
    // are all optional.
    name: PropTypes.string,
    data: PropTypes.string, //instanceOf(Date),
    title: PropTypes.string,
    description: PropTypes.string,
    logo: PropTypes.number,
    image: PropTypes.string,

};


function HistoryCard(props) {
    const [toggle, show] = useState(0);
    return (
        <div className="historyCardContainer">
            <div className="historyUserInfoContainer">
                <div className="historyUserImage">
                    <img src={props.image} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                </div>
                <div className="historyUserInfo" >
                    <div className="historyUserName">{props.name}</div>
                    <div className="historyPostDate">{props.date}</div>
                </div>

            </div>

            <div className="historyPostInfo">
                <div className="historyPostDetails"><span style={{ fontWeight: '600' }}>Title:</span> {props.title}</div>
                <div className="historyPostDetails"><span style={{ fontWeight: '600' }}>description:</span> {props.description}</div>
            </div>

            <a href="#" onClick={() => show(!toggle)}>
                <div className={toggle ? "historyViewButton" : "historyViewButtonActive"}>
                    view post
            </div>
            </a>
            <div className="historyDeleteIcon">
                <a href="##" onClick={() => { }}>
                    <DeleteIcon />
                </a>
            </div>

        </div >
    );
}

export default HistoryCard;
