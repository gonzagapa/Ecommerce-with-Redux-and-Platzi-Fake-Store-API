import { useDispatch } from "react-redux";
import { currency } from "../../shared/utility"
import {removeItemFromCart, type CartProduct } from "../store/cartSlice";

import {X   } from 'lucide-react';
import { ButtonAmountProduct } from "../../shared/components";

interface Props extends CartProduct {}

export function CartItem({imageURL,price,title,id,amount}:Props) {
   const dispatch =  useDispatch();

   const handleClick = ()=>{
    dispatch(removeItemFromCart({id}))
   }

  return (
    <article data-id={id} 
    className="rounded-md p-2.5 max-w-lg flex items-center gap-4 w-full relative shadow-md dark:shadow-gray-600 shadow-gray-500">
        <picture className="object-cover w-11/12 max-w-50 overflow-hidden rounded-md">
            <img src={imageURL} alt={title} className="size-full" width={120} height={120}/>
        </picture>
        <section className="flex flex-col gap-5 justify-start">
            <h3 className="text-base md:text-2xl dark:text-baby text-font-light line-clamp-2">{title}</h3>
            <div className="flex flex-col justify-between gap-1">
                <p className="md:text-base  text-gray-400">{currency.format(price)}</p>
                <p className="md:text-xl font-bold">{currency.format(price*amount)}</p>
            </div>
            <ButtonAmountProduct amount={amount} id={id}/>
        </section>
        <button onClick={handleClick} className="absolute -top-3 -right-3 cursor-pointer  hover:text-black size-6 md:size-8 rounded-full bg-highlight text-baby flex justify-center items-center"><X className="size-4 md:size-5"/></button>
    </article>
  )
}
