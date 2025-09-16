import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import { useThemeContext } from '../../app';

export function ButtonToggleTheme() {

    const {handleTheme} = useThemeContext();

  return (
    <div className="flex flex-col justify-center ml-3 ">
        <input type="checkbox" name="scheme-light-switch" className="light-switch sr-only" />
        <label onClick={handleTheme} htmlFor="light-switch" className='relative cursor-pointer p-2 flex items-center justify-center bg-slate-100 border-slate-100  hover:border-highlight border-2 dark:bg-slate-700 dark:hover:bg-slate-600/80 rounded-full shadow-md shadow-slate-300 dark:shadow-none group transition-all duration-200 ease-in'>
            <Sun className='hidden dark:block'/>
            <Moon className='dark:hidden text-blue-400 group-hover:text-highlight'/>
            <span className="sr-only">Switch to light/dark version</span>
        </label>

    </div>

  )
}
