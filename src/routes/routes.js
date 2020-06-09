import React, { useState } from 'react';
import SignUp from '../componants/auth/signUp';
import SignIn from '../componants/auth/signIn';
import HomePage from '../screens/home/homePage'
import MyAdsPage from '../screens/myAds/myAds'
import TopRatedPage from '../screens/toprRated/topRated'
import PostsPage from '../screens/postshistory/postHistory'



import PropTypes from "prop-types";
import { Route, Redirect,  Switch  } from "react-router-dom";
import PrivateRoute from './privateRoute'
import PostDetails from '../screens/postDetails/postDetails';

export default function Routes(props) {
    const [logged, isLogged] = useState(true);
    console.log(logged);
  return (

    <Switch>
      <Route path="/login" >
        <SignIn loggedIn={() => isLogged(true)}/>
      </Route>
      <Route path="/register">
        <SignUp loggedIn={() => isLogged(true)}/>
      </Route>
      <Route path="/home">
        <HomePage />
      </Route> 
      <PrivateRoute path="/ads" isLogged={logged}>
        <MyAdsPage />
      </PrivateRoute> 
      <PrivateRoute path="/topRated" isLogged={logged}>
        <TopRatedPage />
      </PrivateRoute> 
      <PrivateRoute path="/posts" isLogged={logged}>
        <PostsPage />
      </PrivateRoute> 
      <Route><PostDetails/></Route>
    </Switch>


   


  );
}
