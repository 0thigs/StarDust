import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function PrivateRoute({ routeType }) {
  const { verifysession } = useAuth();
  const loggedUser = JSON.parse(localStorage.getItem('logged_user'));

  async function verifySection() {
    try {
      await verifysession();
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    verifySection();
  }, []);

  if (!loggedUser) {
    return <Navigate to={'/login'} />;
  }

  const isAllowed = routeType === 'admin' ? loggedUser.isAdmin : !loggedUser.isAdmin;

  return isAllowed ? <Outlet /> : <Navigate to={'/error'} />;
}
