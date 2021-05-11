import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

import MainPage from "./pages/index";
import Tags from "./pages/tags";
import Cidades from "./pages/cidades";
import Admin from "./pages/admin";
import Contato from "./pages/contato";
import Local from "./pages/local";
import VerMais from "./pages/vermais";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/tags" component={Tags} />
          <Route exact path="/cidades" component={Cidades} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/contato" component={Contato} />
          <Route exact path="/local" component={Local} />
          <Route path="/vermais/:idLocal" component={VerMais} />
        </Switch>      
      </Router>
    );
  }
}

export default App;
