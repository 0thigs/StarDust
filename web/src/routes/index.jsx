import { BrowserRouter } from "react-router-dom";
import { AdminRoutes } from "./admin.routes";
import { AppRoutes } from "./app.routes";

export function Routes() {
  return (
    <BrowserRouter>
      <AdminRoutes />
      <AppRoutes />
    </BrowserRouter>
  );
}
