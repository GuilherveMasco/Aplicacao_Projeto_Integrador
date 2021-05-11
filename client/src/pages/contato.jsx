import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contato = () => {

  return (
    <div className="App">
        <body>
        <Header></Header>
        <main className="page contact-us-page">
            <section className="clean-block clean-form dark">
                <div className="container">
                    <div className="block-heading">
                        <h2 style={{color: "#ff304f"}}>Contato</h2>
                        <p>Qualquer dúvida ou sugestão que tiver, entre em contato conosco por email.</p>
                    </div>
                    <form>
                        <div className="form-group"><label>Nome:</label><input className="form-control" type="text"/></div>
                        <div className="form-group"><label>Assunto:</label><input className="form-control" type="text"/></div>
                        <div className="form-group"><label>Email:</label><input className="form-control" type="email"/></div>
                        <div className="form-group"><label>Mensagem:</label><textarea className="form-control"></textarea></div>
                        <div className="form-group"><button className="btn btn-primary btn-block" style={{backgroundColor: "#ff304f"}} type="submit">Enviar</button></div>
                    </form>
                </div>
            </section>
        </main>
        <Footer></Footer>
    </body>
    </div>
  );
}

export default Contato;