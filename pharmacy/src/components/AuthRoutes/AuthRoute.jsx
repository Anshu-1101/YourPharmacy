import React from "react";
import { useQuery } from "react-query";
import { Redirect, Route } from "react-router";

import {verifyUserAction} from '../../actions/Authentication'  

const AuthRoute = props => {
  const {path} = props;
  
  const verifyUser = useQuery("verify-user",verifyUserAction);
  if (!verifyUser.isLoading && verifyUser.isError == false && !verifyUser.data.data.tokenVerified && (path !== '/' 
      && path !== '/signup'
      && path !== '/signin' 
      && path !== "/forgot-password" 
      && path !== '/forgot-password'
      && path !== '/change-forgot-password'
      && path !== '/privacy-policy'
      && path !== '/terms-conditions' ) ) return <Redirect to="/signin" />;
      
  if (!verifyUser.isLoading && verifyUser.isError == false && verifyUser.data.data.tokenVerified && ( path == "/" || path == "/signin" || path == "/signup") ) return <Redirect to="/home" />

  return (
      <>
        {verifyUser.isLoading ?
        null
        :
        <Route {...props} />
        }
      </>)
};

export default AuthRoute;