import { Outlet, useLocation } from 'react-router-dom';
import { ClientHeader } from './ClientHeader';
import { ClientCartHeader } from './ClientCartHeader';
import { ClientProductHeader } from './ClientProductHeader';
import { prod } from '../../types/produto';

export function ClientLayout() {
  const location = useLocation();

  const noCarrinho = location.pathname === '/Cart';

  // Verifica se está numa página de produto e extrai o id da URL
  const noProduto = location.pathname.startsWith('/Product/');
  const idProduto = noProduto ? Number(location.pathname.split('/')[2]) : null;
  const nomeProduto = idProduto ? (prod().find(p => p.id === idProduto)?.nome ?? '') : '';

  return (
    <div>
      {noCarrinho && <ClientCartHeader />}
      {noProduto && <ClientProductHeader nome={nomeProduto} />}
      {!noCarrinho && !noProduto && <ClientHeader />}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
