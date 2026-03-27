export function Cart() {
    return (
        <div className='flex justify-center min-h-screen bg-zinc-50 dark:bg-slate-950 transition-colors duration-300'>
            <div className='lg:w-2/6 w-full flex flex-col p-5'>
                <p className='text-zinc-500 dark:text-zinc-400'>Seu carrinho está vazio.</p>
            </div>
        </div>
    );
}
