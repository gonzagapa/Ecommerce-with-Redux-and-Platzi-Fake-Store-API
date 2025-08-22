import {Button } from "../../shared/components/Buttons"
import { ShoppingCart } from 'lucide-react';

type Props = {
    id:number,
    category:string
    imageURL:string,
    price:number,
    title:string
}

export function ProductItem({id,imageURL,price,title, category}:Props) {
  return (
    <div className="dark:border-baby border-highlight border-2 rounded-md p-3 flex flex-col gap-2 text-baby">
        <div className="size-20 ">
            <img src={imageURL} alt={`image of ${title}`} className="size-full object-cover"/>
        </div>
        <p className="font-bold text-2xl text-center">{title}</p>
        <p className="text-xl">${price}.00</p>
        <p>{category}</p>
        <Button icon={<ShoppingCart/>} textButton="Add to cart"/>    
      </div>
  )
}

export default ProductItem