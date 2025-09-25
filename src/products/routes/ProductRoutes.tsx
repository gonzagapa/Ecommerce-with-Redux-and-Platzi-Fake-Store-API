import { Route, Routes } from "react-router";
import { HomePage } from "../pages";
import { PrivatePages } from "../pages/PrivatePages";
import { AboutPage } from "../pages/AboutPage";
import { ErrorPage } from "../../app/page/ErrorPage";
import { ProductPage } from "../pages/ProductPage";

export function ProductRoutes() {
  return (
    <Routes>
      <Route element={<PrivatePages/>}>
        <Route index element={<HomePage/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path="product/:id" element={<ProductPage/>}/>

        <Route path="/*" element={<ErrorPage/>}/>
      </Route>
    </Routes>
  )
}
