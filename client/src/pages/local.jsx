import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import Axios from "axios";

const Local = () => {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [localizacao, setLocalizacao] = useState("");
    const [referencia, setReferencia] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUf] = useState("");
    const [tags, setTags] = useState("");
    
    const submitLocal = () => {
        Axios.post("http://localhost:3001/api/insertLocal", {
          nome: nome,
          descricao: descricao,
          localizacao: localizacao,
          referencia: referencia,
          cidade: cidade,
          uf: uf,
          tags: tags,
        }).then(() => {
          alert("Cadastrado com sucesso!");
        });
      };

  return (
    <div className="App">
        <body>
        <Header></Header>
        <main class="page contact-us-page">
            <section class="clean-block clean-form dark">
                <div class="container">
                    <div class="block-heading">
                        <h2>Adicione um Local</h2>
                        <p>Não encontrou um local que conhece? Adicione ele!</p>
                    </div>
                    <form>
                        <div class="form-group"><label>Nome:</label><input class="form-control" name="nome" onChange={(e) => {setNome(e.target.value);}} type="text"/></div>
                        <div class="form-group"><label>Descrição:</label><input class="form-control" name="descricao" onChange={(e) => {setDescricao(e.target.value);}} type="text"/></div>
                        <div class="form-group"><label>Localização:</label><input class="form-control" name="localizacao" onChange={(e) => {setLocalizacao(e.target.value);}} type="text"/></div>
                        <div class="form-group"><label>Referência:</label><input class="form-control" name="referencia" onChange={(e) => {setReferencia(e.target.value);}} type="text"/></div>
                        <div class="form-group"><label>Cidade:</label><input class="form-control" name="cidade" onChange={(e) => {setCidade(e.target.value);}} type="text"/></div>
                        <div class="form-group"><label>UF:</label><select class="form-control" type="text" name="uf" onChange={(e) => {setUf(e.target.value);}}>
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
                        <div class="form-group"><label>Tags (separadas por vírgula):</label><textarea class="form-control" type="text" name="tags" onChange={(e) => {setTags(e.target.value);}}></textarea></div>
                        <div class="form-group"><button class="btn btn-primary btn-block" onClick={submitLocal} type="submit">Adicionar Local</button></div>
                    </form>
                </div>
            </section>
        </main>
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/bootstrap/js/bootstrap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.js"></script>
        <script src="assets/js/smoothproducts.min.js"></script>
        <script src="assets/js/theme.js"></script>
    </body>
    </div>
  );
}

export default Local;