import { Routes, Route } from "react-router-dom";
import { Users } from "../screens/dashboard/Users";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/dashboard/users" element={<Users />} />
    </Routes>
  );
}
