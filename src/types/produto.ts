
import * as Icons from 'lucide-react';

type IconName = keyof typeof Icons;

export type Categoria = {
    nome: string;
    icone: IconName;
}

export type Produto = {
    id: number;
    nome: string;
    descricao: string;
    valor: number;
    imagem: string;
    categoria: string;
}

export function cat(): Categoria[] {
    return [
        { nome: "Pizzas", icone: "Pizza" },
        { nome: "Bebidas", icone: "Beer" },
        { nome: "Doces", icone: "Dessert" },
        { nome: "Lanches", icone: "Sandwich" },
    ];
}

export const CATEGORIAS = ["Categoria", "Pizzas", "Bebidas", "Doces", "Lanches"];

export function prod(): Produto[] {
    return [
        {
            id: 1,
            nome: "Pizza Margherita",
            descricao: "Pizza clássica com molho de tomate, mussarela e manjericão fresco",
            valor: 45.90,
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH5hfEUMPzjXMou1vLBOiPsLuN3cBhPJml3w&s",
            categoria: "Pizzas"
        },
        {
            id: 2,
            nome: "Coca-Cola Lata 350ml",
            descricao: "Refrigerante gelado, lata de 350ml",
            valor: 5.99,
            imagem: "https://files.tiker.com.br/losmuchachos/produtos/lata-de-cocacola-com-gelo-esma-1764184485566-00e7bdc5.webp",
            categoria: "Bebidas"
        },
        {
            id: 3,
            nome: "Brigadeiro Gourmet",
            descricao: "Brigadeiro artesanal com granulado belga e recheio cremoso",
            valor: 8.50,
            imagem: "https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/585f4b6718cb3fad169e44b00868e5e5.jpg?itok=fmi31RTw",
            categoria: "Doces"
        },
        {
            id: 4,
            nome: "X-Burguer Duplo",
            descricao: "Dois blends de carne, queijo cheddar, alface, tomate e molho especial",
            valor: 32.90,
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPJyZv8-FULGu9PWRfsf2RiO1Bg06-tmV-lg&s",
            categoria: "Lanches"
        }
    ]
}

// import { Produto, Categoria, CATEGORIAS, prod } from '../types/produto';