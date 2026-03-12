import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function AdminLayout() {
    return (

        <div className="min-h-screen bg-black text-zinc-100 flex flex-col font-sans antialiased">
            
            <Header />

            <main className="flex-1 pb-10 p-4 lg:p-8 lg:py-0 w-full max-w-360 mx-auto transition-all duration-300">
                <Outlet />
            </main>

            <div className="border-t border-zinc-800/50">
                <Footer />
            </div>
        </div>
    )
}