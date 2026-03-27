import { Outlet, useLocation } from 'react-router-dom';
import { ClientHeader } from './ClientHeader';
import { ClientCartHeader } from './ClientCartHeader';

export function ClientLayout() {
  const location = useLocation();
  const noCarrinho = location.pathname === '/Cart';

  return (
    <div>
      {noCarrinho ? <ClientCartHeader /> : <ClientHeader />}
      <main>
        <Outlet />
      </main>
    </div>
  );
}