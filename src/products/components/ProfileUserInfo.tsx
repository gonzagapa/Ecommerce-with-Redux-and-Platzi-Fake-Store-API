import { useDispatch } from "react-redux"
import { useUserProfileInfoQuery } from "../../auth/services/authService";
import { setProfileInfo } from "../../auth/store/authSlice";
import { useEffect } from "react";

type Props ={
    children:React.ReactNode,
    access_token:string
}

export function ProfileUserInfo({children, access_token}:Props) {

    const dispatch = useDispatch();
    const {data:user} =useUserProfileInfoQuery({access_token});

    useEffect(()=>{
        if(user){
            //console.log(user);
            dispatch(setProfileInfo(user))
        }
    }, [user])
    

    return (
        <>{children}</>
    )
}