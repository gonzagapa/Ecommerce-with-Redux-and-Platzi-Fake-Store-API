import {useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import type { RootState } from "../../app";
import { ProfileUserInfo } from "../components/ProfileUserInfo";


export function PrivatePages() {
    const {access_token} = useSelector((s:RootState)=> s.auth);
    
    const hasAccess = access_token.length >1;
    
    if(!hasAccess){
      return <Navigate to={"/auth/login"}/>
    }

  return (
    <ProfileUserInfo>
        <Outlet/>
    </ProfileUserInfo>
  )
}
