import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import type { RootState } from "../../app";
import { useUserProfileInfoQuery } from "../../auth/services/authService";
import { setProfileInfo } from "../../auth/store/authSlice";


export function PrivatePages() {

    //const [hasAccess, setHasAccess]= useState(false);

    const {access_token} = useSelector((s:RootState)=> s.auth);
    const dispatch = useDispatch();
    const {data:user, isLoading} = useUserProfileInfoQuery({access_token});

    const hasAccess = access_token.length >1;

    if(!isLoading && user){
      console.log(hasAccess);
      console.log(user);
      dispatch(setProfileInfo(user))
    }

  return (
    <>
        {
            hasAccess ? <Outlet/>: <Navigate to={"/auth/login"}/> 
        }
    </>
  )
}
