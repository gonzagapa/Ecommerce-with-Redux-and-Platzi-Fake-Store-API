import { useSelector } from "react-redux"
import type { RootState } from "../../app"
import { CartItem } from "./CartItem";
import NoProducts from "./NoProducts";



export function CartList() {
  const {cartProducts:products} = useSelector((s:RootState) => s.cart );
  return (
    <section className="p-5 lg:col-span-8">
      <h2 className="text-2xl mb-10 md:text-5xl font-bold text-center text-highlight">Tus productos:</h2>
      <section className="flex mx-auto flex-col justify-center max-w-5xl items-center gap-4">
        {
          products.length > 0 ? 
          products.map((product) =>(
            <CartItem key={product.id} {...product}/>
          )) : <NoProducts/>
        }
      </section>
    </section>
  )
}
