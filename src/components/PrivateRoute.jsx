// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ element}) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/logInPage" />;
};

export default PrivateRoute;