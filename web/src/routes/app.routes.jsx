import { Routes, Route } from 'react-router-dom';
import { Home } from '../screens/app/home';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
