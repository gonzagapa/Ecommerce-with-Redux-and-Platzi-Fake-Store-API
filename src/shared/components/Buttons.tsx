interface ButtonProps {
    children:React.ReactNode
    onAction?: ()=>void 
    isDisabled?:boolean
    style?:string
}

export const Button = ({onAction, isDisabled, style,children}:ButtonProps)=>{
    return (
        <button
        disabled={isDisabled}
        onClick={onAction}
        className={`button hover:bg-highlight/85 ${isDisabled ? "bg-gray-400/80": "bg-highlight" } 
            flex cursor-pointer justify-center hover:text-black text-white ${style} 
            disabled:hover:bg-gray-400/80  mx-auto p-2 gap-2 transition-all duration-200 ease-in`}>
            {children}
        </button>
    )
}

