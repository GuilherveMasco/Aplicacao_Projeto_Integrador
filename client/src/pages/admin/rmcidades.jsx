import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Axios from "axios";

class rmCidades extends Component {

  render(){
  return (
    <div className="App">
        <body>
        <Header></Header>
        <Footer></Footer>
    </body>
    </div>
  );
  }
}

export default rmCidades;