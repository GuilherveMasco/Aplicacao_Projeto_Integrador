const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "meuguiadb",
  insecureAuth: true,
});

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (get, res) => {
  const sqlSelect = "SELECT * FROM local";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  const nome = req.body.nome;
  const descricao = req.body.descricao;
  const localizacao = req.body.localizacao;
  const referencia = req.body.referencia;
  const cidade = req.body.cidade;
  const uf = req.body.uf;
  const tags = req.body.tags;

  var tagsArr = tags.split(",");

  const sqlLocal =
    "INSERT INTO Local (nome, descricao, localizacao, referencia, Cidade_idCidade) VALUES (?, ?, ?, ?, (SELECT(idCidade) FROM Cidade WHERE nome = ? AND uf = ?));";
  db.query(sqlLocal, [nome, descricao, localizacao, referencia, cidade, uf], (err, result) => {
    if (!err) {
      res.json({ nome, descricao, localizacao, referencia, cidade, uf });
    } else {
      res.status(400).json({ status: "bad request" });
    }
  });

  const sqlTags =
    "INSERT INTO Tag (nome) SELECT * FROM(SELECT lower(?) AS nome) AS tmp WHERE NOT EXISTS (SELECT * FROM Tag WHERE nome = lower(?)) LIMIT 1;";
  const sqlFks =
    "INSERT INTO local_has_tag (Local_idLocal, Tag_idTag) VALUES ((SELECT idLocal FROM Local WHERE nome = ?), (SELECT idTag FROM Tag WHERE nome = ?));";
  for (var i = 0; i < tagsArr.length; i++) {
    var tag = tagsArr[i];
    db.query(sqlTags, [tag, tag], (err, result) => {
      if (err) {
        //res.status(400).json({ status: "bad request" })
      }
    });
    db.query(sqlFks, [nome, tag], (err, result) => {
      if (err) {
        //res.status(400).json({ status: "bad request" })
      }
    });
  }
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
