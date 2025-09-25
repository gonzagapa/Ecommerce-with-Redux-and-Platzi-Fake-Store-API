import { useParams } from "react-router"
import { useGetProductByIdQuery } from "../service/productService";


export function ProductPage() {
    let {id} = useParams();

    if(typeof id == "undefined") {
        return <div>Product Info not found</div>
    }

    const {data:productData}= useGetProductByIdQuery(+id)
   return (
    <main className="text-black p-2">
        {JSON.stringify(productData)}
    </main>
  )
}
