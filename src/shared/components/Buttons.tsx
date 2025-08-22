import { LoadingSpinner } from "./LoadingSpinner"

interface ButtonProps {
    textButton:string
    icon?: React.ReactNode
    onAction?: ()=>void 
}

interface SpinnerProps extends ButtonProps{
    isLoading?:boolean,
}

export const Button = ({textButton, icon}:ButtonProps)=>{
    return (
        <button
        className="bg-highlight flex justify-center text-white w-[200px] hover:bg-highlight/85 mx-auto p-2 gap-2 rounded-md">
            {icon}
            {textButton}
        </button>
    )
}
export const ButtonSpinner = ({isLoading,textButton}:SpinnerProps)=>{
    return (
        <button disabled={isLoading}
            className={`button ${isLoading ? "bg-highlight/85": "bg-highlight" } flex justify-center text-white w-[200px] hover:bg-highlight/85 mx-auto`}>
            {isLoading && <LoadingSpinner size="w-6 h-6"color="border-white" thickness="border-4"/>}
            {!isLoading &&  <span className="grow text-center">{textButton}</span>}
        </button>
    )
}

