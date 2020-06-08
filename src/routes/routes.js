import React from "react";

import SignUp from '../componants/auth/signUp.js';
import SignIn from '../componants/auth/signIn.js';
import HomePage from '../screens/home/homePage'

import PropTypes from "prop-types";
import { Route, Redirect,  Switch  } from "react-router-dom";
import PrivateRoute from './privateRoute'

export default function Routes() {
  return (

    <Switch>
      <Route exact path="/login" >
        <SignIn />
      </Route>
      <Route path="/register">
        <SignUp />
      </Route>
      <PrivateRoute path="/home">
        <HomePage />
      </PrivateRoute> 
      <Route><HomePage/></Route>
    </Switch>


   


  );
}
