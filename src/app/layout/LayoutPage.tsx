import {Outlet } from "react-router";
import { Navbar } from "../../shared/components";


export function LayoutPage() {

  return (
    <div className="dark:bg-slate-900 bg-baby dark:text-baby text-blue-400
    min-h-screen">
    <Navbar/>
        {<Outlet/>}
    </div>
  )
}
