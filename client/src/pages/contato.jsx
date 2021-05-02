import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import Axios from "axios";

const Contato = () => {

  return (
    <div className="App">
        <body>
        <Header></Header>
        <main class="page contact-us-page">
            <section class="clean-block clean-form dark">
                <div class="container">
                    <div class="block-heading">
                        <h2>Contato</h2>
                        <p>Qualquer dúvida ou sugestão que tiver, entre em contato conosco por email.</p>
                    </div>
                    <form>
                        <div class="form-group"><label>Nome:</label><input class="form-control" type="text"/></div>
                        <div class="form-group"><label>Assunto:</label><input class="form-control" type="text"/></div>
                        <div class="form-group"><label>Email:</label><input class="form-control" type="email"/></div>
                        <div class="form-group"><label>Mensagem:</label><textarea class="form-control"></textarea></div>
                        <div class="form-group"><button class="btn btn-primary btn-block" type="submit">Enviar</button></div>
                    </form>
                </div>
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

export default Contato;