import { Outlet } from "react-router";


export function ThemePage() {
  return (
    <div className="dark:bg-slate-900 bg-baby dark:text-baby text-blue-400
    min-h-screen">
        {<Outlet/>}
    </div>
  )
}
