import { CartList } from "../components/CartList";
import { CartModal } from "../components/CartModal";

export function CartPage() {
  return (
    <main className="content-center lg:grid lg:grid-cols-12">
        <CartModal/>
        <CartList/>
    </main>
  )
}
