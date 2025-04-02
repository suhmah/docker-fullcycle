import mysql from "mysql2/promise";

// Criando pool de conexões para melhor performance
const db = mysql.createPool({
  host: "mysql",
  user: "root",
  password: "root",
  database: "fullcycle"
});

// Criando a tabela automaticamente
(async () => {
  const connection = await db.getConnection();
  await connection.query(`
    CREATE TABLE IF NOT EXISTS people (
      id INT AUTO_INCREMENT PRIMARY KEY, 
      name VARCHAR(255) NOT NULL
    )
  `);
  connection.release();
})();

export default db;
