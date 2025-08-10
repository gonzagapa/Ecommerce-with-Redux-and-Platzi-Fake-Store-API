import { LogOut } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../auth/store/authSlice';
import { useNavigate } from 'react-router';

export function Navbar() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
                  className="button border-2 border-slate-100 font-bold flex gap-0.5"><LogOut/>Logout
                  </button>
                  </li>
            </ul>
        </nav>
    </div>
  )
}
