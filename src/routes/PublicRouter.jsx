import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Navigate} from "react-router-dom";
import { getToken } from "helpers/auth/auth";

const PublicRoute = ({ user, children }) => {
    if (getToken()) {
        return <Navigate to="/" replace />;
    }
    return children;
  
  };

export default PublicRoute;