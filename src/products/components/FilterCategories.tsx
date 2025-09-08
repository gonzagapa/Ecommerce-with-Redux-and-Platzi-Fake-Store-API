import { BookmarkPlus } from 'lucide-react';

type ButtonProps = {
    text:string
    id:string
}

const ButtonFilter = ({text, id}:ButtonProps)=>{
    return (<button className=' p-2 capitalize focus:border-l-2 focus:border-highlight' id={id}>{text}</button>)
}

export const FilterCategories = ()=>{
    return (
        <aside className="flex flex-col gap-4 self-start col-span-1 items-start px-5 py-4 rounded-md border-baby border-2">
            <h2 className="text-2xl text-center flex items-center"> <BookmarkPlus className='text-highlight'/> Categories</h2>
            <ButtonFilter text='all' id='all'/>
        </aside>
    )
}