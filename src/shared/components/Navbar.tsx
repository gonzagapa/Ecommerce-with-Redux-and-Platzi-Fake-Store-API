import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../auth/store/authSlice';
import { useNavigate } from 'react-router';
import type { RootState } from '../../app';
import { LogOut } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';

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
    <div className="flex justify-between items-center px-2 py-2 min-h-16 bg-slate-300 dark:bg-slate-800 border-b-baby">
        <h1 className="italic capitalize text-4xl underline decoration-highlight">The best shop</h1>
        <nav>
            <ul className='flex gap-1.5'>
                <li>
                  <button className='button text-blue-900 dark:text-baby hover:text-highlight transition-all duration-200 ease-in '>
                    <ShoppingCart/>
                  </button>
                </li>
                <li> 
                  <button 
                  onClick={handleLogOut}
                  className={` ${isAuth ? "block":"invisible"} button border-2 border-slate-100 font-bold flex gap-0.5 transition-all duration-200 ease-in hover:text-highlight hover:border-highlight`}><LogOut/>Logout
                  </button>
                  </li>
            </ul>
        </nav>
    </div>
  )
}
