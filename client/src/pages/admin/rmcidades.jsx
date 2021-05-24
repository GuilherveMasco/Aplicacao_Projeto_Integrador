import React, { Component } from "react";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Axios from "axios";

class rmCidades extends Component {
  state = {
    cidades:[],
    idCidade: ''
  }

  handleChangeId = event => {
    this.setState({ idCidade: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    Axios.post("http://localhost:3001/api/rmCidade", { 
        idCidade: this.state.idCidade
     })
      .then(() => {
        alert("Cidade removida!");
        window.location.reload();
      })
    }

  componentDidMount() {
    Axios.get("http://localhost:3001/api/listCidades")
    .then((res) => {
    const cidades = res.data;
    this.setState({ cidades });
    })

}

  render(){
  return (
    <div className="App">
        <body>
        <Header></Header>
        <main className="page contact-us-page">
                <section className="clean-block clean-form dark">
                    <div className="container"></div>
                      <div className="block-heading">
                      <h3>Remover cidade por id:</h3>
                        <form onSubmit={this.handleSubmit}>
                          <input type="text" name="idCidade" placeholder="ID" className="form-control" onChange={this.handleChangeId}/>
                          <button className="btn btn-primary btn-block" style={{backgroundColor: "#ff304f"}} type="submit">Remover Cidade</button>
                        </form>
                        <br/>
                        <br/>
                        <h5>Cidades:</h5>
                        <br/>
                        { this.state.cidades.map(cidade => <div>
                        <h6 style={{color: "#ff304f"}}>ID: {cidade.idCidade}</h6>
                        <h6>{cidade.nome}</h6>
                        <h6>{cidade.uf}</h6><br/><br/></div>)}
                      </div>
                </section>
            </main>
        <Footer></Footer>
    </body>
    </div>
  );
  }
}

export default rmCidades;