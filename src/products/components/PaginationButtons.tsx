import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../shared/components/Buttons";
import { useRefSliderContext } from "../hooks/useRefSliderContext";
import { ArrowRight } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import type { RootState } from "../../app";
import { changePaginationParams } from "../store/productSlice";


export function PaginationButtons() {

    const {refElement,hasProducts} = useRefSliderContext();
    const {limit,offset} = useSelector((s:RootState) => s.product); 
    const dispatch = useDispatch(); 

    const buttonPreviousDisabled = Number(offset )== 0;
    const buttonNextDisabled = !hasProducts;

    const handleNext = ()=>{
        dispatch(changePaginationParams({limit,offset:`${Number(offset)+Number(limit)}`}))
        refElement.current?.scrollIntoView({behavior:'smooth',block:'start',})
    } 

    const handlePrevious = ()=>{
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
