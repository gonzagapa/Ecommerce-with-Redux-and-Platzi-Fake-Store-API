import { LoadingSpinner } from ".";


//todo:change name 
export function LoadingLayout() {
  return (
    <div className="grid bg-slate-400 dark:bg-slate-700 opacity-60 justify-center content-center absolute inset-0">
         <LoadingSpinner color="border-highlight" size="w-20 h-20" thickness="border-4"/>
    </div>
  )
}
