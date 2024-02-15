import { selectUserIsLoggedIn } from '../../Redux/auth/AuthSlice.selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  return isLoggedIn ? <Navigate to="/love" replace /> : children;
};

export default RestrictedRoute;
