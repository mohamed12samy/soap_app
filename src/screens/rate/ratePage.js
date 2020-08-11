import React, { useState } from 'react';

import '../home/homePageStyle.css';
import SideMenu from '../../componants/sideMenu2/sideMenu2';
import Appbar from '../../componants/Appbar/Appbar.js';
import Rate from '../../componants/rate/rate.js'
import {
    BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, useLocation
} from "react-router-dom";
import { UserContext } from '../../user_context';


var postDataJson = { url: null, postTitle: null, userID: null, categoryID: null, }

class RatePage extends React.Component {

    static contextType = UserContext

    constructor(props) {
        super(props);
        this.state = {
            post_data: {},
            redirect: false,
            user: {},
        };
    }

    componentDidMount() {

        //const { user, setUser } = this.context
        const user = JSON.parse(localStorage.getItem('user'));
        this.setState({
            user: user
        });
    }
    getCookie(name) {
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
    postCreate(post_data) {
        postDataJson.url = post_data[0];
        postDataJson.postTitle = post_data[1];
        postDataJson.categoryID = post_data[2];
        postDataJson.userID = this.state.user.id;

        console.log(JSON.stringify(postDataJson) + "dataaaaaaaaaa");
        fetch(`/API/postCreate/`, {
            "method": "POST",
            "headers": { 'Content-Type': 'application/json', "X-CSRFToken": this.getCookie("csrftoken"), },
            "mode": 'cors',
            "body": JSON.stringify(postDataJson),
            "scopes": ["READ", "WRITE"]

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
                        <Appbar flag="hide" username={this.state.user.userName} />


                        <div class="RecommdationSection">

                            <Rate postData={this.postDataCallback} />

                        </div>
                    </div>
                    <> {
                        console.log(this.state.post_data.postTitle + "---****-"),
                        this.state.redirect ? <Redirect to={{
                            pathname: '/postDetails',
                            state: { postData: this.state.post_data }
                        }} /> : ''} </>
                </div>


            </>

        );
    }
}










export default RatePage;
