import {useParams } from "react-router"
import { useGetProductByIdQuery } from "../service/productService";
import { currency } from "../../shared/utility";
import type { Category } from "../service/types";
import { Button } from "../../shared/components/Buttons";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";


export function ProductPage() {
    let {id} = useParams();


    if(typeof id == "undefined") {
        return <div>Product Info not found</div>
    }

    const {data:productData, isError}= useGetProductByIdQuery(+id)

    if(typeof productData == undefined || isError){
        return <div>Product Info not found</div>
    }

    const [currentImage,setCurrentImage] = useState(productData?.images[0])

   return (
    <main className="text-black pt-6 px-4">
        <div className="grid gap-3 md:grid-cols-2 max-w-6xl mx-auto">
            <section className="flex justify-center flex-col items-center">
                <picture className="block overflow-hidden rounded-xl shadow-md shadow-slate-500 size-[200px] md:size-[450px]">
                    <img className="size-full object-cover" src={`${currentImage}`} alt={`images of ${productData?.slug}`} />
                </picture>
                <div className="flex justify-evenly gap-3 mt-3 ">
                    {productData?.images.map((namePhoto,index)=>(
                        <button
                        key={index}
                        onClick={()=> setCurrentImage(namePhoto)}
                        className={`size-5 ${namePhoto === currentImage ? 'bg-highlight':' bg-slate-400'} rounded-full cursor-pointer hover:bg-blue-300 transition-colors duration-100`}>

                        </button>
                    ))}
                </div>
            </section>
            <section className="flex flex-col gap-8 w-[50ch] mx-auto dark:text-baby">
                <div className="pb-3 border-b-2 border-slate-200 dark:border-slate-200">
                    <h1 className="text-3xl md:text-5xl text-center font-bold ">{productData?.title}</h1>
                    <p className="mt-8 leading-6 font-light">{productData?.description}</p>
                </div>
                <div className="flex justify-between items-center ">
                    <p className="text-2xl md:text-3xl font-semibold">{ currency.format(Number(productData?.price))}</p>
                    <p className="capitalize text-lg text-white bg-slate-800 dark:bg-baby dark:text-black rounded-lg p-1">{productData?.category.name}</p>
                </div>
                < div className="flex justify-center items-center gap-5">
                    <Button onAction={()=>{}} children={<Plus className="size-6 md:size-8" />} style="size-8 md:size-10 flex items-center hover:text-black"/>
                    <p className="border-highlight text-font-light text-center text-lg font-semibold border-2 w-[4ch]  p-1 rounded-md dark:text-baby">{0}</p>
                    <Button onAction={()=>{}}  children={<Minus className="size-6 md:size-8" />} style="size-8 md:size-10 flex items-center hover:text-black"/>
                </div>
                {/* //todo add button buy now */}
            </section>
        </div>
    </main>
  )
}
