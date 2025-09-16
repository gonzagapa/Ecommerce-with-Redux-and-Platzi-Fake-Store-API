import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import { useThemeContext } from '../../app';

export function ButtonToggleTheme() {

    const {handleTheme} = useThemeContext();

  return (
    <div className="flex flex-col justify-center ml-3">
        <input type="checkbox" name="scheme-light-switch" className="light-switch sr-only" />
        <label onClick={handleTheme} htmlFor="light-switch" className='relative cursor-pointer p-2 flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 rounded-full'>
            <Sun className='hidden dark:block'/>
            <Moon className='dark:hidden'/>
            <span className="sr-only">Switch to light/dark version</span>
        </label>

    </div>

  )
}
