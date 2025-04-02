import express from "express";
import db from "./db.js";

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  try {
    const name = `User_${Math.floor(Math.random() * 1000)}`;

    // Inserindo nome no banco
    await db.execute("INSERT INTO people (name) VALUES (?)", [name]);

    // Buscando nomes cadastrados
    const [rows] = await db.execute("SELECT name FROM people");

    let html = "<h1>Full Cycle Rocks!</h1><ul>";
    rows.forEach((row) => {
      html += `<li>${row.name}</li>`;
    });
    html += "</ul>";

    res.send(html);
  } catch (error) {
    console.error("Erro ao conectar ao banco:", error);
    res.status(500).send("Erro interno no servidor");
  }
});
app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});
