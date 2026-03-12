import { Link, useLocation } from 'react-router-dom';

export function Footer() {
  const location = useLocation();

  const getStyle = (path: string) => 
    `flex flex-col items-center gap-1 transition-all duration-300 w-1/3 ${
      location.pathname === path ? 'text-sky-500' : 'text-zinc-400'
    }`;

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-zinc-950/90 backdrop-blur-xl border-t border-zinc-800/50 p-4 lg:hidden z-50">
      <nav className="max-w-6xl mx-auto flex justify-around items-center">
        <Link to="/home" className={getStyle('/home')}>
          <span className="text-xs font-bold uppercase tracking-widest">Site</span>
        </Link>

        <Link to="/" className={getStyle('/')}>
          <span className="text-xs font-bold uppercase tracking-widest">Produtos</span>
        </Link>

        <Link to="/SalesOverview" className={getStyle('/SalesOverview')}>
          <span className="text-xs font-bold uppercase tracking-widest">Finanças</span>
        </Link>
      </nav>
    </footer>
  );
}