import * as Icons from 'lucide-react';
import { Search } from 'lucide-react';
import { useState, useEffect } from 'react';

type IconName = keyof typeof Icons;

/** Representa uma categoria do cardápio com ícone do lucide-react. */
type Categoria = {
    nome: string;
    icone: IconName;
}

/**
 * Representa um produto exibido no catálogo do cliente.
 * Futuramente será substituído pelo modelo vindo do banco de dados.
 */
type Produto = {
    id: number;
    nome: string;
    descricao: string;
    valor: number;
    imagem: string;
    categoria: string;
}

/**
 * Dados de exemplo para desenvolvimento.
 * @todo Remover quando a integração com o banco de dados estiver pronta.
 */
function prod(): Produto[] {
    return [
        {
            id: 1,
            nome: "Pizza Margherita",
            descricao: "Pizza clássica com molho de tomate, mussarela e manjericão fresco",
            valor: 45.90,
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH5hfEUMPzjXMou1vLBOiPsLuN3cBhPJml3w&s",
            categoria: "Pizzas"
        },
        {
            id: 2,
            nome: "Coca-Cola Lata 350ml",
            descricao: "Refrigerante gelado, lata de 350ml",
            valor: 5.99,
            imagem: "https://files.tiker.com.br/losmuchachos/produtos/lata-de-cocacola-com-gelo-esma-1764184485566-00e7bdc5.webp",
            categoria: "Bebidas"
        },
        {
            id: 3,
            nome: "Brigadeiro Gourmet",
            descricao: "Brigadeiro artesanal com granulado belga e recheio cremoso",
            valor: 8.50,
            imagem: "https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/585f4b6718cb3fad169e44b00868e5e5.jpg?itok=fmi31RTw",
            categoria: "Doces"
        },
        {
            id: 4,
            nome: "X-Burguer Duplo",
            descricao: "Dois blends de carne, queijo cheddar, alface, tomate e molho especial",
            valor: 32.90,
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPJyZv8-FULGu9PWRfsf2RiO1Bg06-tmV-lg&s",
            categoria: "Lanches"
        }
    ]
}

/** Categorias fixas do cardápio com seus respectivos ícones. */
function cat(): Categoria[] {
    return [
        { nome: "Pizzas", icone: "Pizza" },
        { nome: "Bebidas", icone: "Beer" },
        { nome: "Doces", icone: "Dessert" },
        { nome: "Lanches", icone: "Sandwich" },
    ];
}

/**
 * Página de catálogo visível ao cliente.
 * Exibe barra de pesquisa, categorias e grid de produtos.
 *
 * Suporta tema claro/escuro com base na preferência salva no localStorage
 * ou na preferência do sistema operacional do usuário.
 */
export function Catalog() {
    const [categorias] = useState<Categoria[]>(cat());
    const [produtos] = useState<Produto[]>(prod());

    // Lê o tema salvo no localStorage ou usa a preferência do sistema como fallback
    const [isDark] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    });

    // Aplica ou remove a classe 'dark' no <html> para ativar o tema via Tailwind
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

            {/* Container centralizado: full width no mobile, 33% no desktop */}
            <div className='lg:w-2/6 w-full flex flex-col p-5'>

                {/* Barra de pesquisa com ícone posicionado de forma absoluta */}
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

                {/* Lista horizontal de categorias com scroll no mobile */}
                <div className='flex gap-4 overflow-x-auto pb-2 -mb-2'>
                    {categorias.map((categoria) => {
                        // Resolve o ícone dinamicamente a partir do nome string
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

                <div className='text-2xl font-bold py-6'>
                    <h2 className='text-zinc-700 dark:text-zinc-300'>Cardápio</h2>
                </div>

                {/* Grid de produtos: 2 colunas fixas dentro do container estreito */}
                <div className='grid grid-cols-2 gap-4'>
                    {produtos.map((produto) => (
                        <div
                            key={produto.id}
                            className='bg-white dark:bg-slate-900 rounded-2xl border border-zinc-100 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all'
                        >
                            <img
                                className='w-full h-32 object-cover'
                                src={produto.imagem}
                                alt={produto.nome}
                            />
                            <div className='p-3 flex flex-col grow'>
                                <h3 className='font-bold text-sm text-zinc-800 dark:text-zinc-100 line-clamp-1'>
                                    {produto.nome}
                                </h3>
                                <p className='text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2'>
                                    {produto.descricao}
                                </p>
                                {/* Rodapé do card: preço à esquerda, botão de adicionar à direita */}
                                <div className='mt-auto pt-3 flex items-center justify-between'>
                                    <span className='font-bold text-orange-500 text-base'>
                                        R$ {produto.valor.toFixed(2).replace('.', ',')}
                                    </span>
                                    <button className='bg-orange-500 hover:bg-orange-600 active:scale-95 text-white text-xs font-bold px-3 py-1.5 rounded-xl transition-all'>
                                        + Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
