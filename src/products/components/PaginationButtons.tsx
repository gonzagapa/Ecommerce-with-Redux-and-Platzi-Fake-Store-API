import { Button } from "../../shared/components/Buttons";
import { usePaginationContext } from "../hooks/usePaginationContext";
import { ArrowRight } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';



export function PaginationButtons() {

    const {pagination, setPagination} = usePaginationContext();

    const handleNext = ()=>{
        setPagination({...pagination,offset:pagination.offset+ pagination.limit})
    } 

    const handlePrevious = ()=>{
        if(pagination.offset !== 0) setPagination({...pagination,offset:pagination.offset- pagination.limit})
    }

    return (
    <footer className="flex gap-3 mt-10 pb-4">
        <Button textButton="" icon={<ArrowLeft/>} onAction={handlePrevious}/>
        <Button textButton="" icon={<ArrowRight/>} onAction={handleNext}/>
    </footer>
  )
}
