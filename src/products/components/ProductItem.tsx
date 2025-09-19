import {Button } from "../../shared/components/Buttons"
import { ShoppingCart } from 'lucide-react';
import { currency } from "../../shared/utility";
import { useDispatch } from "react-redux";
import { addItemToCart, type CartProduct } from "../../cart";
import type React from "react";

type Props = {
    category:string
    imageURL:string,
    price:number,
    title:string,
    id:number
}

const ButtonChildren = ({text,icon}:{text:string,icon:React.ReactNode})=>{
  return (<>
    <span>{text}</span>
    {icon}
  </>)
}

export function ProductItem({imageURL,price,title,id}:Props) {

  const dispatch = useDispatch();

  const handleClick = ()=>{
    const newProduct:CartProduct = {
      amount:1,
      id:id,
      title,
      price,
      imageURL:imageURL
    }
    dispatch(addItemToCart(newProduct))
  }

  return (
    <article className=" shadow-md shadow-slate-300 dark:shadow-slate-700  rounded-md  flex flex-col gap-4 text-font-light  dark:text-baby">
        <div className="size-min-[250px] overflow-hidden rounded-t-md">
            <img loading="lazy" src={imageURL} alt={`image of ${title}`} className="size-full object-cover" width={250} height={250}/>
        </div>
        <div className="flex gap-2 items-center justify-between px-3">
          <p className="font-semibold text-lg text-left line-clamp-2 max-w-[12ch]">{title}</p>
          <p className="text-lg font-bold md:text-xl text-center">{currency.format(price)}</p>
        </div>
        {/* <p className="text-center"><span className="capitalize">category: </span>{category}</p> */}
        <div className="mx-auto py-3">
          <Button onAction={handleClick} children={<ButtonChildren text="Add to cart" icon={<ShoppingCart/>}/>}/>    
        </div>
      </article>
  )
}

export default ProductItem