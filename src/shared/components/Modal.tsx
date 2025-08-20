import { CircleCheckBig } from 'lucide-react';
import { CircleX } from 'lucide-react';
import { useState } from 'react';

type IconModalType = "success"| "error";

type Props = {
    title:string,
    text:string,
    icon:IconModalType,
    isVisible?:boolean
}

export function Modal({title,text,icon, isVisible}:Props) {

    const [visibility, setVisibility] = useState(isVisible ?? true);

    const handleVisibility = ()=>{
        //console.log("visibility");
        setVisibility(false);
    }

    if(visibility == false) {
        //console.log("nada"); 
        return ;
    }
  return (
    <div className="bg-baby rounded-md min-w-[12.5rem] absolute top-2 left-1/2 -translate-x-1/2 animate-fade-in-scale text-center p-8">
        <div className='relative'>
        <button 
        onClick={handleVisibility}
        className='text-gray-500 hover:text-error cursor-pointer absolute -right-4 -top-7'><CircleX/></button>
        <p className={`${icon === "success" ? 
            'text-green-600':"text-red-600" } mb-2.5 flex text-xl gap-2  font-semibold`}>{icon === "success" ? <CircleCheckBig />:<CircleX/>} {title}</p>
        <hr />
        <p className='text-black'>{text}</p>
        </div>
    </div>
  )
}