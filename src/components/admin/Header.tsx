import { Link, useLocation } from 'react-router-dom';

export function Header() {
    const location = useLocation();

    const linkStyle = (path: string) => 
        `transition-all duration-300 font-medium text-sm uppercase tracking-wider ${
            location.pathname === path 
            ? 'text-sky-500' 
            : 'text-zinc-400 hover:text-white'
        }`;

    return (
        <div className='border-b border-zinc-700/50 bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-50'>
            
            <header className="px-6 py-4 max-w-3/4 lg:mx-auto lg:flex justify-between items-center">
                
                <Link to="/" className="group">
                    <h1 className="text-xl lg:text-2xl font-black text-sky-500 tracking-tighter transition-transform group-hover:scale-105">
                        SOREN<span className="text-zinc-100 group-hover:text-white transition-colors">DELIVERY</span>
                    </h1>
                </Link>

                <nav className='hidden lg:flex lg:gap-10 items-center'>
                    <Link to="/Catalog" className={linkStyle('/Catalog')}>
                        Delivery
                    </Link>
                    <Link to="/SalesOverview" className={linkStyle('/SalesOverview')}>
                        Vendas
                    </Link>
                    
                    <Link 
                        to="/" 
                        className={`px-4 py-2 rounded-full border transition-all ${
                            location.pathname === '/' // Agora brilha quando estiver no Admin
                            ? 'bg-sky-500/10 border-sky-500/50 text-sky-500'
                            : 'border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white'
                        } text-xs font-bold uppercase tracking-widest`}
                    >
                        Seus produtos
                    </Link>
                </nav>

                <div className="hidden lg:hidden text-zinc-400">
                    <button className="p-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>

            </header>
        </div>
    )
}