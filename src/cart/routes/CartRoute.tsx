import { Route, Routes } from "react-router"
import { CartPage } from "../pages/CartPage"
import { PrivatePages } from "../../products/pages/PrivatePages"


function CartRoute() {
  return (
    <Routes>
      <Route element={<PrivatePages/>}>
        <Route index element={<CartPage/>} />
      </Route>
    </Routes>
  )
}

export default CartRoute