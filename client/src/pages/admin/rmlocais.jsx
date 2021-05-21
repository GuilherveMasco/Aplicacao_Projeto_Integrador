import React, { Component } from "react";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Axios from "axios";

class rmLocais extends Component {
  state = {
    locais:[],
    idLocal: ''
  }

  handleChangeId = event => {
    this.setState({ idLocal: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    Axios.post("http://localhost:3001/api/rmLocal", { 
        idLocal: this.state.idLocal
     })
      .then(() => {
        alert("Local removido!");
        window.location.reload();
      })
    }

  componentDidMount() {
    Axios.get("http://localhost:3001/api/listLocais")
    .then((res) => {
    const locais = res.data;
    this.setState({ locais });
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
                      <h3>Remover local por id:</h3>
                        <form onSubmit={this.handleSubmit}>
                          <input type="text" name="idCidade" placeholder="ID" className="form-control" onChange={this.handleChangeId}/>
                          <button className="btn btn-primary btn-block" style={{backgroundColor: "#ff304f"}} type="submit">Remover Cidade</button>
                        </form>
                        <br/>
                        <br/>
                        <h5>Locais:</h5>
                        <br/>
                        { this.state.locais.map(local => <div>
                        <h6 style={{color: "#ff304f"}}>ID: {local.idLocal}</h6>
                        <h6>{local.nome}</h6>
                        <h6>ID Cidade: {local.Cidade_idCidade}</h6><br/><br/></div>)}
                      </div>
                </section>
            </main>
        <Footer></Footer>
    </body>
    </div>
  );
  }
}

export default rmLocais;