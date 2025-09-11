import { ShoppingCart } from "lucide-react";


export  function ButtonShoppingCart() {

    //Todo:add opacity while scrolling

  return (
     <button className='fixed bottom-16 right-3  bg-highlight rounded-full shadow-sm shadow-baby  md:static button md:inset-0 md:rounded-none md:shadow-none md:bg-transparent  text-blue-900 dark:text-baby hover:text-highlight transition-all duration-200 ease-in '>
            <ShoppingCart/>
        </button>
  )
}
