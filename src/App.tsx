import { Routes, Route } from 'react-router-dom';

import { AdminLayout as AdminLayout } from './components/admin/AdminLayout';
import { ClientLayout } from './components/client/ClientLayout'; 

import { ProductRegistration } from './pages/admin/ProductRegistration';
import { SalesOverview } from './pages/admin/SalesOverview';
import { Catalog } from './pages/client/Catalog';
import { Cart } from './pages/client/Cart';

export default function App() {
  return (
    <Routes>
      {/* --- ROTAS DO CLIENTE --- */}
      <Route element={<ClientLayout />}>
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Cart" element={<Cart />} />
      </Route>

      {/* --- ROTAS DO ADMIN --- */}
      <Route element={<AdminLayout />}>
        <Route path="/" element={<ProductRegistration />} />
        <Route path="/SalesOverview" element={<SalesOverview />} />
      </Route>
    </Routes>
  );
}