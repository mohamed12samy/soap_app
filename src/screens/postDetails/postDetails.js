import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../user_context';

import SideMenu from '../../componants/sideMenu2/sideMenu2';

import Appbar from '../../componants/Appbar/Appbar.js';
import angels from '../../assets/images/user.jpg';


import PostCard from '../../componants/postCard/postcard';
import CommentCard from '../../componants/commentCard/commentCard';
import {
    BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, useLocation
} from "react-router-dom";
import UnAvailable from '../../assets/images/unavailable.jpg'

function get_category(id, categories) {
    console.log(id + JSON.stringify(categories) + "daaaaaaaataaaaaaa");
    var i;
    for (i = 0; i < categories.length; i++) {

        if (id == categories[i].id) {
            return categories[i].categoryName;
        }
    }
}

function getCategories(setCat) {
    fetch(`/API/catList/`, {
        "method": "GET",
    })
        .then(function (response) {
            console.log(response.status, "*-*-*")
            if (response.ok) {
                return response.json();
            } else {
                console.log("no posts");
                throw new Error('Something went wrong ...');
            }
        }
        )
        .then(response => {

            setCat(response);
            console.log(JSON.stringify(response) + "*-*-+-+-");
        })
        .catch(err => {
            console.log(err, "ERROR");
        });
}
function get_logo(url) {
    var logo = "";
    logo = url.includes("youtube") ? "youtube" :
        url.includes("facebook") ? "facebook" :
            url.includes("instagram") ? "instagram" :
                url.includes("twitter") ? "twitter" : "linkedin";

    return logo;
}
function PostDetails(props) {

    var post = {
        /*"id": 23,
        "url": "https://www.youtube.com/watch?v=s29fcv5E52Y",
        "postTitle": "youtydgkubj",
        "postContent": "SAINT MOTEL - A Good Song Never Dies (Official Audio)",
        "photoUrl": null,
        "rate": "3.34",
        "numberOfComments": 100,
        "numberOfRealComments": 94,
        "numberOf_5_StarsComments": 38,
        "numberOf_4_StarsComments": 12,
        "numberOf_3_StarsComments": 14,
        "numberOf_2_StarsComments": 4,
        "numberOf_1_StarsComments": 26,
        "Comment_5_StarsSample": "holy shit beautiful",
        "Comment_4_StarsSample": "song seems combined different melodies vibes multiple eras music yet still seem original af somewhat punk halloween party phenomenal",
        "Comment_3_StarsSample": "kind catchy song play movies cheesy action scenes",
        "Comment_2_StarsSample": "fit vibes playlist not care",
        "Comment_1_StarsSample": " total disrespect right",
        "NumberOfLikes":3,
        "NumberOfDislikes": 1,
        "userID": 1,
        "categoryID": 1*/
    };

    //console.log(JSON.stringify(props)+" propsssssssssssssssssss")
    post = props.location.state.postData ?? post;



    //post = props.location.state.postData;
    //console.log(posts.comments)
    const user = JSON.parse(localStorage.getItem('user'));
    const [categories, setCat] = useState([]);



    useEffect(() => {
        getCategories(setCat);
        console.log(categories + "2000000000000")
    }, [])

    return (
        <>
            <div className="App">
                <div style={{
                    width: '21.5vw',
                    height: '100%'
                }}>
                    <SideMenu />
                </div>
                <div style={{
                    width: '78.5vw',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                    <Appbar username={user.userName} />
                    <div
                        style={{
                            width: '90%',
                            alignItems: 'center',
                            margin: 'auto',
                            marginTop: '2vh'
                        }}
                    >
                        <div
                            style={{
                                width: '93.5%',
                                // alignItems: 'center',
                                margin: 'auto',

                            }}
                        >
                            <PostCard
                                dislikes={post.NumberOfDislikes}
                                likes={post.NumberOfLikes}
                                image={post.photoUrl !== null ? post.photoUrl : UnAvailable}
                                fullDescription={post.postContent}
                                rate={post.rate}
                                title={post.postTitle}
                                category={get_category(post.categoryID, categories)}
                                platform={get_logo(post.url)}

                                post_id={post.id}

                                flag = "post"

                            />
                        </div>
                        <div
                            style={{
                                width: '92%',
                                height: '8vh',
                                display: 'flex',
                                margin: 'auto',
                                flexDirection: 'row',
                                justifyContent: "space-between",

                            }}
                        >
                            <span className="commentsText">
                                Total&nbsp;Comments:&nbsp;{post.numberOfComments}

                            </span>

                            <span className="commentsText">
                                Real&nbsp;Comments:&nbsp;{post.numberOfRealComments}
                            </span>

                            <span className="commentsText">
                                Fake&nbsp;Comments:&nbsp;{post.numberOfComments - post.numberOfRealComments}
                            </span>

                        </div>

                        <div style={{

                            height: 'fit-content',
                            width: '100%',


                        }} >

                            <ul style={{
                                width: '100%',
                                // margin: 'auto',
                                listStyleType: 'none',
                                display: 'flex',
                                flexWrap: 'wrap',
                                paddingLeft: '0px',
                                paddingLeft: '1.4641288433382138vw',
                                alignItems: 'center',
                                margin: '0px',
                                marginLeft: '1.4vw',

                            }}>
                                <li style={{
                                    listStyle: 'none',
                                    flexBasis: '50%', marginTop: '2vh'
                                }}>
                                    <CommentCard
                                        classRate={5}
                                        comment={post.Comment_5_StarsSample}
                                        totalRate={post.numberOf_5_StarsComments}
                                    />
                                </li>
                                <li style={{
                                    listStyle: 'none',
                                    flexBasis: '50%', marginTop: '2vh'
                                }}>
                                    <CommentCard
                                        classRate={4}
                                        comment={post.Comment_4_StarsSample}
                                        totalRate={post.numberOf_4_StarsComments}
                                    />
                                </li>
                                <li style={{
                                    listStyle: 'none',
                                    flexBasis: '50%', marginTop: '2vh'
                                }}>
                                    <CommentCard
                                        classRate={3}
                                        comment={post.Comment_3_StarsSample}
                                        totalRate={post.numberOf_3_StarsComments}
                                    />
                                </li>
                                <li style={{
                                    listStyle: 'none',
                                    flexBasis: '50%', marginTop: '2vh'
                                }}>
                                    <CommentCard
                                        classRate={2}
                                        comment={post.Comment_2_StarsSample}
                                        totalRate={post.numberOf_2_StarsComments}
                                    />
                                </li>
                                <li style={{
                                    listStyle: 'none',
                                    flexBasis: '50%', marginTop: '2vh'
                                }}>
                                    <CommentCard
                                        classRate={1}
                                        comment={post.Comment_1_StarsSample}
                                        totalRate={post.numberOf_1_StarsComments}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}







export default PostDetails;
