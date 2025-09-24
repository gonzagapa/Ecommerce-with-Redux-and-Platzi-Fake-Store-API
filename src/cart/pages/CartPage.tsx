import { ModalContextProvider } from "../../shared/context/ModalContext";
import { CartList } from "../components/CartList";
import { CartOrder } from "../components/CartOrder";

export function CartPage() {
  return (
    <main className="content-center lg:grid lg:grid-cols-12">
      <ModalContextProvider>
        <CartOrder/>
        <CartList/>
      </ModalContextProvider>
    </main>
  )
}
