import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Axios from "axios";

class VerMais extends Component {

    state = {
        locais: []
    }
    
    componentDidMount() {
        const { idLocal } = this.props.match.params;
        Axios.get("http://localhost:3001/api/getLocal", {
            params: {
              buscaLocal: idLocal,
            },
        }).then((res) => {
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
                    <div className="container">
                        <div className="block-heading">
                            { this.state.locais.map(local => <h2 style={{color: "#ff304f"}}>{local.nome}</h2>)}
                            { this.state.locais.map(local => <p>{local.descricao}</p>)}
                            <br/>
                            <div className="block-heading">
                                { this.state.locais.map(local => <h4>Localização: {local.localizacao}, {local.cidade} - {local.uf}</h4>)}
                                { this.state.locais.map(local => <h4>Referência: {local.referencia}</h4>)}
                            </div>
                            <div className="block-heading">
                                <form>
                                    <label>Deixe um comentário:</label><textarea className="form-control"></textarea>
                                    <button className="btn btn-primary btn-block" style={{backgroundColor: "#ff304f"}} type="submit">Enviar</button>
                                </form>    
                                <h5>Comentários:</h5>
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