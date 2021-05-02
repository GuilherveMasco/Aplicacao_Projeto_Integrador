import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Axios from "axios";

const MainPage = () => {

  const [localsListCidade, setLocalsListCidade] = useState([]);
  const [buscaCidade, setBuscaCidade] = useState("");

  const getSearchCidade = () => {
    Axios.get("http://localhost:3001/api/getCidade", {
      params: {
        buscaCidade: buscaCidade,
      },
    }).then((res) => {
      const listLocalsCidade = res.data.map((local) => {
        return (
          <div>
            <a href="localList.html" key={local.nome}>{local.nome}</a>
            <p>{local.descricao}</p>
            <br/>
          </div>
        );
      });
      setLocalsListCidade(listLocalsCidade);
    });
  };



  return (
    <div className="App">
      <body>
        <Header></Header>
          <main className="page landing-page">
              <section className="clean-block clean-hero" styles="background-image: url(&quot;../assets/img/background/image4.jpg&quot;);color: rgba(255,48,79,0.73);">
                  <div className="text">
                      <h1>Levamos você pelo bom caminho!</h1>
                      <p>Comece já pesquisando a cidade que pretende conhecer melhor.</p><input type="text" name="buscaCidade" onChange={(e) => {setBuscaCidade(e.target.value);}} styles="height: 44px;margin: 9px;padding: 10px;width: 418px;margin-top: 10px;margin-right: 5px;padding-top: 8px;" placeholder="Digite uma cidade para começar."/>
                      <button
                          className="btn btn-outline-light btn-lg" type="button" onClick={getSearchCidade}>Pesquisar</button>
                  </div>
              </section>
              <section className="clean-block clean-info dark">
                <h3 className="text-center" styles="margin-top: 27px;margin-left: 30px;">{localsListCidade}</h3>
              </section>
              <section className="clean-block clean-info dark">
                  <p className="text-center" styles="font-size: 26px;margin-top: 27px;margin-left: 0px;">Não encontrou seu local?&nbsp;<Link to="/local">Adicione-o!</Link></p>
              </section>
              <section className="clean-block slider dark">
                  <div className="container">
                      <div className="block-heading">
                          <h2 styles="color: rgb(255,48,79);">Conheça o mundo!</h2>
                          <p>Trazemos uma comunidade mundial compartilhando comentários e fotos de diversos pontos turísticos para passear, curtir, tirar fotos e muito mai.</p>
                      </div>
                      <div className="carousel slide" data-ride="carousel" id="carousel-1">
                          <div className="carousel-inner" role="listbox">
                              <div className="carousel-item active"><img className="w-100 d-block" src="assets/img/scenery/image1.jpg" alt="Slide Image"/></div>
                              <div className="carousel-item"><img className="w-100 d-block" src="assets/img/background/image4.jpg" alt="Slide Image"/></div>
                              <div className="carousel-item"><img className="w-100 d-block" src="assets/img/scenery/image6.jpg" alt="Slide Image"/></div>
                          </div>
                          <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev"><span className="carousel-control-prev-icon"></span><span className="sr-only">Previous</span></a><a className="carousel-control-next" href="#carousel-1" role="button"
                                  data-slide="next"><span className="carousel-control-next-icon"></span><span className="sr-only">Next</span></a></div>
                          <ol className="carousel-indicators">
                              <li data-target="#carousel-1" data-slide-to="0" className="active"></li>
                              <li data-target="#carousel-1" data-slide-to="1"></li>
                              <li data-target="#carousel-1" data-slide-to="2"></li>
                          </ol>
                      </div>
                  </div>
              </section>
              <section className="clean-block about-us"></section>
          </main>
          <footer className="page-footer dark">
              <div className="footer-copyright">
                  <p>© 2021 MeuGuia LTDA.</p>
              </div>
          </footer>
          <script src="assets/js/jquery.min.js"></script>
          <script src="assets/bootstrap/js/bootstrap.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.js"></script>
          <script src="assets/js/script.min.js"></script>
      </body>
    </div>
  );
}

export default MainPage;
