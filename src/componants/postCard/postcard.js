import React, { useState } from 'react';
import './postCardStyle.css';
import PropTypes from 'prop-types';

import Like from "../../assets/images/svg/like.js";
import DisLike from "../../assets/images/svg/dislike.js";
import Twitter from '../../assets/images/svg/twitter';
import Facebook from '../../assets/images/svg/fb';
import Linkedin from '../../assets/images/svg/linkedin';

PostCard.propTypes = {
    fullDescription: PropTypes.string,
    image: PropTypes.string,
    rate: PropTypes.number,
    likes: PropTypes.number,
    dislikes: PropTypes.number,
    cardStyle: PropTypes.object,
    category: PropTypes.string,
    platform: PropTypes.string,



};


function PostCard(props) {

    const [like, setlike] = useState(0);
    const [dislike, setdislike] = useState(0)
    console.log(props.style);
    return (
        < div className="postCardContainer" style={props.cardStyle} >

            <div className="postImageContainer">
                {/* <div className="postCardRate">

                    <span style={{ textAlign: 'center' }}>
                        {props.rate}
                    </span>
                </div> */}
                <div style={{}}

                    style={{
                        width: '100%', height: '100%', backgroundImage: `url(${props.image})`,
                        backgroundSize: '100% 100%'

                    }}

                >

                    <div style={{
                      width: 'fit-content',
                      height: '6.4vh', backgroundColor: '#414242',
                      top: '4.8vh',
                      position: 'absolute',
                      textAlign: 'center',
                      // justifyContent:'ceneter',
                      // alignItems:'center',
                      fontFamily: 'Cairo-simebold',
                      fontSize: '3.52vh',
                      lineHeight: '6.08vh',
                      borderRadius: '0px 2.4vh 2.4vh 0px',
                      display: 'flex',
                      flexDirection: 'row',
                      padding: '.4vh 1.6vh .4vh 1.6vh',
                      color: '#fff',    

                    }}>

                        <span>{props.category} </span>
                        <div style={{ marginTop: '3px', marginLeft: '5px' }}>
                            {props.platform === "facebook" ? <Facebook /> :
                                props.platform === "twitter" ? <Twitter /> :
                                    props.platform === "linkedin" ? <Linkedin /> : <></>
                            }
                        </div>
                    </div>




                    <div style={{
                        width: 'fit-content',
                        height: '6.4vh', backgroundColor: '#414242',
                        top: '12.8vh',
                        position: 'absolute',
                        textAlign: 'center',
                        // justifyContent:'ceneter',
                        // alignItems:'center',
                        fontFamily: 'Cairo-simebold',
                        fontSize: '3.52vh',
                        lineHeight: '6.08vh',
                        borderRadius: '0px 2.4vh 2.4vh 0px',
                        display: 'flex',
                        flexDirection: 'row',
                        padding: '.4vh 1.6vh .4vh 1.6vh',
                        color: '#fff',

                    }}>

                        <span>{props.rate} </span>
                        
                    </div>

                </div>
            </div>
            <div className="postFullDescripstion">
                {props.fullDescription}
            </div>
            <div className="postLikesContainer">
                <div className="postlike" onClick={() => { setlike(!like, setdislike(0)) }}>

                    <Like fill={like ? "#247189" : 'gray'} />
                    <p className="postLikesNumber">{like && !dislike ? props.likes + 1 : props.likes}</p>


                </div>
                <div className="postlike" onClick={() => { setdislike(!dislike, setlike(0)) }}>
                    <div style={{ marginTop: '1.6vh' }}> <DisLike fill={dislike ? "red" : 'gray'} /></div>
                    <p className="postLikesNumber">{dislike && !like ? props.dislikes + 1 : props.dislikes}</p>

                </div>
            </div>

        </div >

    );
}


export default PostCard;