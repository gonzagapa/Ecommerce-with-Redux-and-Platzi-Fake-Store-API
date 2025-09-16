import { useDispatch } from "react-redux";
import { Button } from "../../shared/components/Buttons";
import { currency } from "../../shared/utility"
import { modifiedItemAmount, removeItemFromCart, type CartProduct } from "../store/cartSlice";

import { Plus,Minus,X   } from 'lucide-react';
import { useEffect } from "react";

interface Props extends CartProduct {}

export function CartItem({imageURL,price,title,id,amount}:Props) {
   const dispatch =  useDispatch();

   useEffect(()=>{
        if(amount === 0){
            dispatch(removeItemFromCart({id}))
        }
   },[amount])


   const handleClick = ()=>{
    dispatch(removeItemFromCart({id}))
   }

   const handleIncreseAmount = ()=>{
    dispatch(modifiedItemAmount({amount:1, id}))
   }

   const handleDecreaseAmount = ()=>{
    dispatch(modifiedItemAmount({amount:-1,id}));
   }

  return (
    <article data-id={id} 
    className="dark:border-baby  dark:border-2 rounded-md p-2.5 max-w-lg flex items-center gap-4 w-full relative shadow-md shadow-gray-500">
        <picture className="object-cover w-11/12 max-w-50 overflow-hidden rounded-md">
            <img src={imageURL} alt={title} className="size-full" width={120} height={120}/>
        </picture>
        <section className="flex flex-col gap-5 justify-start">
            <h3 className="text-base md:text-2xl dark:text-baby text-font-light line-clamp-2">{title}</h3>
            <div className="flex flex-col justify-between gap-1">
                <p className="md:text-base  text-gray-400">{currency.format(price)}</p>
                <p className="md:text-xl font-bold">{currency.format(price*amount)}</p>
            </div>
            <div className="flex gap-1 items-center">
                <Button onAction={handleIncreseAmount} textButton="" icon={<Plus className="size-6 md:size-8" />} style="size-8 md:size-10 flex items-center hover:text-black"/>
                <p className="border-highlight text-font-light text-center font-semibold border-2 w-[4ch]  p-1 rounded-md dark:text-baby">{amount}</p>
                <Button onAction={handleDecreaseAmount} textButton="" icon={<Minus className="size-6 md:size-8" />} style="size-8 md:size-10 flex items-center hover:text-black"/>
            </div>
        </section>
        <button onClick={handleClick} className="absolute -top-3 -right-3 cursor-pointer  hover:text-black size-6 md:size-8 rounded-full bg-highlight text-baby flex justify-center items-center"><X className="size-4 md:size-5"/></button>
    </article>
  )
}
