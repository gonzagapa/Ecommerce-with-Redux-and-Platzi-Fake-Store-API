import {Link, Outlet } from "react-router";
import { Navbar } from "../../shared/components";


export function LayoutPage() {

  return (
    <div className="dark:bg-slate-900 bg-baby dark:text-baby text-blue-400
    min-h-screen relative flex flex-col">
      <Navbar/>

        <div className="mb-10">
          {<Outlet/>}
        </div>

      <footer className="mt-auto flex justify-center items-center px-1 py-1 min-h-10 bg-slate-200 dark:bg-slate-800 border-b-baby">
        Developed by <Link to={"/about"} className="underline ml-2 text-highlight">Gonzalo Perez</Link>
      </footer>
    </div>
  )
}
