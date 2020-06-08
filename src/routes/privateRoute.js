import React from "react";
import {BrowserRouter as Router, Switch,  Route, Link, Redirect, useHistory, useLocation } from "react-router-dom";

export default function PrivateRoute({ children, ...rest }) {
    const isSigned = false;
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isSigned ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
}