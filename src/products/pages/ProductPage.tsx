import {Navigate, useParams } from "react-router"
import RenderProductPage from "./RenderProductPage";
import { useGetProductByIdQuery } from "../service/productService";
import { LoadingLayout } from "../../shared/components/LoadingLayout";
import { ModalContextProvider } from "../../shared/context/ModalContext";



export function ProductPage() {
    let {id} = useParams();

    if(!id){
        return <Navigate to={'/'}/>
    }

    const {data:productData, isError, isFetching}= useGetProductByIdQuery(+id)

    if(isFetching){
        return <LoadingLayout/>
    }

    if(!productData || isError){
            return <div>Product Info not found</div>
        }

    return (
    <ModalContextProvider>
        <RenderProductPage productData={productData}/>
    </ModalContextProvider> )
    

}
