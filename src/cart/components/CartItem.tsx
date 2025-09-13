import { Button } from "../../shared/components/Buttons";
import { currency } from "../../shared/utility"
import type { CartProduct } from "../store/cartSlice";

import { Plus,Minus,X   } from 'lucide-react';

interface Props extends CartProduct {}

export function CartItem({imageURL,price,title,id,amount}:Props) {
  return (
    <article data-id={id} 
    className="dark:border-baby border-highlight border-2 rounded-md p-2.5 max-w-lg flex gap-4 w-full relative shadow-md shadow-gray-500">
        <picture className="object-cover max-w-[150px] overflow-hidden rounded-md">
            <img src={imageURL} alt={title} className="size-full" width={120} height={120}/>
        </picture>
        <div className="flex flex-col gap-5 justify-start">
            <h3 className="text-lg md:text-2xl">{title}</h3>
            <p className="font-bold md:text-xl italic">{currency.format(price)}</p>

            <div className="flex gap-1 items-center">
                <Button textButton="" icon={<Plus className="size-6 md:size-8" />} style="size-8 md:size-10 flex items-center hover:text-black"/>
                <p className="dark:border-highlight text-center border-2 w-[4ch]  p-1 rounded-md text-baby">{amount}</p>
                <Button textButton="" icon={<Minus className="size-6 md:size-8" />} style="size-8 md:size-10 flex items-center hover:text-black"/>
            </div>
        </div>
        <button className="absolute -top-3 -right-3 cursor-pointer  hover:text-black size-6 md:size-8 rounded-full bg-highlight text-baby flex justify-center items-center"><X className="size-4 md:size-5"/></button>
    </article>
  )
}
