import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
    children: ReactNode
}

export function Layout({children}: LayoutProps) {
    return (

        <div className="min-h-screen bg-black text-zinc-100 flex flex-col font-sans antialiased">
            
            <Header />

            <main className="flex-1 pb-10 p-4 lg:p-8 lg:py-0 w-full max-w-360 mx-auto transition-all duration-300">
                {children}
            </main>

            <div className="border-t border-zinc-800/50">
                <Footer />
            </div>
        </div>
    )
}