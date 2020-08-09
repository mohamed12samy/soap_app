import React, { useState, useMemo } from 'react';
import SignUp from '../componants/auth/signUp';
import SignIn from '../componants/auth/signIn';
import HomePage from '../screens/home/homePage'
import MyAdsPage from '../screens/myAds/myAds'
import TopRatedPage from '../screens/toprRated/topRated'
import PostsPage from '../screens/postshistory/postHistory'
import RatePage from '../screens/rate/ratePage'
import ProfilePage from '../screens/profile/profile'

import { Route, Redirect, Switch } from "react-router-dom";
import PrivateRoute from './privateRoute'
import PostDetails from '../screens/postDetails/postDetails';
import TopRated from '../screens/toprRated/topRated';
import SearchResult from '../screens/searchResult/searchReslut';

import { UserContext } from '../user_context';

export default function Routes(props) {

  const [user, setUser] = useState(null);
  const provider = useMemo(() => ({ user, setUser }), [user, setUser]);


  const [logged, isLogged] = useState(false);

  return (
    <UserContext.Provider value={provider}>
      <Switch>


        <Route path="/login" render={props => (<SignIn {...props} loggedIn={() => isLogged(true)} />
        )} />

        <Route path="/register" render={props => (<SignUp {...props} loggedIn={() => isLogged(true)} />
        )} />

        <Route path="/home" render={props => (<HomePage {...props} logOut={() => isLogged(false)} />
        )} />

        <Route path="/postDetails" render={props => (user !== null ? <PostDetails {...props} logOut={() => isLogged(false)} />
          :
          <Redirect to={{ pathname: "/login", }} />)
        } />

        <Route path="/ads" render={props => (user !== null ? <MyAdsPage {...props} logOut={() => isLogged(false)} />
          :
          <Redirect to={{ pathname: "/login", }} />)
        } />

        <Route path="/topRated" render={props => (user !== null ? <TopRated {...props} logOut={() => isLogged(false)} />
          :
          <Redirect to={{ pathname: "/login", }} />)
        } />
        <Route path="/posts" render={props => (user !== null ? <PostsPage {...props} logOut={() => isLogged(false)} />
          :
          <Redirect to={{ pathname: "/login", }} />)
        } />

        <Route path="/rate" render={props => (user !== null ? <RatePage {...props} logOut={() => isLogged(false)} />
          :
          <Redirect to={{ pathname: "/login", }} />)
        } />
        <Route path="/profile" render={props => (user !== null ? <ProfilePage {...props} logOut={() => isLogged(false)} />
          :
          <Redirect to={{ pathname: "/login", }} />)
        } />
        <Route path="/searchResult" render={props => (user !== null ? <SearchResult {...props} logOut={() => isLogged(false)} />
          :
          <Redirect to={{ pathname: "/login", }} />)
        } />
        {/* <PrivateRoute path="/ads" isLogged={logged}>
        <MyAdsPage/>
      </PrivateRoute>

      <PrivateRoute path="/topRated" isLogged={logged}>
        <TopRated/>
      </PrivateRoute>
      
      <PrivateRoute path="/posts" isLogged={logged} >
        <PostsPage/>
      </PrivateRoute>

      <PrivateRoute path="/rate"  isLogged={logged}>
        <RatePage/>
      </PrivateRoute>

      <PrivateRoute path="/profile"  isLogged={logged}>
        <ProfilePage/>
      </PrivateRoute>

      <PrivateRoute path="/postDetails"  isLogged={logged}>
        <PostDetails />
      </PrivateRoute>

       <PrivateRoute path="/SearchResult"  isLogged={logged}>
        <SearchResult />
      </PrivateRoute> */}

        <Route render={props => (<HomePage {...props} logOut={() => isLogged(false)} />
        )} />

      </Switch>

    </UserContext.Provider>



  );
}
