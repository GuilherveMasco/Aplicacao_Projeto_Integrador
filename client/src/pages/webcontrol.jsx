import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const WebControl = () => {

  return (
    <div className="App">
        <body>
        <Header></Header>
        <main className="page contact-us-page">
            <section className="clean-block clean-form dark">
                <div className="container">
                    <div className="block-heading">
                        <h2 style={{color: "#ff304f"}}>Área do Administrador</h2>
                    </div>
                    <form>
                        <div className="form-group"><button className="btn btn-primary btn-block" style={{backgroundColor: "#ff304f"}} type="submit">Remover Comentários</button></div>
                        <div className="form-group"><button className="btn btn-primary btn-block" style={{backgroundColor: "#ff304f"}} type="submit">Remover Imagens</button></div>
                        <div className="form-group"><button className="btn btn-primary btn-block" style={{backgroundColor: "#ff304f"}} type="submit">Remover Cidades</button></div>
                        <div className="form-group"><button className="btn btn-primary btn-block" style={{backgroundColor: "#ff304f"}} type="submit">Remover Locais</button></div>   
                    </form>
                </div>
            </section>
        </main>
        <Footer></Footer>
    </body>
    </div>
  );
}

export default WebControl;