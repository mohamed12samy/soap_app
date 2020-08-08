import React, { useState } from 'react';

import '../home/homePageStyle.css';
import SideMenu from '../../componants/sideMenu2/sideMenu2';
import Appbar from '../../componants/Appbar/Appbar.js';
import Rate from '../../componants/rate/rate.js'
import {
    BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, useLocation
  } from "react-router-dom";


var postDataJson = { url: null, postTitle: null, userID: 1, categoryID: null, }

class RatePage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            post_data: {},
            redirect: false
        };
    }
    postCreate(post_data) {
        postDataJson.url = post_data[0];
        postDataJson.postTitle = post_data[1];
        postDataJson.categoryID = post_data[2];

        fetch(`/API/postCreate/`, {
            "method": "POST",
            "headers": { 'Content-Type': 'application/json', },
            "body": JSON.stringify(postDataJson)

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
                console.log(response, "*****************************post DAta ");
                this.setState({
                    post_data: response,
                    redirect: true,
                });

            })
            .catch(err => {
                console.log(err, "ERROR");
            });

    }

    postDataCallback = (post_data) => {
        console.log(post_data + "  asasasas");
        if (post_data != null) {
            this.postCreate(post_data);
        }
    }
    render() {
        return (
            <>
                <div className="App">
                    <div style={{
                        width: '21.5vw',
                        height: '100%'
                    }}>
                        <SideMenu currentPage={"Rate"} isLogged={this.props.logOut} />
                    </div>
                    <div style={{
                        width: '78.5vw',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <Appbar flag="hide" />


                        <div class="RecommdationSection">

                            <Rate postData={this.postDataCallback} />

                        </div>
                    </div>
                    <> {
                        console.log(this.state.post_data.postTitle+"---****-"),
                        this.state.redirect ? <Redirect to={{
                            pathname: '/postDetails',
                            state: { postData: this.state.post_data}
                        }} /> : ''} </>
                </div>


            </>

        );
    }
}










export default RatePage;
