import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router';

export default function NoProducts() {
  return (
    <div className="flex flex-col gap-3 items-center">
        <ShoppingCart className='size-25 text-highlight'/>
        <p className='max-w-[30ch] leading-normal dark:text-baby text-center text-3xl'>You dont have any products added, Go to <Link to="/" className='text-highlight underline'>Home</Link></p>
    </div>
  )
}
