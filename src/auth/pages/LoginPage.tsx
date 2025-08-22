import { type FormEvent } from "react"
import { useLoginUserMutation } from "../services/authService";
import { useNavigate } from "react-router";
import { useForm, useTokens } from "../hooks";
import { LoadingSpinner } from "../../shared/components";
import { Modal } from "../../shared/components/Modal";
import { ButtonSpinner } from "../../shared/components/Buttons";

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
  const [loginUser,{isLoading, isError}] = useLoginUserMutation();

  let navigate = useNavigate();
  const {saveInLocalStorage} = useTokens();

  const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
      loginUser({email,password}).unwrap()
      .then((payload)=>{
        navigate("/");
        saveInLocalStorage(payload);
      })
      .catch(()=>{
        console.log(isError);
      });

  }

  return (
    <main className="dark:bg-slate-800 border-2 rounded-lg border-baby
    min-w-sm p-3">
        { isError && <Modal title="User doesnt exists" text="Try again" icon="error"/> }
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
          <ButtonSpinner isLoading={isLoading} textButton="Login"/>
        </form>
        
    </main>
  )
}
