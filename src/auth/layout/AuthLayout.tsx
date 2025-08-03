import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <div className="grid min-h-screen place-content-center">
        <Outlet/>
    </div>
  )
}
