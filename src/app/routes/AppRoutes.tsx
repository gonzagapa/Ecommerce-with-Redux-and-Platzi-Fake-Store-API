import { BrowserRouter, Route, Routes } from "react-router";
import { ThemePage } from "../theme/ThemePage";
import { ProductRoutes } from "../../products/routes/ProductRoutes";
import { AuthRoutes } from "../../auth/routes/AuthRoutes";
export function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>

      <Route element={<ThemePage/>}>
          <Route path="/" element={<ProductRoutes/>}/>
          <Route path="/auth" element={<AuthRoutes/>}/>
      </Route>

    </Routes>
    </BrowserRouter>
  )
}
