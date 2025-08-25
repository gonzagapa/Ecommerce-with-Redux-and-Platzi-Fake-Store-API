import { Button } from "../../shared/components/Buttons";
import { usePaginationContext } from "../hooks/usePaginationContext";
import { ArrowRight } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';



export function PaginationButtons() {

    const {pagination, setPagination, refElement} = usePaginationContext();

    const buttonPreviousDisabled = pagination.offset == 0;
    const buttonNextDisabled = pagination.offset == 75;
    console.log({pagination})

    const handleNext = ()=>{
        setPagination({...pagination,offset:pagination.offset+ pagination.limit})
        refElement.current?.scrollIntoView({behavior:'smooth',block:'start',})
    } 

    const handlePrevious = ()=>{
        if(pagination.offset !== 0) setPagination({...pagination,offset:pagination.offset- pagination.limit})
        refElement.current?.scrollIntoView({behavior:'smooth',block:'start',})
    }

    return (
    <footer className="flex gap-3 mt-10 pb-4">
        <Button style="w-30" isDisabled={buttonPreviousDisabled} textButton="" icon={<ArrowLeft/>} onAction={handlePrevious}/>
        <Button style="w-30" isDisabled={buttonNextDisabled} textButton="" icon={<ArrowRight/>} onAction={handleNext}/>
    </footer>
  )
}
