import { useDispatch } from "react-redux"
import { useUserProfileInfoQuery } from "../../auth/services/authService";
import { setProfileInfo } from "../../auth/store/authSlice";
import { useEffect } from "react";
import { Navigate } from "react-router";

type Props ={
    children:React.ReactNode,
    access_token:string
}

export function ProfileUserInfo({children, access_token}:Props) {

    const dispatch = useDispatch();
    const {data:user, isError} =useUserProfileInfoQuery({access_token});

    useEffect(()=>{
        if(user){
            dispatch(setProfileInfo(user))
        }
    }, [user])

    if(isError){
        return <Navigate to={"/auth/login"}/>
    }
    

    return (
        <>{children}</>
    )
}