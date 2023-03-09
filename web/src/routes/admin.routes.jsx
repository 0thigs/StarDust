import { Navigate, Outlet } from 'react-router-dom';

export function AdminRoutes({ user }) {
  if (!user) {
    return <Navigate to={'/login'} />;
  }

  if (user.isAdmin) {
    return <Outlet />;
  }

  return <Navigate to={'/error'} />;
}
