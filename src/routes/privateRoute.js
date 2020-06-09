import React from "react";
import {BrowserRouter as Router, Switch,  Route, Link, Redirect, useHistory, useLocation } from "react-router-dom";

export default function PrivateRoute({children,...props}) {
    const isSigned = props.isLogged;
    console.log("proooops",props.isLogged);
    props.isLogged? console.log(true):console.log(false);
    return (
      <Route
        {...props}
        render={({ location }) =>
        props.isLogged ? 
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