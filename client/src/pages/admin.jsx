import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Admin = () => {

  return (
    <div className="App">
        <body>
        <Header></Header>
        <main className="page contact-us-page">
            <section className="clean-block clean-form dark">
                <div className="container">
                    <div className="block-heading">
                        <h2 style={{color: "#ff304f"}}>Login de Administrador</h2>
                    </div>
                    <form>
                        <div className="form-group"><label>Usuário:</label><input className="form-control" type="text"/></div>
                        <div className="form-group"><label>Senha:</label><input className="form-control" type="text"/></div>
                        <div className="form-group"><button className="btn btn-primary btn-block" style={{backgroundColor: "#ff304f"}} type="submit">Login</button></div>
                    </form>
                </div>
            </section>
        </main>
        <Footer></Footer>
    </body>
    </div>
  );
}

export default Admin;