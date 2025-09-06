import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../shared/components/Buttons";
import { usePaginationContext } from "../hooks/usePaginationContext";
import { ArrowRight } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import type { RootState } from "../../app";
import { changePaginationParams } from "../store/productSlice";


export function PaginationButtons() {

    const {refElement} = usePaginationContext();
    const {limit,offset} = useSelector((s:RootState) => s.product); 
    const dispatch = useDispatch(); 

    const buttonPreviousDisabled = Number(offset )== 0;
    const buttonNextDisabled = Number(offset) == 75;
    //console.log({pagination})

    const handleNext = ()=>{
        //setPagination({...pagination,offset:pagination.offset+ pagination.limit})
        dispatch(changePaginationParams({limit,offset:`${Number(offset)+Number(limit)}`}))
        refElement.current?.scrollIntoView({behavior:'smooth',block:'start',})
    } 

    const handlePrevious = ()=>{
        //if(Number(pagination.offset) !== 0) setPagination({...pagination,offset:`${Number(pagination.offset)- Number(pagination.limit)}`})
        if(Number(offset) !== 0) {
            dispatch(changePaginationParams({limit,offset:`${Number(offset)- Number(limit)}`}))
            refElement.current?.scrollIntoView({behavior:'smooth',block:'start',})
        }
    }

    return (
    <footer className="flex gap-3 mt-10 pb-4">
        <Button style="w-20" isDisabled={buttonPreviousDisabled} textButton="" icon={<ArrowLeft/>} onAction={handlePrevious}/>
        <Button style="w-20" isDisabled={buttonNextDisabled} textButton="" icon={<ArrowRight/>} onAction={handleNext}/>
    </footer>
  )
}
