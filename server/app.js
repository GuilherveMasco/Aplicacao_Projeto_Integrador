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

//controllerCidade
app.get("/api/getCidade", (req, res) => {
  var cidade = req.query.buscaCidade;
  cidade = "%" + cidade + "%";
  const sqlSelect =
    "SELECT Local.idLocal, Local.nome, Local.descricao, Cidade.nome AS cidade, Cidade.uf FROM Local, Cidade WHERE Cidade.idCidade = Local.Cidade_idCidade AND Cidade.nome LIKE ?;";
  db.query(sqlSelect, [cidade], (err, result) => {
    res.send(result);
  });
});

app.post("/api/insertCidade", (req, res) => {
  const nome = req.body.nome;
  const uf = req.body.uf;
  const sqlCidade = "INSERT INTO Cidade (nome, uf) VALUES (?, ?);";
  db.query(sqlCidade, [nome, uf], (err, result) => {
    if (!err) {
      res.json({ nome, uf });
    } else {
    }
  });
});

app.post("/api/rmCidade", (req, res) => {
  const idCidade = req.body.idCidade;
  const sqlDelete1 = "DELETE Comentario FROM Local, Comentario WHERE Local.Cidade_idCidade = ? AND Comentario.Local_idLocal = Local.idLocal;";
  db.query(sqlDelete1, [idCidade], (err, result) => {
    if (!err) {
    } else {
    }
  });
  const sqlDelete2 =
    "DELETE local_has_tag FROM Local, local_has_tag WHERE Local.Cidade_idCidade = ? AND local_has_tag.Local_idLocal = Local.idLocal;";
  db.query(sqlDelete2, [idCidade], (err, result) => {
    if (!err) {
    } else {
    }
  });
  const sqlDelete3 = "DELETE FROM Local WHERE Cidade_idCidade = ?;";
  db.query(sqlDelete3, [idCidade], (err, result) => {
    if (!err) {
    } else {
    }
  });
  const sqlDelete4 = "DELETE FROM Cidade WHERE idCidade = ?;";
  db.query(sqlDelete4, [idCidade], (err, result) => {
    if (!err) {
    } else {
    }
  });
});

app.get("/api/listCidades", (req, res) => {
  const sqlSelect = "SELECT * FROM Cidade;";
  db.query(sqlSelect, [], (err, result) => {
    res.send(result);
  });
});

//controllerTag
app.get("/api/getTag", (req, res) => {
  var tag = req.query.buscaTag;
  tag = "%" + tag + "%";
  const sqlSelect =
    "SELECT Local.idLocal, Local.nome, Local.descricao, Cidade.nome AS cidade, Cidade.uf FROM Local, Cidade, local_has_tag WHERE Local.idLocal = local_has_tag.Local_idLocal AND local_has_tag.Tag_idTag = (SELECT idTag FROM tag WHERE nome LIKE ?) AND Local.Cidade_idCidade = Cidade.idCidade;";
  db.query(sqlSelect, [tag], (err, result) => {
    res.send(result);
  });
});

app.get("/api/getTagPage", (req, res) => {
  var idLocal = req.query.buscaLocal;
  const sqlSelect =
    "SELECT DISTINCT Tag.idTag, Tag.nome FROM Tag, Local, local_has_tag WHERE local_has_tag.Local_idLocal = ? AND Tag.idTag = local_has_tag.Tag_idTag;";
  db.query(sqlSelect, [idLocal], (err, result) => {
    res.send(result);
  });
});

//controllerLocal
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
      }
    });
    db.query(sqlFks, [nome, tag], (err, result) => {
      if (err) {
      }
    });
  }
});

app.get("/api/getLocal", (req, res) => {
  var idLocal = req.query.buscaLocal;
  const sqlSelect =
    "SELECT Local.idLocal, Local.nome, Local.descricao, Local.localizacao, Local.referencia, Cidade.nome AS cidade, Cidade.uf FROM Local, Cidade WHERE Local.idLocal = ? AND Cidade.idCidade = Local.Cidade_idCidade;";
  db.query(sqlSelect, [idLocal], (err, result) => {
    res.send(result);
  });
});

app.get("/api/listLocais", (req, res) => {
  const sqlSelect = "SELECT * FROM Local;";
  db.query(sqlSelect, [], (err, result) => {
    res.send(result);
  });
});

app.post("/api/rmLocal", (req, res) => {
  const idLocal = req.body.idLocal;
  const sqlDelete1 = "DELETE FROM local_has_tag WHERE Local_idLocal = ?;";
  db.query(sqlDelete1, [idLocal], (err, result) => {
    if (!err) {
    } else {
    }
  });
  const sqlDelete2 = "DELETE FROM Local WHERE idLocal = ?;";
  db.query(sqlDelete2, [idLocal], (err, result) => {
    if (!err) {
      res.json({ idLocal });
    } else {
    }
  });
});

//controllerComentario
app.get("/api/getComentarios", (req, res) => {
  var idLocal = req.query.buscaLocal;
  const sqlSelect = "SELECT * FROM Comentario WHERE Comentario.Local_idLocal = ? ORDER BY idComentario DESC;";
  db.query(sqlSelect, [idLocal], (err, result) => {
    res.send(result);
  });
});

app.post("/api/insertComentario", (req, res) => {
  var idLocal = req.body.buscaLocal;
  const autor = req.body.autor;
  if (autor == "") {
    autor = "Anônima(o)";
  }
  const conteudo = req.body.conteudo;
  const sqlInsert = "INSERT INTO Comentario (autor, conteudo, Comentario.Local_idLocal) VALUES (?, ?, ?);";
  db.query(sqlInsert, [autor, conteudo, idLocal], (err, result) => {
    if (!err) {
      res.json({ autor, conteudo });
    } else {
    }
  });
});

app.get("/api/listComentarios", (req, res) => {
  const sqlSelect = "SELECT * FROM Comentario";
  db.query(sqlSelect, [], (err, result) => {
    res.send(result);
  });
});

//controller imagens
app.get("/api/getImagens", (req, res) => {
  var idLocal = req.query.buscaLocal;
  const sqlSelect = "SELECT * FROM imagem WHERE imagem.Local_idLocal = ?;";
  db.query(sqlSelect, [idLocal], (err, result) => {
    res.send(result);
    console.log("resultado da requisição das imagens", result);
  });
});

app.post("/api/insertImagem", (req, res) => {
  var idLocal = req.body.buscaLocal;
  const imagem = req.body.novaImagem;
  console.log("imagem recebida:", imagem);
  const sqlInsertImagem = "INSERT INTO Imagem (imagem, Local_idLocal) VALUES (?, ?);";
  db.query(sqlInsertImagem, [imagem, idLocal], (err, result) => {
    if (!err) {
      //res.json({ autor, conteudo });
    }
  });
});
app.post("/api/rmComentario", (req, res) => {
  const idComentario = req.body.idComentario;
  const sqlDelete = "DELETE FROM Comentario WHERE idComentario = ?;";
  db.query(sqlDelete, [idComentario], (err, result) => {
    if (!err) {
      res.json({ idComentario });
    } else {
    }
  });
});

module.exports = app;
