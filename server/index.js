const express = require('express');
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

app.get('/', (req, res) => {
    //const queryId = "SELECT idCidade FROM cidade WHERE nome = 'Campo Mourão';"
    const sqlInsert = "INSERT INTO 'local' ('nome', 'descricao', 'localizacao', 'Cidade_idCidade') VALUES ('Praça São José', 'Uma pracinha show', 'na praça', 1);"
    db.query(sqlInsert, (err, result) => {
        res.send("nothing to see here");
    });
});

app.listen(3001, () => {
    console.log("running on port 3001");
});