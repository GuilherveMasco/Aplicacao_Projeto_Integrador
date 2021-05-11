import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Axios from "axios";

const VerMais = () => {

  return (
    <div className="App">
        <body>
        <Header></Header>
        <main className="page contact-us-page">
            <section className="clean-block clean-form dark">
                <div className="container">
                    <div className="block-heading">
                        <h2 style={{color: "#ff304f"}}>Nome</h2>
                        <p>Descrição</p>
                        <div>
                            <h4>Localização: </h4>
                            <h4>Referência: </h4>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer></Footer>
    </body>
    </div>
  );
}

export default VerMais;