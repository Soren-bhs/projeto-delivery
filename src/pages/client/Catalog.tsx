import * as Icons from 'lucide-react';
import { Search } from 'lucide-react';
import { useState, useEffect } from 'react';

type IconName = keyof typeof Icons;

type Categoria = {
    nome: string;
    icone: IconName;
}

function cat(): Categoria[] {
    return [
        { nome: "Pizzas", icone: "Pizza" },
        { nome: "Bebidas", icone: "Beer" },
        { nome: "Doces", icone: "Dessert" }, 
    ];
}

export function Catalog() {
    const [categorias] = useState<Categoria[]>(cat());

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
        <div className='flex justify-center min-h-screen bg-zinc-50 dark:bg-slate-950 transition-colors duration-300'>
            
            <div className='lg:w-2/6 w-full flex flex-col p-5'>
                
                <div className='w-full flex justify-center items-center relative'>
                    <Search size={22} className='absolute left-4 text-zinc-400' />
                    <input
                        className='w-full rounded-2xl border border-zinc-200 p-4 pl-12 font-medium bg-white text-zinc-800 outline-none focus:ring-2 focus:ring-orange-300 dark:bg-slate-900 dark:border-slate-800 dark:text-white transition-all'
                        placeholder='Pesquise sua comida...'
                    />
                </div>

                <div className='text-2xl font-bold py-6'>
                    <h2 className='text-zinc-700 dark:text-zinc-300'>Categorias</h2>
                </div>

                <div className='flex gap-4 overflow-x-auto pb-2 -mb-2'>
                    {categorias.map((categoria) => {
                        const LucideIcon = Icons[categoria.icone] as Icons.LucideIcon;

                        return (
                            <button 
                                key={categoria.nome} 
                                className='bg-white dark:bg-slate-900 p-4 shrink-0 rounded-2xl shadow-sm border border-zinc-100 dark:border-slate-800 flex flex-col items-center gap-3 hover:bg-orange-50 dark:hover:bg-slate-800 transition-all group'
                            >
                                <div>
                                    {LucideIcon && <LucideIcon size={28} className="text-orange-500" />}
                                </div>
                                <h2 className='text-sm font-semibold text-zinc-700 dark:text-zinc-300'>
                                    {categoria.nome}
                                </h2>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}