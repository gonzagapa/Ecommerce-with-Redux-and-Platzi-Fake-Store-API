import { useState, type FormEvent } from "react"
import { useLoginUserMutation } from "../services/authService";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setTokens } from "../store/authSlice";
import { useForm } from "../hooks";

type FormValues= {
  email:string,
  password:string
}

const formValues:FormValues = {
  email:'',
  password:''
}

export function LoginPage() {

  const {email,password, onInputChange} = useForm<FormValues>(formValues);  
  const [loginUser] = useLoginUserMutation();
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    //console.log({password,email});
    const payload = await loginUser({email,password}).unwrap();

    if(payload){
      navigate("/");
      dispatch(setTokens(payload));
    }
    else{
      console.error("Usuario no existente");
    }
  }

  return (
    <main className="dark:bg-slate-800 border-2 rounded-lg border-baby
    min-w-sm p-3">
        <h2 className="text-center text-5xl mb-5 text-highlight font-bold">Login</h2>
        <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 mb-5">
            <label htmlFor="email" 
            className="capitalize font-semibold text-xl">email addres:</label>
            <input type="email" name="email" id="email" 
            value={email}
            onChange={(e)=> onInputChange(e)}
            className="bg-slate-900 rounded-lg p-2 outline-slate-300"/>
        </div>
        <div className="flex flex-col gap-2 mb-5">
            <label htmlFor="password"
            className="capitalize font-semibold text-xl">password:</label>
            <input type="password" name="password" id="password" 
            value={password}
            onChange={(e)=> onInputChange(e)}
            className="bg-slate-900 rounded-lg p-2 outline-slate-300"/>
        </div>
            <button type="submit" className="button bg-highlight text-white w-[200px] hover:bg-highlight/85 mx-auto">Login</button>
        </form>
        
    </main>
  )
}
