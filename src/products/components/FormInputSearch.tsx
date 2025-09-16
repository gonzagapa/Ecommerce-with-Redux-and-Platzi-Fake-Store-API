import { useState, type ChangeEvent, type FormEvent } from "react"
import { Search } from 'lucide-react';
import { useDispatch} from "react-redux";
import { changeTitleFilter, removeSpecificFilter } from "../store/productSlice";

export function FormInputSearch() {
    const [inputQueryValue, setInputQueryValue] = useState("");

    const dispatch = useDispatch(); 
    const handleInputChange = (e:ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value;
        setInputQueryValue(value);
    }

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        if(inputQueryValue.trim().length === 0){
            dispatch(removeSpecificFilter("title"))
            return;
        }; 
        dispatch(changeTitleFilter({title:inputQueryValue}))
    }

    return (
        <section className="flex justify-center">
            <form method="" onSubmit={handleSubmit} role="search">
                    <label htmlFor="search" className="flex gap-2 items-center" >
                    <input 
                    className="border-2 w-[250px] focus:outline-highlight dark:border-baby border-highlight p-2 rounded-md placeholder:text-font-light dark:placeholder:text-baby shadow-sm shadow-slate-300 dark:shadow-slate-600"
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search by product's name"
                    value={inputQueryValue} 
                    onChange={handleInputChange} />
                    <button className="border-2 p-1 text-baby border-highlight hover:bg-highlight/85 hover:cursor-pointer bg-highlight rounded-md transition-colors duration-150 hover:text-gray-900 hover:border-gray-900" type="submit"><Search/></button>
                </label>
            </form>
        </section>)

}