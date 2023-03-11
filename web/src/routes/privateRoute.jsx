import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function PrivateRoute({ routeType }) {
  const userType = localStorage.getItem('john_petros');
  const isAdmin = userType === 'eb0a191797624dd3a48fa681d3061212';

  if (!userType) return <Navigate to="/error" />;

  if (routeType === 'admin') {
    if (isAdmin) {
      return <Outlet />;
    }
    return <Navigate to="/" />;
  }

  if (routeType === 'app') {
    if (!isAdmin) {
      return <Outlet />;
    }
    return <Navigate to="/admin/dashboard" />;
  }
}
