import React, { useState } from 'react';
import './historyCardStyle.css';
import PropTypes from 'prop-types';
import DeleteIcon from "../../assets/images/svg/delete";

import PostCard from '../postCard/postcard';
import Kilua from '../../assets/images/Capture.jpg';
import Edit from "../../assets/images/svg/edit";
import EditPopup from '../editPopUpPost/editPost'
import UnAvailable from '../../assets/images/unavailable.jpg'
import Menu from '../menu_category/menu'

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
    const [showPopup, setShow] = useState(false);
    //

    console.log(props.postData.id+"     552525")
    return (
        
        <>
            {deleted === false &&
                <div style={{ marginBottom: '3.2vh' }}>
                    <div className="historyCardContainer">
                       
                        <div className="historyUserInfoContainer">
                            <div className="historyUserImage" 
                            style={{backgroundImage:`url(${Kilua})`,
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
                        <a onClick={() => {setDelet(1);  props.onPreesed()}} style={{marginRight:"1vw"}}>
                                <DeleteIcon />
                            </a>
                            {/* <a onClick= {!showPopup ? () => setShow(!showPopup) : ''}>
                                <Edit />
                               <div style={{ position:"absolute" ,display: showPopup ? "" : "none" }}><Menu menuSelection = {menuCallback}/></div>
                            </a>*/}
                        </div>


                    </div >
                    <div>{toggle === true &&<div className="PostCardAnimation"> <PostCard
                        category={props.category}
                        platform={props.platform}
                        likes={props.likes}
                        dislikes={props.dislikes}
                        rate={props.rate}
                        image={props.postImage !== null  ? props.postImage : UnAvailable}
                        fullDescription={props.fullDescription}
                        post_id = {props.postData.id}
                        flag = "post"

                    /></div>}
                    
                    </div>
                    <div className="popup" style={{ 
                        display: showPopup === false ? "none" : '' }}>
                        {//<EditPopup postData = {props.postData} closePopup={() => setShow(!showPopup)}/>
                        }
                    </div>
                </div>}

                
                {/* */}
        </>
    );


}
export default HistoryCard;
