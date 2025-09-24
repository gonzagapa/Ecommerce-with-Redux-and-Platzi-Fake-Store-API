import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "../../app";
import { useLocation, useNavigate } from "react-router";


export  function ButtonShoppingCart() {

    //Todo:add opacity while scrolling
    const {totalProducts} = useSelector((s:RootState) => s.cart);
    const navigate = useNavigate();
    let location = useLocation();
    
    const handleClick = ()=>{
      navigate("/cart")
    }

  return (
    <>
     <button onClick={handleClick} className={`${location.pathname === '/cart' ? "hidden":""} fixed bottom-16 right-3  bg-baby rounded-full shadow-sm shadow-baby  md:static button md:inset-0 md:rounded-none md:shadow-none md:bg-transparent   text-blue-400 dark:text-baby hover:text-highlight transition-all duration-200 ease-in `}>
            <ShoppingCart/>
            {
              totalProducts>0 && (
            <div className="absolute -top-2 -right-2 md:top-0 md:-right-1 p-1 w-6 h-6 md:w-4 md:h-4 rounded-full bg-highlight dark:bg-baby text-baby dark:text-black flex justify-center items-center"><span className="md:text-[12px] font-bold">{totalProducts}</span></div>)
            }
        </button>
    </>
  )
}
