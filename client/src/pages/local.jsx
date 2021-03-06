import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Axios from "axios";

const Local = () => {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [localizacao, setLocalizacao] = useState("");
    const [referencia, setReferencia] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUf] = useState("");
    const [tags, setTags] = useState("");
    const [imagem, setImagem] = useState(null)
    const onChangePicture = e => {
        var imagens = URL.createObjectURL(e.target.files[0])
        console.log(imagens)
        setImagem( imagens );
    };

    const submitLocal = () => {
        Axios.post("http://localhost:3001/api/insertLocal", {
          nome: nome,
          descricao: descricao,
          localizacao: localizacao,
          referencia: referencia,
          cidade: cidade,
          uf: uf,
          tags: tags,
          imagem: imagem,
        }).then(() => {
          alert("Cadastrado com sucesso!");
        });
      };

  return (
    <div className="App">
        <body>
        <Header></Header>
        <main className="page contact-us-page">
            <section className="clean-block clean-form dark">
                <div className="container">
                    <div className="block-heading">
                        <h2 style={{color: "#ff304f"}}>Adicione um Local</h2>
                        <p>Não encontrou um local que conhece? Adicione ele!</p>
                    </div>
                    <form>
                        <div className="form-group"><label>Nome:</label><input className="form-control" name="nome" onChange={(e) => {setNome(e.target.value);}} type="text"/></div>
                        <div className="form-group"><label>Descrição:</label><input className="form-control" name="descricao" onChange={(e) => {setDescricao(e.target.value);}} type="text"/></div>
                        <div className="form-group"><label>Localização:</label><input className="form-control" name="localizacao" onChange={(e) => {setLocalizacao(e.target.value);}} type="text"/></div>
                        <div className="form-group"><label>Referência:</label><input className="form-control" name="referencia" onChange={(e) => {setReferencia(e.target.value);}} type="text"/></div>
                        <div className="form-group"><label>Cidade:</label><input className="form-control" name="cidade" onChange={(e) => {setCidade(e.target.value);}} type="text"/></div>
                        <div className="form-group"><label>UF:</label><select className="form-control" type="text" name="uf" onChange={(e) => {setUf(e.target.value);}}>
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
                        <div className="form-group"><label>Tags (separadas por vírgula):</label><textarea className="form-control" type="text" name="tags" onChange={(e) => {setTags(e.target.value);}}></textarea></div>
                        <div className="form-group"><label>Selecionar Imagem:</label><input className="form-control" name="imagem" onChange={onChangePicture} type="file"/></div>
                        <div className="form-group"><button className="btn btn-primary btn-block" style={{backgroundColor: "#ff304f"}} onClick={submitLocal} type="submit">Adicionar Local</button></div>
                    </form>
                </div>
            </section>
        </main>
        <Footer></Footer>
    </body>
    </div>
  );
}

export default Local;