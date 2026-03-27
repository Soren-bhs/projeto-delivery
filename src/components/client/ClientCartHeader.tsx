import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Moon, Sun, ArrowLeft } from 'lucide-react';

export function ClientCartHeader() {

    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    return (
        <div className='bg-white dark:bg-slate-900 flex items-center justify-center border-b border-zinc-300 dark:border-slate-800 transition-colors duration-300'>
            <div className='flex py-5 lg:py-6 w-full max-w-7xl px-8 items-center justify-center'>
                
                <div className='flex items-center gap-3'>
                    <Link to="/Catalog" className="hover:opacity-80 transition-opacity">
                        <ArrowLeft className='text-zinc-600 dark:text-zinc-300' size={24} />
                    </Link>
                    <h1 className='mt-0.5 lg:m-0 font-bold text-2xl text-zinc-700 dark:text-zinc-100'>Carrinho</h1>
                </div>
                
                <nav className='flex items-center ml-auto gap-6 lg:gap-8'>
                    <button 
                        onClick={() => setIsDark(!isDark)}
                        className="hover:opacity-80 transition-opacity"
                    >
                        {isDark ? (
                            <Sun className='text-zinc-300' size={24} />
                        ) : (
                            <Moon className='text-zinc-600' size={24} />
                        )}
                    </button>

                    <Link to="/" className="hover:opacity-80 transition-opacity">
                        <User className='text-zinc-600 dark:text-zinc-300'/>
                    </Link>
                </nav>
            </div>
        </div>
    );
}