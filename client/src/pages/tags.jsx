import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
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
              <Link to={"/vermais/" + local.idLocal}>{local.nome} em {local.cidade} - {local.uf}</Link>
              <h6>{local.descricao}</h6>
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
            <main className="page">
                <section className="clean-block features" style={{paddingTop: "32px", paddingBottom: "304px"}}>
                    <div className="container">
                        <div className="block-heading">
                            <h2>Pesquise por tags</h2>
                            <p>Nossos locais possuem um sistema de tags e você pode usar elas para pesquisar pelo que gosta.</p>
                        </div>
                        <div className="row justify-content-center"><input type="text" name="buscaTag" onChange={(e) => {setBuscaTag(e.target.value);}} style={{height: "44px", margin: "9px", padding: "10px", width: "418px", marginTop: "10px", marginRight: "5px", paddingTop: "8px"}} placeholder="Pesquise por uma tag."/>
                        <button className="btn btn-outline-light btn-lg" style={{backgroundColor: "#ff304f", height: "50px", marginTop: "7px"}} onClick={getSearchTag} type="button" >Pesquisar</button></div>
                    </div>
                    <section className="clean-block clean-info dark">
                        <h3 className="text-center" styles="margin-top: 27px;margin-left: 30px;">{localsListTag}</h3>
                    </section>
                </section>
            </main>
            <Footer></Footer>
        </body>
    </div>
  );
}

export default Tags;
