import React, { useState } from 'react';
import './historyCardStyle.css';
import PropTypes from 'prop-types';
import DeleteIcon from "../../assets/images/svg/delete";

import PostCard from '../postCard/postcard';
import lamp from '../../assets/images/user.jpg';



HistoryCard.propTypes = {

    name: PropTypes.string,
    date: PropTypes.string, //instanceOf(Date),
    title: PropTypes.string,
    rate: PropTypes.string,
    userimage: PropTypes.string,
    likes: PropTypes.number,
    dislikes: PropTypes.number,
    postImage:PropTypes.string,
    category:PropTypes.string,
    platform:PropTypes.string,
    onPreesed:PropTypes.func,

};

function delete_item(props){
    props.onPreesed()
}

function HistoryCard(props) {
    const [toggle, show] = useState(0);
    const [deleted, setDelet] = useState(false);
    //

    return (
        <>
            {deleted === false &&
                <div style={{ marginBottom: '3.2vh' }}>
                    <div className="historyCardContainer">
                       
                        <div className="historyUserInfoContainer">
                            <div className="historyUserImage" 
                            style={{backgroundImage:`url(${props.userimage})`,
                            backgroundSize:'100% 100%',
                            
                            }}>
                               
                            </div>
                            <div className="historyUserInfo" >
                                <div className="historyUserName">{props.name}</div>
                                <div className="historyPostDate">{props.date}</div>
                            </div>

                        </div>

                        <div className="historyPostInfo">
                            <div className="historyPostDetails">
                                <span style={{ fontFamily: 'Cairo-simebold' }}>Title: &nbsp; </span>
                                {props.title}
                            </div>
                            <div className="historyPostDetails">
                                <span style={{ fontFamily: 'Cairo-simebold' }}>Rate: &nbsp; </span>
                                {props.rate}
                            </div>
                        </div>

                        <a onClick={() => show(!toggle)}>
                            <div className={toggle ? "historyViewButtonActive" : "historyViewButton"}>
                                <p className="viewMore"> view{toggle ? " less" : " more"} </p>
                            </div>
                        </a>
                        <div className="historyDeleteIcon">
                            <a onClick={() => {setDelet(1);delete_item(props)}}>
                                <DeleteIcon />
                            </a>
                        </div>


                    </div >
                    <div>{toggle === true &&<div className="PostCardAnimation"> <PostCard
                        category={props.category}
                        platform={props.platform}
                        likes={props.likes}
                        dislikes={props.dislikes}
                        rate={props.rate}
                        image={(props.postImage.match(/\.(jpeg|jpg|gif|png)$/) != null)? props.postImage : lamp}
                        fullDescription={props.fullDescription}

                    /></div>}
                    
                    </div>
                </div>}

                
                {/* */}
        </>
    );


}
export default HistoryCard;
