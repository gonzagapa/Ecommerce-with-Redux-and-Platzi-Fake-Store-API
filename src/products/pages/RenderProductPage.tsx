import { useCallback, useState } from "react";
import { useGetProductByIdQuery } from "../service/productService";
import { useDispatch } from "react-redux";
import { ShoppingCart } from "lucide-react";
import { Button } from "../../shared/components/Buttons";
import { currency } from "../../shared/utility";
import { addItemToCart, type CartProduct } from "../../cart";
import { LoadingSpinner } from "../../shared/components";



function RenderProductPage({id}:{id:number}) {

        const {data:productData, isError, isFetching}= useGetProductByIdQuery(id)
        const dispatch = useDispatch();
        const [currentImage,setCurrentImage] = useState(productData?.images[0])
        
        if(!productData || isError){
            return <div>Product Info not found</div>
        }

        const handleBuyProduct = ()=>{
            const newProduct:CartProduct = {
                amount:1, //todo:modified
                id:id,
                title:productData.title,
                price:productData.price,
                imageURL:productData.images[0]
            }
            dispatch(addItemToCart(newProduct))
        }

    return (
        <main className="text-black pt-6 px-4">
                <div className="grid gap-3 md:grid-cols-2 max-w-6xl mx-auto">
                    <section className="flex justify-center flex-col items-center">
                        <picture className="block overflow-hidden rounded-xl shadow-md shadow-slate-500 size-[200px] md:size-[450px]">
                            {isFetching ? 
                            <LoadingSpinner size="40" color="bg-blue-500" thickness=""/>
                                :
                            <img className="size-full object-cover" src={`${currentImage}`} alt={`images of ${productData?.slug}`} />
                            }
                            
                        </picture>
                        <div className="flex justify-evenly gap-3 mt-3 ">
                            {productData?.images.map((namePhoto,index)=>(
                                <button
                                key={index}
                                onClick={()=> setCurrentImage(namePhoto)}
                                className={`size-5 ${namePhoto === currentImage ? 'bg-highlight':' bg-slate-400'} rounded-full cursor-pointer dark:hover:bg-baby hover:bg-blue-300 transition-colors duration-100`}>
                                </button>
                            ))}
                        </div>
                    </section>
                    <section className="flex flex-col gap-8 w-[50ch] mx-auto dark:text-baby">
                        <div className="pb-3 border-b-2 border-slate-200 dark:border-slate-200">
                            <h1 className="text-3xl md:text-5xl text-center font-bold ">{productData?.title}</h1>
                            <p className="mt-8 leading-7 font-light sm:text-center md:text-left">{productData?.description}</p>
                        </div>
                        <div className="flex justify-between items-center ">
                            <p className="text-2xl md:text-3xl font-semibold">{ currency.format(Number(productData?.price))}</p>
                            <p className="capitalize text-lg text-white bg-slate-800 dark:bg-baby dark:text-black rounded-lg p-1">{productData?.category.name}</p>
                        </div>
                        <Button onAction={handleBuyProduct} children={<div className="flex gap-3 items-center">
                                <ShoppingCart/>
                                <p>Add to Cart</p>
                            </div>} style="max-w-sm w-9/11 mx-auto"/>
                    </section>
                </div>
            </main>
    )
}

export default RenderProductPage