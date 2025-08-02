import { Outlet } from "react-router";


export function ThemePage() {
  return (
    <div className="dark:bg-slate-900 bg-slate-300 dark:text-slate-200 text-blue-400
    min-h-screen">
        {<Outlet/>}
    </div>
  )
}
