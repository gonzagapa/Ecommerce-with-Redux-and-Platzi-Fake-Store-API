import { LoadingSpinner } from "./LoadingSpinner"

interface ButtonProps {
    textButton:string
    icon?: React.ReactNode
    onAction?: ()=>void 
    isDisabled?:boolean
    style?:string
}

interface SpinnerProps extends ButtonProps{
    isLoading?:boolean,
}

export const Button = ({textButton, icon,onAction, isDisabled, style}:ButtonProps)=>{
    return (
        <button
        disabled={isDisabled}
        onClick={onAction}
        className={`button ${isDisabled ? "bg-gray-400/80": "bg-highlight" } flex cursor-pointer justify-center text-white ${style}  hover:bg-highlight/85 mx-auto p-2 gap-2`}>
            {icon}
            {textButton}
        </button>
    )
}
export const ButtonSpinner = ({isDisabled,textButton}:SpinnerProps)=>{
    return (
        <button disabled={isDisabled}
            className={`button ${isDisabled ? "bg-highlight/85": "bg-highlight" } flex justify-center text-white w-[200px] hover:bg-highlight/85 mx-auto`}>
            {isDisabled && <LoadingSpinner size="w-6 h-6"color="border-white" thickness="border-4"/>}
            {!isDisabled &&  <span className="grow text-center">{textButton}</span>}
        </button>
    )
}

