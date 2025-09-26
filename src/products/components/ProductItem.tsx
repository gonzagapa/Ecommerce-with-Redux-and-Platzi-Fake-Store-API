import {Button } from "../../shared/components/Buttons"
import { ShoppingCart } from 'lucide-react';
import { SquareArrowOutUpRight } from 'lucide-react';
import { currency } from "../../shared/utility";
import { useDispatch } from "react-redux";
import { addItemToCart, type CartProduct } from "../../cart";
import type React from "react";
import { useModalContext } from "../../shared/hooks/useModalContext";
import { Link } from "react-router";

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

export function ProductItem({imageURL,price,title,id, category}:Props) {

  const {ModalOpen} = useModalContext()

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
    ModalOpen(true);
  }

  return (<>
    <article className="relative shadow-md shadow-slate-300 dark:shadow-slate-700  rounded-md  flex flex-col gap-4 text-font-light  dark:text-baby">
          <picture className="w-full h-[250px] overflow-hidden rounded-t-md">
              <img loading="lazy" src={imageURL} alt={`image of ${title}`} className="size-full object-cover" width={250} height={250}/>
          </picture>
        <Link to={`product/${id}`} className="group">
          <div className="flex gap-2 items-center justify-between px-3">
            <p className="font-semibold text-lg text-left line-clamp-2 max-w-[12ch] group-hover:text-highlight">{title}</p>
            <p className="text-lg font-bold md:text-xl text-center">{currency.format(price)}</p>
          </div>
        </Link>
          <p className="text-sm absolute top-1 left-0 font-medium"><span className="capitalize text-white bg-slate-800 dark:bg-baby dark:text-black rounded-lg p-1">{category}</span></p>
        <div className="my-auto flex justify-between items-center px-2 py-3">
          <Link to={`product/${id}`} className="hover:text-highlight hover:cursor-pointer text-sm underline"><SquareArrowOutUpRight className="size-5" aria-label="Know more about the product"/></Link>
          <Button style="p-1 text-sm" onAction={handleClick} children={<ButtonChildren text="Add to cart" icon={<ShoppingCart className="size-5"/>}/>}/>    
        </div>
      </article>
  </>
  )
}

export default ProductItem