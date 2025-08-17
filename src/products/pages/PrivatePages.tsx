import { Navigate, Outlet } from "react-router";
import { ProfileUserInfo } from "../components/ProfileUserInfo";
import { useTokens } from "../../auth/hooks";


export function PrivatePages() {
    const {retrieveTokensFromStorage} = useTokens();
    //const {access_token} = useSelector((s:RootState)=> s.auth);
    const access_token = retrieveTokensFromStorage();
    
    if(!access_token){
      return <Navigate to={"/auth/login"}/>
    }

  return (
    <ProfileUserInfo access_token={access_token}>
        <Outlet/>
    </ProfileUserInfo>
  )
}
