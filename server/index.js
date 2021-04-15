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
    database: "meuguiadb",
    insecureAuth : true
});

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/insert', (req, res) => {

    const nome = req.body.nome;
    const descricao = req.body.descricao;
    const localizacao = req.body.localizacao;
    const referencia = req.body.referencia;
    const cidade = req.body.cidade;
    const uf = req.body.uf;

    const sqlInsert = "INSERT INTO Local (nome, descricao, localizacao, referencia, Cidade_idCidade) VALUES (?, ?, ?, ?, (SELECT(idCidade) FROM Cidade WHERE nome = ? AND uf = ?));";
    db.query(sqlInsert, [nome, descricao, localizacao, referencia, cidade, uf], (err, result) => {
        if(!err){
            res.json({ nome, descricao, localizacao, referencia, cidade, uf})
        }else{
            res.status(400).json({ status: "bad request" })
        }
    });
});

app.listen(3001, () => {
    console.log("running on port 3001");
});