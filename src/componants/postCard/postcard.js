import React, { useState } from 'react';
import './postCardStyle.css';
import PropTypes from 'prop-types';

import Like from "../../assets/images/svg/like.js";
import DisLike from "../../assets/images/svg/dislike.js";
import Twitter from '../../assets/images/svg/twitter';
import Facebook from '../../assets/images/svg/fb';
import Linkedin from '../../assets/images/svg/linkedin';
import Youtube from '../../assets/images/svg/youtube';
import Insta from '../../assets/images/svg/instagram';
import UnAvailable from '../../assets/images/unavailable.jpg'

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

function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
          var cookie =cookies[i];
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}

function like_post(id) {
  fetch(`/API/likePostUpdate/${id}/`, {
    "method": "PUT",
    "headers": { 'Content-Type': 'application/json', "X-CSRFToken": getCookie("csrftoken"), },

  })
    .then(function (response) {
      console.log(response.status, "*-*-*")
      if (response.ok) {
        return response.json();
      } else {

        throw new Error('Something went wrong ...');
      }
    }
    )

    .then(response => {
      console.log(response, "response");
    })
    .catch(err => {
      console.log(err, "ERROR");
    });
}

function dislike_post(id) {
  fetch(`/API/dislikePostUpdate/${id}/`, {
    "method": "PUT",
    "headers": { 'Content-Type': 'application/json', "X-CSRFToken": getCookie("csrftoken"), },

  })
    .then(function (response) {
      console.log(response.status, "*-*-*")
      if (response.ok) {
        return response.json();
      } else {

        throw new Error('Something went wrong ...');
      }
    }
    )

    .then(response => {
      console.log(response, "response");
    })
    .catch(err => {
      console.log(err, "ERROR");
    });
}


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
            width: '100%', height: '100%', backgroundImage: `url(${props.image !== null || props.image !== "" ?  props.image : UnAvailable})`,
            backgroundSize: '100% 100%'

          }}>

{ props.flag === "post" ? 
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
                  props.platform === "linkedin" ? <Linkedin /> :
                    props.platform === "youtube" ? <Youtube /> :
                      props.platform === "instagram" ? <Insta /> :
                        <></>
              }
            </div>
          </div> : ''}

          { props.flag === "post" ? 

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

          </div> : ''}

        </div>
      </div>
      <div className="postFullDescripstion">
        {props.fullDescription}
      </div>
      { props.flag === "post" ? 

      <div className="postLikesContainer">
        <div className="postlike" onClick={() => { setlike(!like, setdislike(0)); like_post(props.post_id) }}>

          <Like fill={like ? "#247189" : 'gray'} />
          <p className="postLikesNumber">{like && !dislike ? props.likes + 1 : props.likes}</p>


        </div>
        <div className="postlike" onClick={() => { setdislike(!dislike, setlike(0)); dislike_post(props.post_id) }}>
          <div style={{ marginTop: '1.6vh' }}> <DisLike fill={dislike ? "red" : 'gray'} /></div>
          <p className="postLikesNumber">{dislike && !like ? props.dislikes + 1 : props.dislikes}</p>

        </div>
      </div>:''}

    </div >

  );
}


export default PostCard;