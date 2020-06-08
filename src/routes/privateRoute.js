import React from "react";
import {BrowserRouter as Router, Switch,  Route, Link, Redirect, useHistory, useLocation } from "react-router-dom";

export default function PrivateRoute({ children, ...props }) {
    const isSigned = props.isLogged;
    return (
      <Route
        {...props}
        render={({ location }) =>
          isSigned ? (
            children
          ) : (
              
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location  }
              }}
            />
          )
        }
      />
    );
}