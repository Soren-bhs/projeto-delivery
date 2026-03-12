import { Outlet } from 'react-router-dom';
import { ClientHeader } from './ClientHeader';

export function ClientLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ClientHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
}