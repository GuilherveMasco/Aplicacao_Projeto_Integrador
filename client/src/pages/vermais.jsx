import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Axios from "axios";

class VerMais extends Component {
  state = {
    locais: [],
    comentarios: [],
    tags: [],
    autor: "",
    conteudo: "",
    imagens: [],
    novaImagem: "",
  };
  handleChangeImagem = (event) => {
    if (event.target.value.length !== 0) {
      this.setState({ novaImagem: URL.createObjectURL(event.target.files[0]) });
    }
  };
  handleSubmitImage = (event) => {
    const { idLocal } = this.props.match.params;
    event.preventDefault();

    console.log("imagem ao enviar", this.state.novaImagem);
    Axios.post("http://localhost:3001/api/insertImagem", {
      buscaLocal: idLocal,
      novaImagem: this.state.novaImagem,
    }).then(() => {
      alert("Imagem inserida com sucesso!");
      window.location.reload();
    });
  };

  handleChangeAutor = (event) => {
    this.setState({ autor: event.target.value });
  };
  handleChangeConteudo = (event) => {
    this.setState({ conteudo: event.target.value });
  };

  handleSubmit = (event) => {
    const { idLocal } = this.props.match.params;
    event.preventDefault();

    Axios.post("http://localhost:3001/api/insertComentario", {
      buscaLocal: idLocal,
      autor: this.state.autor,
      conteudo: this.state.conteudo,
    }).then(() => {
      alert("Obrigado pelo comentário!");
      window.location.reload();
    });
  };

  componentDidMount() {
    const { idLocal } = this.props.match.params;
    Axios.get("http://localhost:3001/api/getLocal", {
      params: {
        buscaLocal: idLocal,
      },
    }).then((res) => {
      const locais = res.data;
      this.setState({ locais });
    });

    Axios.get("http://localhost:3001/api/getComentarios", {
      params: {
        buscaLocal: idLocal,
      },
    }).then((res) => {
      const comentarios = res.data;
      this.setState({ comentarios });
    });

    Axios.get("http://localhost:3001/api/getTagPage", {
      params: {
        buscaLocal: idLocal,
      },
    }).then((res) => {
      const tags = res.data;
      this.setState({ tags });
    });
    Axios.get("http://localhost:3001/api/getImagens", {
      params: {
        buscaLocal: idLocal,
      },
    }).then((res) => {
      const imagens = res.data;
      //console.log(imagens)
      this.setState({ imagens });
    });
  }

  render() {
    return (
      <div className="App">
        <body>
          <Header></Header>
          <main className="page contact-us-page">
            <section className="clean-block clean-form dark">
              <div className="container">
                <div className="block-heading">
                  {this.state.locais.map((local) => (
                    <h2 style={{ color: "#ff304f" }}>{local.nome}</h2>
                  ))}
                  {this.state.locais.map((local) => (
                    <p>{local.descricao}</p>
                  ))}
                  <br />
                  <div className="block-heading">
                    {this.state.locais.map((local) => (
                      <h4>
                        Localização: {local.localizacao}, {local.cidade} - {local.uf}
                      </h4>
                    ))}
                    {this.state.locais.map((local) => (
                      <h4>Referência: {local.referencia}</h4>
                    ))}
                  </div>
                  <div className="block-heading">
                    <h4>Imagens:</h4>
                    {this.state.imagens.map((imagem) => (
                      <img src={imagem.imagem} />
                    ))}
                  </div>
                  <div className="block-heading">
                    <form onSubmit={this.handleSubmitImage}>
                      <label>Adicione uma imagem ao local:</label>
                      <input className="form-control" name="novaImagem" onChange={this.handleChangeImagem} type="file" />
                      <button className="btn btn-primary btn-block" style={{ backgroundColor: "#ff304f" }} type="submit">
                        Adicionar
                      </button>
                    </form>
                  </div>
                  <div className="block-heading">
                    <h4>Tags:</h4>
                    {this.state.tags.map((tag) => (
                      <small>{tag.nome} </small>
                    ))}
                  </div>
                  <div className="block-heading">
                    <form onSubmit={this.handleSubmit}>
                      <label>Deixe um comentário: </label>
                      <p>Autor:</p>
                      <input type="text" name="autor" className="form-control" onChange={this.handleChangeAutor} />
                      <p>Comentário:</p>
                      <textarea type="text" name="conteudo" className="form-control" onChange={this.handleChangeConteudo}></textarea>
                      <br />
                      <button className="btn btn-primary btn-block" style={{ backgroundColor: "#ff304f" }} type="submit">
                        Comentar
                      </button>
                    </form>
                    <h5>Comentários:</h5>
                    <br />
                    {this.state.comentarios.map((comentario) => (
                      <div>
                        <h6 style={{ color: "#ff304f" }}>{comentario.autor}</h6>
                        <h6>{comentario.conteudo}</h6>
                        <br />
                        <br />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer></Footer>
        </body>
      </div>
    );
  }
}
export default withRouter(VerMais);
