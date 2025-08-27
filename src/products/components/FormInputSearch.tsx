import { useState, type FormEvent } from "react"
import { Search } from 'lucide-react';



export function FormInputSearch() {
    const [inputValue, setInputValue] = useState("")

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        console.log(inputValue)
    }

    return (
        <section className="flex justify-center">
            <form method="" onSubmit={handleSubmit} role="search">
                    <label htmlFor="search" id="search" className="flex gap-2 items-center" >
                    <input 
                    className="border-2 w-[250px] focus:outline-highlight dark:border-baby border-highlight p-2 rounded-md"
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search by product's name"

                    value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <button className="border-2 p-1 text-baby border-highlight hover:bg-highlight/85 hover:cursor-pointer bg-highlight rounded-md transition-colors duration-150 hover:text-gray-900 hover:border-baby" type="submit"><Search/></button>
                </label>
            </form>
        </section>)

}