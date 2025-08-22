import {Button } from "../../shared/components/Buttons"
import { ShoppingCart } from 'lucide-react';
import { currency } from "../../shared/utility";

type Props = {
    id:number,
    category:string
    imageURL:string,
    price:number,
    title:string
}

export function ProductItem({id,imageURL,price,title, category}:Props) {
  return (
    <div className="dark:border-baby border-highlight border-2 rounded-md p-3 flex flex-col gap-4 text-baby">
        <div className="size-min-[250px] overflow-hidden rounded-md">
            <img src={imageURL} alt={`image of ${title}`} className="size-full object-cover"/>
        </div>
        <p className="font-medium text-xl md:text-2xl text-center">{title}</p>
        <p className="text-lg font-bold md:text-xl text-center">{currency.format(price)}</p>
        {/* <p className="text-center"><span className="capitalize">category: </span>{category}</p> */}
        <div className="mt-auto">
          <Button icon={<ShoppingCart/>} textButton="Add to cart"/>    
        </div>
      </div>
  )
}

export default ProductItem