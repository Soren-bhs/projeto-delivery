const express = require('express');
const cors = require('cors');
const db = require('./src/database/db'); // seu arquivo da foto!

const app = express();
app.use(cors());
app.use(express.json());

// ROTA PARA BUSCAR PRODUTOS
app.get('/produtos', async (req, res) => {
    const [rows] = await db.query('SELECT * FROM produtos');
    res.json(rows);
});

// ROTA PARA SALVAR PRODUTO
app.post('/produtos', async (req, res) => {
    const { nome, descricao, valor, imagem } = req.body;
    await db.query(
        'INSERT INTO produtos (nome, descricao, preco, imagem) VALUES (?, ?, ?, ?)',
        [nome, descricao, valor, imagem]
    );
    res.sendStatus(201);
});

app.listen(3001, () => console.log("Servidor rodando na porta 3001"));