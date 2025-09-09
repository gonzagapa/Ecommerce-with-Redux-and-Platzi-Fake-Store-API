import { BookmarkPlus } from 'lucide-react';
import { CircleX } from 'lucide-react';
import { useGetCategoriesQuery } from '../service/productService';
import { ButtonFilter } from './ButtonFilter';
import { useDispatch } from 'react-redux';



export const FilterCategories = ()=>{

    const {data:categories, isError,isLoading} = useGetCategoriesQuery(); 
    const dispatch = useDispatch(); 

    if(isLoading){
        return (
            <aside className="flex flex-col gap-4 self-start col-span-1 items-start px-5 py-4 rounded-md border-baby border-2">
                <p>Cargando...</p>
            </aside>
        )
    }

    if(isError || typeof categories === undefined){
         return (
            <aside className="flex flex-col gap-4 self-start col-span-1 items-start px-5 py-4 rounded-md border-baby border-2">
                <p><CircleX className='text-red-500'/> Categories no disponibles</p>
            </aside>
        )
    }

    return (
        <aside className="flex flex-col gap-4 self-start col-span-1 items-start px-5 py-4 rounded-md border-baby border-2">
            <h2 className="text-2xl text-center flex items-center"> <BookmarkPlus className='text-highlight'/> Categories</h2>
            {
                categories?.map((category) =>(
                    <ButtonFilter key={category.slug} dispatch={dispatch} text={category.name} id={category.slug}/>
                ))
            }
        </aside>
    )
}