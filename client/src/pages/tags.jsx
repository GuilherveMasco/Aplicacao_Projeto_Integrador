import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import Axios from "axios";

const Tags = () => {
    const [buscaTag, setBuscaTag] = useState("");
    const [localsListTag, setLocalsListTag] = useState([]);

    const getSearchTag = () => {
        Axios.get("http://localhost:3001/api/getTag", {
          params: {
            buscaTag: buscaTag,
          },
        }).then((res) => {
          const listLocalsTag = res.data.map((local) => {
            return (
                <div>
                    <a href="localList.html" key={local.nome}>{local.nome}</a>
                    <p>{local.descricao}</p>
                    <br/>
              </div>
            );
          });
          setLocalsListTag(listLocalsTag);
        });
      };

  return (
    <div className="App">
      <body>
      <Header></Header>
            <main class="page">
                <section class="clean-block features" >
                    <div class="container">
                        <div class="block-heading">
                            <h2>Pesquise por tags</h2>
                            <p>Nossos locais possuem um sistema de tags e você pode usar elas para pesquisar pelo que gosta.</p>
                        </div>
                        <div class="row justify-content-center"><input type="text" name="buscaTag" onChange={(e) => {setBuscaTag(e.target.value);}} placeholder="Pesquise por uma tag."/><button class="btn btn-primary btn-block" onClick={getSearchTag} type="button" >Pesquisar</button></div>
                    </div>
                    <section className="clean-block clean-info dark">
                        <h3 className="text-center" styles="margin-top: 27px;margin-left: 30px;">{localsListTag}</h3>
                    </section>
                </section>
            </main>
            <footer class="page-footer dark">
                <div class="footer-copyright">
                    <p>© 2021 MeuGuia LTDA.</p>
                </div>
            </footer>
            <script src="assets/js/jquery.min.js"></script>
            <script src="assets/bootstrap/js/bootstrap.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.js"></script>
            <script src="assets/js/smoothproducts.min.js"></script>
            <script src="assets/js/theme.js"></script>
        </body>
    </div>
  );
}

export default Tags;
