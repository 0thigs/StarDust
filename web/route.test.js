import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function PrivateRoute({ routeType }) {
  const userType = localStorage.getItem('user_type');
  const isAdmin = userType === 'eb0a191797624dd3a48fa681d3061212';

  if (!userType) return;

  const isAllowed = routeType === 'admin' ? isAdmin : !isAdmin;

  return isAllowed ? <Outlet /> : <Navigate to="/error" />;
}
