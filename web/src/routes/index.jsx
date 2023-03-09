import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './privateRoute';
import { Home } from '../pages/app/Home';
import { Users } from '../pages/dashboard/Users';
import { SignIn } from '../pages/SignIn';
import { ErrorPage } from '../pages/ErrorPage';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute routeType={'admin'} />}>
          <Route path="/dashboard/users" element={<Users />} />
        </Route>

        <Route element={<PrivateRoute routeType={'app'} />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/login" element={<SignIn />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
