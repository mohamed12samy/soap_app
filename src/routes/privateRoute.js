import React, { useState, useEffect, useContext } from 'react';
import {BrowserRouter as Router, Switch,  Route, Link, Redirect, useHistory, useLocation } from "react-router-dom";
import {UserContext} from '../user_context';

export default function PrivateRoute({children,...props}) {
    //const isSigned = props.isLogged;

    const con = useContext(UserContext);


    //console.log("proooops",props.isLogged);
   // props.isLogged? console.log(true):console.log(false);
    return (
      <Route
        {...props}
        render={({ location }) =>
        con.user !== null ? 
          children
            : 
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location  }
              }}
            />
          
        }
      />
    );
}
