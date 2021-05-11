const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "meuguiadb",
    insecureAuth: true,
  });
  
  app.use(express.json());
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  
  app.get("/api/getCidade", (req, res) => {
    var cidade = req.query.buscaCidade;
    cidade = "%" + cidade + "%";
    //console.log(cidade)
    const sqlSelect = "SELECT Local.idLocal, Local.nome, Local.descricao, Cidade.nome AS cidade, Cidade.uf FROM Local, Cidade WHERE Cidade.idCidade = Local.Cidade_idCidade AND Cidade.nome LIKE 'Campo Mourão';";
    db.query(sqlSelect, [cidade], (err, result) => {
      res.send(result);
    });
  });

  app.get("/api/getTag", (req, res) => {
    var tag = req.query.buscaTag;
    tag = "%" + tag + "%";
    //console.log(tag)
    const sqlSelect = "SELECT Local.idLocal, Local.nome, Local.descricao, Cidade.nome AS cidade, Cidade.uf FROM Local, Cidade, local_has_tag WHERE Local.idLocal = local_has_tag.Local_idLocal AND local_has_tag.Tag_idTag = (SELECT idTag FROM tag WHERE nome LIKE ?);";
    db.query(sqlSelect, [tag], (err, result) => {
      res.send(result);
    });
  });
  
  app.post("/api/insertLocal", (req, res) => {
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

  app.post("/api/insertCidade", (req, res) => {
    const nome = req.body.nome;
    const uf = req.body.uf;
    const sqlCidade = "INSERT INTO Cidade (nome, uf) VALUES (?, ?);";
    db.query(sqlCidade, [nome, uf], (err, result) => {
      if (!err) {
        res.json({ nome, uf });
      } else {
        //res.status(400).json({ status: "bad request" });
      }
    });
  });

module.exports = app;