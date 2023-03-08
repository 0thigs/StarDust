import { BrowserRouter } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { SignIn } from '../screens/SignIn';
import { AdminRoutes } from './admin.routes';
import { AppRoutes } from './app.routes';

export function Routes() {
  const { loggedUser } = useAuth();
  const isUserLogged = Object.entries(loggedUser).length > 0;
  console.log(isUserLogged);

  return (
    <BrowserRouter>
      {isUserLogged && loggedUser.isAdmin ? (
        <AdminRoutes />
      ) : isUserLogged ? (
        <SignIn />
      ) : (
        <AppRoutes />
      )}
    </BrowserRouter>
  );
}
