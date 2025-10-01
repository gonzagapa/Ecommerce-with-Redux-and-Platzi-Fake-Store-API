import React from "react"

interface ButtonProps {
    children:React.ReactNode
    onAction?: ()=>void 
    isDisabled?:boolean
    style?:string
}

export const Button = React.memo( ({onAction, isDisabled, style,children}:ButtonProps)=>{
    return (
        <button
        disabled={isDisabled}
        onClick={onAction}
        className={`button hover:bg-highlight/85 ${isDisabled ? "bg-gray-400/80": "bg-highlight" } 
            flex cursor-pointer justify-center hover:text-black text-white 
            disabled:hover:bg-gray-400/80 p-2 gap-2 transition-all duration-200 ease-in ${style}`}>
            {children}
        </button>
    )
})

