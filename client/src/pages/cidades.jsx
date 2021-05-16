import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
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
        <main className="page pricing-table-page">
            <section className="clean-block clean-pricing dark" style={{marginTop: "50px", marginBottom: "72px"}}>
                <div className="container">
                    <div className="block-heading">
                        <h2 style={{color: "#ff304f"}}>Cadastre sua cidade!</h2>
                        <p>Sua cidade ainda não está no nosso site? Cadastre ela e permita que compartilhem experiências!</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col"><small style={{fontSize: "20px", marginLeft: "67px"}}>Nome da cidade:</small>
                        <input type="text" style={{height: "44px", margin: "9px", padding: "10px", width: "418px", marginTop: "10px", marginRight: "5px", paddingTop: "8px", marginLeft: "67px"}} onChange={(e) => {setNome(e.target.value);}} name="nome" /></div>
                        <div
                            className="col">
                            <form><small style={{fontSize: "20px", marginLeft: "10px"}}>Estado:</small></form>
                            <select type="text" style={{marginLeft: "11px", marginTop: "11px", width: "136px", height: "43px", fontSize: "18px"}} name="uf" onChange={(e) => {setUf(e.target.value);}}>
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
                <div className="row">
                    <div className="col"><button className="btn btn-outline-light btn-lg text-center" style={{backgroundColor: "#ff304f", height: "50px", marginTop: "35px", marginLeft: "456px"}} type="submit" onClick={submitCidade} >Adicionar Cidade</button></div>
                </div>
                </div>
            </section>
        </main>
        <Footer></Footer>
    </body>
    </div>
  );
}

export default Cidades;
