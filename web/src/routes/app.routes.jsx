import { Routes, Route } from 'react-router-dom';

export function AppRoutes() {
  if (!user) {
    return <Navigate to={'/login'} />;
  }

  if (user.isAdmin) {
    return <Outlet />;
  }

  return <Navigate to={'/error'} />;
}
