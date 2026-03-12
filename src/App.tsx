import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/admin/Layout'
import { ProductRegistration } from './pages/admin/ProductRegistration';
import { SalesOverview } from './pages/admin/SalesOverview';
import { Catalog } from './pages/client/Catalog';

export default function App() {
  return (
    <Layout>
      <Routes>
        {/* Agora o Admin é a página principal */}
        <Route path="/" element={<ProductRegistration />} />
        
        {/* Padronizando para letras minúsculas e nomes consistentes */}
        <Route path="/SalesOverview" element={<SalesOverview />} />
        <Route path="/Catalog" element={<Catalog />} />
      </Routes>
    </Layout>
  );
}