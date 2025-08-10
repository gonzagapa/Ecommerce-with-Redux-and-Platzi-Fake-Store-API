import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../app"
import { useUserProfileInfoQuery } from "../../auth/services/authService";
import { setProfileInfo } from "../../auth/store/authSlice";

type Props ={
    children:React.ReactNode
}

export function ProfileUserInfo({children}:Props) {

    const {access_token} =   useSelector((s:RootState) => s.auth);
    const dispatch = useDispatch();

    const {data:user} =useUserProfileInfoQuery({access_token});
    
    if(user){
          //console.log(hasAccess);
        console.log(user);
        dispatch(setProfileInfo(user))
    }

    return (
        <>{children}</>
    )
}