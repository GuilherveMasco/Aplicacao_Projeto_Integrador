import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import Axios from "axios";

const Cidades = () => {
    const [nome, setNome] = useState("");
    const [uf, setUf] = useState("");

    const submitCidade = () => {
        Axios.post("http://localhost:3001/api/insertCidade", {
          nome: nome,
          uf: uf,
        }).then(() => {
          alert("Cadastrado com sucesso!");
        });
    };

  return (
    <div className="App">
        <body>
        <Header></Header>
        <main class="page pricing-table-page">
            <section class="clean-block clean-pricing dark">
                <div class="container">
                    <div class="block-heading">
                        <h2 >Cadastre sua cidade!</h2>
                        <p>Sua cidade ainda não está no nosso site? Cadastre ela e permita que compartilhem experiências!</p>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col"><small >Nome da cidade:</small><input type="text" onChange={(e) => {setNome(e.target.value);}} name="nome" /></div>
                        <div
                            class="col">
                            <form><small>Estado:</small></form><select type="text" name="uf" onChange={(e) => {setUf(e.target.value);}}>
                            <optgroup label="Estado">
                                <option value="AC" selected="">AC</option>
                                <option value="AL">AL</option>
                                <option value="AP">AP</option>
                                <option value="AM">AM</option>
                                <option value="BA">BA</option>
                                <option value="CE">CE</option>
                                <option value="DF">DF</option>
                                <option value="ES">ES</option>
                                <option value="GO">GO</option>
                                <option value="MA">MA</option>
                                <option value="MT">MT</option>
                                <option value="MS">MS</option>
                                <option value="MG">MG</option>
                                <option value="PA">PA</option>
                                <option value="PB">PB</option>
                                <option value="PR">PR</option>
                                <option value="PE">PE</option>
                                <option value="PI">PI</option>
                                <option value="RJ">RJ</option>
                                <option value="RN">RN</option>
                                <option value="RS">RS</option>
                                <option value="RO">RO</option>
                                <option value="RR">RR</option>
                                <option value="SC">SC</option>
                                <option value="SP">SP</option>
                                <option value="SE">SE</option>
                                <option value="TO">TO</option>
                            </optgroup>
                            </select>
                        </div>
                </div>
                <div class="row">
                    <div class="col"><button class="btn btn-primary btn-block" type="submit" onClick={submitCidade} >Adicionar Cidade</button></div>
                </div>
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

export default Cidades;
