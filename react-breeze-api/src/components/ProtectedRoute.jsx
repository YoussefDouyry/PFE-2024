// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthcontext from '../context/Authcontext';

const ProtectedRoute = ({ element }) => {
  const { user } = useAuthcontext();

  return user ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
