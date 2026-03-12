import { Outlet } from 'react-router-dom';
import { ClientHeader } from './ClientHeader';

export function ClientLayout() {
  return (
    <div>
      <ClientHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
}