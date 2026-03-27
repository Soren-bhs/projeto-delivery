const mysql = require('mysql2');

// Cria a conexão com os dados que você usou na extensão
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'PcC0202#', // A mesma que você usou na imagem
  database: 'delivery_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Exporta como "promise" para você usar o await/async no JS
module.exports = pool.promise();