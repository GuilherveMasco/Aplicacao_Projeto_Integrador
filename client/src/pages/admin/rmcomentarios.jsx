import React, { Component } from "react";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Axios from "axios";

class rmComentarios extends Component {
  state = {
    comentarios:[],
    idComentario: ''
  }

  handleChangeId = event => {
    this.setState({ idComentario: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    Axios.post("http://localhost:3001/api/rmComentario", { 
        idComentario: this.state.idComentario
     })
      .then(() => {
        alert("Comentário removido!");
        window.location.reload();
      })
    }

  componentDidMount() {
    Axios.get("http://localhost:3001/api/listComentarios")
    .then((res) => {
    const comentarios = res.data;
    this.setState({ comentarios });
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
                        <h3>Remover comentário por id:</h3>
                        <form onSubmit={this.handleSubmit}>
                          <input type="text" name="idComentario" placeholder="ID" className="form-control" onChange={this.handleChangeId}/>
                          <button className="btn btn-primary btn-block" style={{backgroundColor: "#ff304f"}} type="submit">Remover Comentário</button>
                        </form>
                        <br/>
                        <br/>
                        <h5>Comentários:</h5>
                        <br/>
                        { this.state.comentarios.map(comentario => <div>
                        <h6 style={{color: "#ff304f"}}>ID: {comentario.idComentario}</h6>
                        <h6>{comentario.autor}</h6>
                        <h6>{comentario.conteudo}</h6><br/><br/></div>)}
                      </div>
                </section>
            </main>
        <Footer></Footer>
    </body>
    </div>
  );
  }
}

export default rmComentarios;