import { LogOut } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../auth/store/authSlice';
import { useNavigate } from 'react-router';
import type { RootState } from '../../app';

export function Navbar() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {access_token} = useSelector((s:RootState)=> s.auth);

  const isAuth = access_token.length > 0? true: false

  const handleLogOut = ()=>{
    console.log("Logout");
    dispatch(logOut());
    navigate("/auth/login");
  }

  
  return (
    <div className="flex justify-between items-center px-2 py-2 min-h-16 bg-slate-800 border-b-baby">
        <h1 className="italic capitalize text-4xl underline decoration-highlight">The best shop</h1>
        <nav>
            <ul>
                <li> 
                  <button 
                  onClick={handleLogOut}
                  className={` ${isAuth ? "block":"invisible"} button border-2 border-slate-100 font-bold flex gap-0.5`}><LogOut/>Logout
                  </button>
                  </li>
            </ul>
        </nav>
    </div>
  )
}
