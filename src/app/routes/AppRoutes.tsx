import { BrowserRouter, Route, Routes } from "react-router";
import { ProductRoutes } from "../../products/routes/ProductRoutes";
import { AuthRoutes } from "../../auth/routes/AuthRoutes";
import { LayoutPage } from "../layout/LayoutPage";
export function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>

      <Route element={<LayoutPage/>}>
          <Route path="/" element={<ProductRoutes/>}/>
          <Route path="/auth/*" element={<AuthRoutes/>}/>
      </Route>

    </Routes>
    </BrowserRouter>
  )
}
