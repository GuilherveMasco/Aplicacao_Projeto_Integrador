const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "turistandodb",
    insecureAuth : true
});

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/insert', (req, res) => {

    const nome = req.body.nome;
    const descricao = req.body.descricao;
    const localizacao = req.body.localizacao;
    const cidade = req.body.cidade;
    const uf = req.body.uf;

    const sqlInsert = "INSERT INTO local (nome, descricao, localizacao, cidade, uf) VALUES (?, ?, ?, ?, ?);";
    db.query(sqlInsert, [nome, descricao, localizacao, cidade, uf], (err, result) => {
        console.log(result);
    });
});

app.listen(3001, () => {
    console.log("running on port 3001");
});