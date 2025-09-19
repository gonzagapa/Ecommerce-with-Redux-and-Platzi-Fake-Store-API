import { CircleCheck ,CircleX  } from 'lucide-react';
import { X } from 'lucide-react';
import { useState } from 'react';

type ModalColors = {
  error:string,
  success:string,
  warning:string,
  neutral:string
}

type Props = {
    title:string,
    text:string,
    isVisible?:boolean,
    type:keyof ModalColors
}


const modalColors:ModalColors = {
  error:"bg-red-300",
  success:"bg-green-300",
  warning:"bg-yellow-300",
  neutral:"bg-slate-200"
}

const getBgModelByType = (type:keyof ModalColors)=>{
  return modalColors[type];
}
const RenderIconModal = ({type}:Pick<Props,"type">)=>{

    if(type ==="error"){
        return <CircleX className='text-error'/>
    }
    if(type == "warning"){
        return; //todo icon for warning
    }
    if(type == "neutral"){
        return;
    }
    return (<CircleCheck className='text-green-400'/>)
}

export function Modal({title,text,isVisible,type}:Props) {

    const [visibility, setVisibility] = useState(isVisible ?? true);

    const handleVisibility = ()=>{
        setVisibility(false);
    }

    if(visibility == false) {
        return ;
    }
  return (
    <div className={`${getBgModelByType(type)}  rounded-md w-[250px] md:w-sm absolute top-2 left-1/2 -translate-x-1/2 animate-fade-in-scale pt-4 px-4 pb-8 shadow-md shadow-slate-300 dark:shadow-slate-600`}>
        <div className='flex justify-between items-center mb-5'>
            <div className='flex gap-2 items-center'>
                <div className='size-6'>
                    <RenderIconModal type={type}/>
                </div>
                <p className={`flex text-xl  md:text-3xl gap-2 text-black  font-semibold`}>
                        {title}
                </p>
            </div>
            <button 
            onClick={handleVisibility}
            className=' text-black hover:text-error cursor-pointer'>
               <X className='size-6'/>
            </button>
        </div>
        <p className='text-black text-xl leading-1.5'>{text}</p>
        </div>
  )
}