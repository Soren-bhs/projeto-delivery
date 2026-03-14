import { Search } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Catalog() {

    const [isDark] = useState(() => {
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
        <div className='flex justify-center items-center g-4'>
            <div className='lg:w-2/6 w-1/1 flex flex-col justify-center p-5 relative'>
                <div className='w-full flex justify-center items-center'>
                    <Search size={25} className='absolute left-10 text-zinc-400' />
                    <input
                        className='ml-1 w-1/1 rounded-2xl border-zinc-300 p-4 pl-12 font-bold bg-white text-zinc-400 border dark:bg-slate-900 transition-colors duration-300'
                        placeholder='Pesquise sua comida...'
                    ></input>
                </div>
                <div className='text-2xl font-bold py-4'>
                    <h2 className='text-zinc-600'>Categorias</h2>
                </div>
            </div>
            
        </div>
    )
}