import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../shared/components/Buttons";
import { currency } from "../../shared/utility";
import type { RootState } from "../../app";
import { resetCart } from "../store/cartSlice";


export function CartOrder() {
    const {cartProducts} = useSelector((s:RootState) => s.cart);
    const dispatch = useDispatch();

    const handlePayment = ()=>{
        //todo:fire a modal to confirm process
        dispatch(resetCart())
    }

    const total = cartProducts.reduce((acc,currentItem) => acc + (currentItem.amount * currentItem.price),0)
  return (
    <aside className="p-3 w-10/12 max-w-md  mx-auto align mt-5 lg:mt-10 lg:mx-0 lg:col-span-4 justify-self-center ">
        <h2 className="font-semibold mb-5 text-2xl md:text-4xl lg:w-[5ch]">Order Summary</h2>
        <div className="border-b-2 dark:border-white border-highlight mb-5"></div>
        <div className="flex flex-col gap-5">
            <p className="text-gray-400 md:text-xl capitalize flex">Subtotal <span className="font-bold text-baby ml-auto">{currency.format(total)}</span></p>
            <p className="text-gray-400 md:text-xl capitalize flex">Shipping <span className="font-bold text-baby ml-auto">Free</span></p>
            <p className="text-gray-400 md:text-xl capitalize flex">Total <span className="font-bold text-baby ml-auto">{currency.format(total)}</span></p>
        </div>
        <Button onAction={handlePayment} textButton="Proceed for Payment" style="w-full mt-5 font-semibold"/>
    </aside>
  )
}
