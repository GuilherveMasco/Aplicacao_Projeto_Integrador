import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [referencia, setReferencia] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [tags, setTags] = useState("");
  const [localsListCidade, setLocalsListCidade] = useState([]);
  const [buscaCidade, setBuscaCidade] = useState("");
  const [buscaTag, setBuscaTag] = useState("");
  const [localsListTag, setLocalsListTag] = useState([]);

  const getSearchCidade = () => {
    Axios.get("http://localhost:3001/api/getCidade", {
      params: {
        buscaCidade: buscaCidade,
      },
    }).then((res) => {
      const listLocalsCidade = res.data.map((local) => {
        return (
          <h6 key={local.nome}>
            Local: {local.nome} | Descrição: {local.descricao}
          </h6>
        );
      });
      setLocalsListCidade(listLocalsCidade);
    });
  };

  const getSearchTag = () => {
    Axios.get("http://localhost:3001/api/getTag", {
      params: {
        buscaTag: buscaTag,
      },
    }).then((res) => {
      const listLocalsTag = res.data.map((local) => {
        return (
          <h6 key={local.nome}>
            Local: {local.nome} | Descrição: {local.descricao}
          </h6>
        );
      });
      setLocalsListTag(listLocalsTag);
    });
  };

  const submitLocal = () => {
    Axios.post("http://localhost:3001/api/insertLocal", {
      nome: nome,
      descricao: descricao,
      localizacao: localizacao,
      referencia: referencia,
      cidade: cidade,
      uf: uf,
      tags: tags,
    }).then(() => {
      alert("Cadastrado com sucesso!");
    });
  };

  return (
    <div className="App">
      <div>
        <h1>MeuGuia</h1>
        <h2>testapp</h2>
      </div>
      <div className="form">
        <h3>Buscar por Cidade</h3>
        <label>Buscar </label>
        <input
          type="text"
          name="buscaCidade"
          onChange={(e) => {
            setBuscaCidade(e.target.value);
          }}
        />

        <button onClick={getSearchCidade}>Buscar</button>
        <div>
          <h1>{localsListCidade}</h1>
        </div>

        <h3>Buscar por Tag</h3>
        <label>Buscar </label>
        <input
          type="text"
          name="buscaTag"
          onChange={(e) => {
            setBuscaTag(e.target.value);
          }}
        />

        <button onClick={getSearchTag}>Buscar</button>

        <div>
          <h1>{localsListTag}</h1>
        </div>

        <div>
          <h3>Cadastro de local</h3>
        </div>

        <label>Nome: </label>
        <input
          type="text"
          name="nome"
          onChange={(e) => {
            setNome(e.target.value);
          }}
        />

        <label>Descrição: </label>
        <input
          type="text"
          name="descricao"
          onChange={(e) => {
            setDescricao(e.target.value);
          }}
        />

        <label>Localização: </label>
        <input
          type="text"
          name="localizacao"
          onChange={(e) => {
            setLocalizacao(e.target.value);
          }}
        />

        <label>Ponto de referência: </label>
        <input
          type="text"
          name="referencia"
          onChange={(e) => {
            setReferencia(e.target.value);
          }}
        />

        <label>Cidade: </label>
        <input
          type="text"
          name="cidade"
          onChange={(e) => {
            setCidade(e.target.value);
          }}
        />

        <label>UF: </label>
        <input
          type="text"
          name="uf"
          onChange={(e) => {
            setUf(e.target.value);
          }}
        />

        <label>Tags (separadas por vírgula): </label>
        <input
          type="text"
          name="tags"
          onChange={(e) => {
            setTags(e.target.value);
          }}
        />

        <button onClick={submitLocal}>Cadastrar</button>
      </div>
    </div>
  );
}

export default App;
