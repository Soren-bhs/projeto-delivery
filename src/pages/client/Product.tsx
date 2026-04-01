import { useParams, Link } from 'react-router-dom';
import { prod } from '../../types/produto';

/**
 * Página de detalhe de um produto.
 * Recebe o id do produto pela URL (/Product/:id) e exibe suas informações completas.
 */
export function Product() {
    const { id } = useParams();

    // Busca o produto pelo id recebido na URL
    const produto = prod().find((p) => p.id === Number(id));

    // Produto não encontrado
    if (!produto) {
        return (
            <div className='flex justify-center min-h-screen bg-zinc-50 dark:bg-slate-950 transition-colors duration-300'>
                <div className='lg:w-2/6 w-full flex flex-col items-center justify-center p-5 gap-4'>
                    <p className='text-zinc-500 dark:text-zinc-400 text-lg'>Produto não encontrado.</p>
                    <Link to="/Catalog" className='text-orange-500 font-bold hover:underline'>
                        Voltar ao catálogo
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className='flex justify-center min-h-screen bg-zinc-50 dark:bg-slate-950 transition-colors duration-300'>
            <div className='lg:w-2/6 w-full flex flex-col'>

                {/* Imagem do produto */}
                <img
                    className='w-full h-64 object-cover'
                    src={produto.imagem}
                    alt={produto.nome}
                />

                <div className='flex flex-col p-5 gap-4'>

                    {/* Categoria */}
                    <span className='text-xs font-bold text-orange-500 uppercase tracking-widest'>
                        {produto.categoria}
                    </span>

                    {/* Nome */}
                    <h1 className='text-2xl font-black text-zinc-800 dark:text-zinc-100'>
                        {produto.nome}
                    </h1>

                    {/* Descrição */}
                    <p className='text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed'>
                        {produto.descricao}
                    </p>

                    {/* Preço e botão */}
                    <div className='mt-auto flex items-center justify-between pt-4 border-t border-zinc-200 dark:border-slate-800'>
                        <span className='text-3xl font-black text-orange-500'>
                            R$ {produto.valor.toFixed(2).replace('.', ',')}
                        </span>
                        <button className='bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold px-6 py-3 rounded-2xl transition-all'>
                            Adicionar ao carrinho
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
