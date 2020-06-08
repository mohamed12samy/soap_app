import React, { useState } from 'react';


import SideMenu from '../../componants/sideMenu2/sideMenu2';

import Appbar from '../../componants/Appbar/Appbar.js';
import angels from '../../assets/images/user.jpg';


import PostCard from '../../componants/postCard/postcard';

function PostDetails(props) {
    var posts = {
        title: "Rolex Watch",
        description: "Lorem Ipsum is simply dummy text of the printing ",
        fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        rate: 3.5,
        likes: 31,
        dislikes: 12,
        platformLogo: "facebook",
        date: "22 sep 2019 10:45pm",
        image: angels,
        totalComments: 311,
        fakeComments: 21,
        realComments: 289,
        comments: [
            {
                commentMessege: "this is amazing , wow",
                numberOfRater: 12,
                classRate: 5
            },
            {
                commentMessege: "this is poor , yuki",
                numberOfRater: 32,
                classRate: 2
            },
            {
                commentMessege: "this is bullshit , don't buy it",
                numberOfRater: 5,
                classRate: 1
            },
            {
                commentMessege: "this is very good product",
                numberOfRater: 12,
                classRate: 4
            },
            {
                commentMessege: "it's normal item , there is more amazing product is other stocks.",
                numberOfRater: 12,
                classRate: 3
            }]
    };

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
                    <Appbar />
                    <div
                        style={{
                            width: '90%',
                            alignItems: 'center',
                            margin: 'auto',
                            marginTop:'2vh'
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
                                dislikes={posts.dislikes}
                                likes={posts.likes}
                                image={posts.image}
                                fullDescription={posts.fullDescription}
                                rate={posts.rate}
                                title={posts.title}
                            />
                        </div>
                        <div
                            style={{
                                width: '92%',
                                height: '8vh',
                                display: 'flex',
                                margin:'auto',
                                flexDirection: 'row',
                                justifyContent: "space-between",
                               
                            }}
                        >
                            <span className="commentsText">
                                Total&nbsp;Comments:&nbsp;{posts.totalComments}

                            </span>

                            <span className="commentsText">
                            Real&nbsp;Comments:&nbsp;{posts.realComments}
                            </span>

                            <span className="commentsText">
                            Fake&nbsp;Comments:&nbsp;{posts.fakeComments}
                            </span>

                        </div>

                    </div>


                </div>
            </div>

        </>

    );
}









export default PostDetails;
