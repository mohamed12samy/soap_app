import React, { useState } from 'react';
import SignUp from '../componants/auth/signUp';
import SignIn from '../componants/auth/signIn';
import HomePage from '../screens/home/homePage'
import MyAdsPage from '../screens/myAds/myAds'
import TopRatedPage from '../screens/toprRated/topRated'
import PostsPage from '../screens/postshistory/postHistory'
import RatePage from '../screens/rate/ratePage'
import ProfilePage from '../screens/profile/profile'

import { Route, Redirect,  Switch  } from "react-router-dom";
import PrivateRoute from './privateRoute'
import PostDetails from '../screens/postDetails/postDetails';
import TopRated from '../screens/toprRated/topRated';

export default function Routes(props) {
    const [logged, isLogged] = useState(false);
  return (

    <Switch>
      <Route path="/login" render = {props=> (<SignIn {...props} loggedIn={() => isLogged(true)}/>
        )}/>

      <Route path="/register" render = {props=> (<SignUp {...props} loggedIn={() => isLogged(true)}/>
        )}/>

      <Route path="/home" render = {props=> (<HomePage {...props} logOut={()=> isLogged(false)} />
        )}/>

      <PrivateRoute path="/ads" isLogged={logged} >
        <MyAdsPage/>
      </PrivateRoute>

      <PrivateRoute path="/topRated" isLogged={logged} >
        <TopRated/>
      </PrivateRoute>
      
      <PrivateRoute path="/posts" isLogged={logged}  >
        <PostsPage/>
      </PrivateRoute>

      <PrivateRoute path="/rate" isLogged={logged}  >
        <RatePage/>
      </PrivateRoute>

      <PrivateRoute path="/profile" isLogged={logged}  >
        <ProfilePage/>
      </PrivateRoute>

      <PrivateRoute path="/postDetails" isLogged={logged}  >
        <PostDetails/>
      </PrivateRoute>

      <Route><HomePage logOut={()=> isLogged(false)}/></Route>
    </Switch>


   


  );
}
