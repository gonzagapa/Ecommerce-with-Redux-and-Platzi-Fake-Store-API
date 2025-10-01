import {Navigate, useParams } from "react-router"
import RenderProductPage from "./RenderProductPage";



export function ProductPage() {
    let {id} = useParams();

    if(!id){
        return <Navigate to={'/'}/>
    }

    //todo:aqui hacer el fetch de los datos

    return <RenderProductPage id={+id}/>
    

}
