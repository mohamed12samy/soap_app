import React, { useState } from 'react';
import './historyCardStyle.css';
import PropTypes from 'prop-types';
import DeleteIcon from "../../assets/images/svg/delete";
import PostCard from '../postCard/postcard';
import lamp from '../../assets/images/lamp.jpg'
HistoryCard.propTypes = {

    name: PropTypes.string,
    date: PropTypes.string, //instanceOf(Date),
    title: PropTypes.string,
    description: PropTypes.string,
    logo: PropTypes.number,
    image: PropTypes.string,

};


function HistoryCard(props) {
    const [toggle, show] = useState(0);
    return (
        <div style={{marginBottom:'20px'}}>
            <div className="historyCardContainer"
                style={!toggle ? { transition: 'all 0.5s' } :
                    {
                        borderBottomRightRadius: '0px',
                        borderBottomLeftRadius: '0px',
                        transition: 'all 0.5s'
                    }}>
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
                    <div className={toggle ? "historyViewButtonActive" : "historyViewButton"}>
                        <p className="viewMore"> view{toggle ? " less" : " more"} </p>
                    </div>
                </a>
                <div className="historyDeleteIcon">
                    <a href="##" onClick={() => { }}>
                        <DeleteIcon />
                    </a>
                </div>


            </div >
            <div>{toggle===true && <PostCard
                style={{marginBottom:"50px"}}
                likes={23}
                dislikes={2}
                rate={4.4}
                image={lamp}
                fullDescription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}

            />}</div>
        </div>
    );
}

export default HistoryCard;
