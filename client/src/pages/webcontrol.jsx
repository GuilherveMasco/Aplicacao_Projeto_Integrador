import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";

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
                        <div className="form-group"><Link to="/webcontrol/rmcomentarios"><button className="btn btn-primary btn-block" style={{backgroundColor: "#ff304f"}} type="submit">Remover Comentários</button></Link></div>
                        <div className="form-group"><Link to="/webcontrol/rmimagens"><button className="btn btn-primary btn-block" style={{backgroundColor: "#ff304f"}} type="submit">Remover Imagens</button></Link></div>
                        <div className="form-group"><Link to="/webcontrol/rmcidades"><button className="btn btn-primary btn-block" style={{backgroundColor: "#ff304f"}} type="submit">Remover Cidades</button></Link></div>
                        <div className="form-group"><Link to="/webcontrol/rmlocais"><button className="btn btn-primary btn-block" style={{backgroundColor: "#ff304f"}} type="submit">Remover Locais</button></Link></div>   
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