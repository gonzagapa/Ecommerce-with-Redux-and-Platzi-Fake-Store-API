import {Button } from "../../shared/components/Buttons"
import { ShoppingCart } from 'lucide-react';
import { currency } from "../../shared/utility";
import { useDispatch } from "react-redux";
import { addItemToCart, type CartProduct } from "../../cart";

type Props = {
    category:string
    imageURL:string,
    price:number,
    title:string,
    id:number
}

export function ProductItem({imageURL,price,title,id}:Props) {

  const dispatch = useDispatch();

  const handleClick = ()=>{
    console.log("click in product",id );

    const newProduct:CartProduct = {
      amount:1,
      id:id,
      title,
      price,
      image:imageURL
    }
    dispatch(addItemToCart(newProduct))
  }

  return (
    <div className="dark:border-baby border-highlight border-2 rounded-md p-3 flex flex-col gap-4 text-baby">
        <div className="size-min-[250px] overflow-hidden rounded-md">
            <img loading="lazy" src={imageURL} alt={`image of ${title}`} className="size-full object-cover" width={250} height={250}/>
        </div>
        <p className="font-medium text-xl md:text-2xl text-center">{title}</p>
        <p className="text-lg font-bold md:text-xl text-center">{currency.format(price)}</p>
        {/* <p className="text-center"><span className="capitalize">category: </span>{category}</p> */}
        <div className="mt-auto">
          <Button onAction={handleClick} icon={<ShoppingCart/>} textButton="Add to cart"/>    
        </div>
      </div>
  )
}

export default ProductItem