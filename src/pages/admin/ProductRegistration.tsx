import { useState } from "react"
import type { Produto } from '../../types/produto';
import { CATEGORIAS, prod } from '../../types/produto';

/**
 * Página de administração para gerenciamento do cardápio.
 * Permite cadastrar, editar e excluir produtos.
 *
 * Layout desktop: 3 colunas (formulário | preview | dashboard).
 * Layout mobile: empilhado verticalmente.
 */
export function ProductRegistration() {

    // --- ESTADOS DO FORMULÁRIO DE CADASTRO ---
    const [id, setId] = useState<number | "">("");
    const [nome, setNome] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [imagem, setImagem] = useState<string>("");
    const [valor, setValor] = useState<number | "">("");
    const [categoria, setCategoria] = useState<string>(CATEGORIAS[0]);
    const [dropdownAberto, setDropdownAberto] = useState(false);

    // Lista de produtos exibida no grid. Inicializada com dados de exemplo.
    const [produtos, setProdutos] = useState<Produto[]>(prod());

    // --- ESTADOS DO MODO DE EDIÇÃO INLINE ---
    // Controla qual produto está sendo editado. null = nenhum.
    const [idEditando, setIdEditando] = useState<number | null>(null);
    const [editNome, setEditNome] = useState("");
    const [editDesc, setEditDesc] = useState("");
    const [editPreco, setEditPreco] = useState<number | "">("");

    // --- LÓGICA DE NEGÓCIO ---

    /**
     * Valida os campos e adiciona um novo produto à lista.
     * Limpa o formulário após o cadastro bem-sucedido.
     */
    function adicionarProdutos() {
        if (!nome || !valor || !imagem || !descricao || !id) {
            alert("Preencha todos os campos corretamente.");
            return;
        }

        const novoProduto: Produto = {
            id: Number(id),
            nome,
            descricao,
            valor: Number(valor),
            imagem,
            categoria
        };

        setProdutos([...produtos, novoProduto]);
        setId(""); setNome(""); setDescricao(""); setImagem(""); setValor(""); setCategoria(CATEGORIAS[0]);
    }

    /**
     * Aplica as alterações feitas no modo de edição inline.
     * Mantém o valor original caso o campo tenha sido deixado em branco.
     * @param id - ID do produto a ser atualizado.
     */
    function confirmarAlteracao(id: number) {
        const produtosAtualizados = produtos.map(p => {
            if (p.id === id) {
                return {
                    ...p,
                    nome: editNome || p.nome,
                    descricao: editDesc || p.descricao,
                    valor: editPreco !== "" ? Number(editPreco) : p.valor
                };
            }
            return p;
        });
        setProdutos(produtosAtualizados);
        setIdEditando(null);
    }

    /**
     * Remove um produto da lista pelo seu ID.
     * @param id - ID do produto a ser excluído.
     */
    function deletarProduto(id: number) {
        const novaLista = produtos.filter((produto) => produto.id !== id);
        setProdutos(novaLista);
    }

    // --- DADOS DERIVADOS PARA O DASHBOARD ---
    const totalProdutos = produtos.length;
    const ultimoAdicionado = produtos.length > 0 ? produtos[produtos.length - 1].nome : "Nenhum";

    return (
        <div className="min-h-screen bg-black text-white p-4 lg:p-8">
            <div className="max-w-7xl mx-auto">

                {/* Cabeçalho da página */}
                <div className="flex justify-center items-center mb-8">
                    <div className="h-px bg-zinc-800 grow"></div>
                    <h1 className="text-3xl font-black text-sky-500 tracking-tighter mx-4">
                        PÁGINA<span className="text-white"> DE PRODUTOS</span>
                    </h1>
                    <div className="h-px bg-zinc-800 grow"></div>
                </div>

                {/* Painel principal: 3 colunas no desktop, empilhado no mobile */}
                <div className="p-6 border border-zinc-800 rounded-2xl bg-zinc-900/50 shadow-2xl">
                    <h2 className="text-xl font-bold mb-6 text-zinc-100 flex items-center gap-2">
                        <span className="w-2 h-6 bg-sky-500 rounded-full"></span>
                        Gerenciar Cardápio
                    </h2>

                    <div className="flex flex-col lg:flex-row gap-8">

                        {/* Coluna 1: Formulário de cadastro de novo produto */}
                        <div className="w-full lg:w-1/3 flex flex-col gap-3">
                            <label className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Novo Produto</label>
                            <input
                                className="w-full border border-zinc-700 p-3 rounded-lg bg-zinc-950 text-white focus:ring-2 ring-sky-500 outline-none transition-all"
                                type="number" placeholder="ID (ex: 102)" value={id}
                                onChange={(e) => setId(e.target.value === "" ? "" : Number(e.target.value))}
                            />
                            <input
                                className="w-full border border-zinc-700 p-3 rounded-lg bg-zinc-950 text-white focus:ring-2 ring-sky-500 outline-none"
                                type="text" placeholder="Nome do Produto" value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                            <textarea
                                className="w-full border border-zinc-700 p-3 rounded-lg bg-zinc-950 text-white focus:ring-2 ring-sky-500 outline-none h-24 resize-none"
                                placeholder="Descrição do produto..." value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                            />
                            <input
                                className="w-full border border-zinc-700 p-3 rounded-lg bg-zinc-950 text-white focus:ring-2 ring-sky-500 outline-none"
                                type="number" placeholder="Preço (R$)" value={valor}
                                onChange={(e) => setValor(e.target.value === "" ? "" : Number(e.target.value))}
                            />
                            <input
                                className="w-full border border-zinc-700 p-3 rounded-lg bg-zinc-950 text-white focus:ring-2 ring-sky-500 outline-none"
                                type="text" placeholder="URL da Imagem" value={imagem}
                                onChange={(e) => setImagem(e.target.value)}
                            />
                            {/* Dropdown customizado de categorias — estilize à vontade */}
                            <div className="relative w-full">
                                {/* Botão que abre/fecha a lista */}
                                <div
                                    className="w-full border border-zinc-700 p-3 rounded-lg bg-zinc-950 text-white cursor-pointer flex justify-between items-center"
                                    onClick={() => setDropdownAberto(!dropdownAberto)}
                                >
                                    <span>{categoria}</span>
                                    <span className="text-zinc-400 text-xs">{dropdownAberto ? "▲" : "▼"}</span>
                                </div>

                                {/* Lista de opções — só aparece quando dropdownAberto for true */}
                                {dropdownAberto && (
                                    <ul className="absolute z-10 w-full mt-1 bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden">
                                        {CATEGORIAS.filter((cat) => cat !== "Categoria").map((cat) => (
                                            <li
                                                key={cat}
                                                className="p-3 text-white cursor-pointer hover:bg-zinc-700 transition-colors"
                                                onClick={() => {
                                                    setCategoria(cat);
                                                    setDropdownAberto(false);
                                                }}
                                            >
                                                {cat}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <button
                                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-black py-4 rounded-xl mt-2 transition-all active:scale-95 shadow-lg shadow-emerald-900/20"
                                onClick={adicionarProdutos}
                            >
                                CADASTRAR PRODUTO
                            </button>
                        </div>

                        {/* Coluna 2: Preview em tempo real — reflete o que o cliente verá */}
                        <div className="w-full lg:w-1/3">
                            <label className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest block mb-3">Prévia do Cliente</label>
                            {/* sticky top-4 mantém o preview visível enquanto o admin rola a página */}
                            <div className="border border-zinc-700 rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl sticky top-4">
                                {imagem ? (
                                    <img className="w-full h-56 object-cover" src={imagem} alt="Preview" />
                                ) : (
                                    <div className="w-full h-56 bg-zinc-800 flex items-center justify-center text-zinc-600 italic">Sem imagem disponível</div>
                                )}
                                <div className="p-5">
                                    <h3 className="text-2xl font-black text-white truncate">{nome || "Nome do Produto"}</h3>
                                    <p className="text-zinc-400 text-sm mt-1 line-clamp-2 h-10">{descricao || "A descrição aparecerá aqui conforme você digita..."}</p>
                                    <div className="flex justify-between items-center mt-6">
                                        <p className="text-emerald-400 font-bold text-3xl">
                                            R$ {valor ? Number(valor).toFixed(2).replace('.', ',') : "0,00"}
                                        </p>
                                        <span className="bg-zinc-800 text-[10px] px-2 py-1 rounded text-zinc-400"># {id || "0"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Coluna 3: Dashboard de resumo — visível apenas no desktop */}
                        <div className="hidden lg:flex w-full lg:w-1/3 flex-col gap-4">
                            <label className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Resumo do Inventário</label>

                            <div className="bg-zinc-950 p-5 rounded-xl border border-zinc-800">
                                <p className="text-zinc-500 text-xs uppercase font-bold">Total Cadastrado</p>
                                <p className="text-4xl font-black text-sky-500">{totalProdutos}</p>
                            </div>

                            <div className="bg-zinc-950 p-5 rounded-xl border border-zinc-800">
                                <p className="text-zinc-500 text-xs uppercase font-bold">Última Adição</p>
                                <p className="text-lg font-bold text-white truncate">{ultimoAdicionado}</p>
                            </div>

                            <div className="mt-4 p-5 bg-amber-500/5 border border-amber-500/20 rounded-xl">
                                <h4 className="text-amber-500 font-bold text-sm mb-3 flex items-center gap-2">
                                    <span>⚠️</span> Dicas Pro
                                </h4>
                                <ul className="text-zinc-400 text-xs space-y-3">
                                    <li>• Utilize links diretos de imagens (JPG/PNG).</li>
                                    <li>• No campo preço, use ponto para decimais (ex: 15.90).</li>
                                    <li>• IDs devem ser únicos para evitar erros na listagem.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Grid de produtos cadastrados */}
                <div className="mt-12">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px bg-zinc-800 grow"></div>
                        <h4 className="text-2xl font-black text-emerald-500">PRODUTOS <span className="text-white">CADASTRADOS</span></h4>
                        <div className="h-px bg-zinc-800 grow"></div>
                    </div>

                    {/* 1 coluna no mobile, 2 no tablet, 4 no desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {produtos.map((produto) => (
                            <div key={produto.id} className="border border-zinc-800 rounded-xl bg-zinc-900 overflow-hidden flex flex-col hover:border-zinc-600 transition-colors">

                                {/* Alterna entre o card de visualização e o formulário de edição inline */}
                                {idEditando === produto.id ? (
                                    // Modo edição: exibe inputs para alterar nome, descrição e preço
                                    <div className="p-4 flex flex-col gap-3 bg-zinc-950 h-full">
                                        <h4 className="text-amber-500 font-bold text-sm">Editando #{produto.id}</h4>
                                        <input
                                            className="w-full border border-zinc-700 p-2 rounded bg-zinc-900 text-white text-sm"
                                            type="text" defaultValue={produto.nome}
                                            onChange={(e) => setEditNome(e.target.value)}
                                        />
                                        <textarea
                                            className="w-full border border-zinc-700 p-2 rounded bg-zinc-900 text-white text-sm h-16"
                                            defaultValue={produto.descricao}
                                            onChange={(e) => setEditDesc(e.target.value)}
                                        />
                                        <input
                                            className="w-full border border-zinc-700 p-2 rounded bg-zinc-900 text-white text-sm"
                                            type="number" defaultValue={produto.valor}
                                            onChange={(e) => setEditPreco(e.target.value === "" ? "" : Number(e.target.value))}
                                        />
                                        <div className="mt-auto pt-4 flex flex-col gap-2">
                                            <button
                                                className="w-full bg-emerald-500 text-white font-bold py-2 rounded-lg text-sm"
                                                onClick={() => confirmarAlteracao(produto.id)}
                                            >
                                                SALVAR
                                            </button>
                                            <button
                                                className="w-full text-zinc-500 text-xs hover:text-white"
                                                onClick={() => setIdEditando(null)}
                                            >
                                                CANCELAR
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    // Modo visualização: exibe imagem, nome, preço e ações
                                    <>
                                        <div className="relative h-40">
                                            <img className="w-full h-full object-cover" src={produto.imagem} alt={produto.nome} />
                                            <span className="absolute top-2 right-2 bg-black/70 px-2 py-1 rounded text-[10px] font-bold">ID: {produto.id}</span>
                                        </div>
                                        <div className="p-4 flex flex-col grow">
                                            <h4 className="text-lg font-bold text-white truncate">{produto.nome}</h4>
                                            <p className="text-zinc-500 text-xs line-clamp-2 mt-1">{produto.descricao}</p>
                                            <p className="mt-4 font-bold text-emerald-400 text-xl">R$ {produto.valor.toFixed(2).replace('.', ',')}</p>
                                            <div className="mt-auto pt-4 flex gap-2">
                                                {/* Botão editar: preenche os estados de edição com os valores atuais do produto */}
                                                <button
                                                    className="grow bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold py-2 rounded-lg transition-colors"
                                                    onClick={() => {
                                                        setIdEditando(produto.id);
                                                        setEditNome(produto.nome);
                                                        setEditDesc(produto.descricao);
                                                        setEditPreco(produto.valor);
                                                    }}
                                                >
                                                    EDITAR
                                                </button>
                                                <button
                                                    className="px-3 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white py-2 rounded-lg transition-all"
                                                    onClick={() => deletarProduto(produto.id)}
                                                >
                                                    🗑️
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
