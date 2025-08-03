import { Route, Routes } from "react-router";
import { LoginPage } from "../pages/LoginPage";
import { AuthLayout } from "../layout/AuthLayout";

export function AuthRoutes() {
  return (
  <Routes>
    <Route element={<AuthLayout/>}>
      <Route path="login" element={<LoginPage />} />
    </Route>
  </Routes>
  )
}
