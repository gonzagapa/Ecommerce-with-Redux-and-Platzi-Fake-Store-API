import { useDispatch, useSelector } from "react-redux";
import { Button } from "./Buttons"
import { modifiedItemAmount, removeItemFromCart } from "../../cart";
import { Minus, Plus } from "lucide-react";
import React, { useEffect } from "react";

type Props = {
    id:number,
    amount:number
}

function Component({id,amount}:Props) {
    
    const dispatch =  useDispatch();

    const handleIncreseAmount = ()=>{
        dispatch(modifiedItemAmount({amount:1, id}))
    }
    
    const handleDecreaseAmount = ()=>{
        dispatch(modifiedItemAmount({amount:-1,id}));
    }

    if(amount === 0){
        dispatch(removeItemFromCart({id}))
        return ;
    }

  return (
    <div className="flex gap-1 items-center justify-around">
        <Button onAction={handleIncreseAmount} children={<Plus className="size-6 md:size-8" />} style="size-8 md:size-10 flex items-center hover:text-black"/>
        <p className="border-highlight text-font-light text-center text-lg font-semibold border-2 w-[4ch]  p-1 rounded-md dark:text-baby">{amount}</p>
        <Button onAction={handleDecreaseAmount}  children={<Minus className="size-6 md:size-8" />} style="size-8 md:size-10 flex items-center hover:text-black"/>
    </div>
  )
}

export const  ButtonAmountProduct = React.memo(Component)