import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles }) => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.isAdmin ? 'admin' : 'user')) {
    // Redirect user to their own dashboard if not authorized for this route
    return user.isAdmin ? (
      <Navigate to="/admin/dashboard" replace />
    ) : (
      <Navigate to="/products" replace />
    );
  }

  // Authorized, render child routes/components
  return <Outlet />;
};

export default ProtectedRoute;
