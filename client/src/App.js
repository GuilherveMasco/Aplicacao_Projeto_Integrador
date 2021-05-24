import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

import MainPage from "./pages/index";
import Tags from "./pages/tags";
import Cidades from "./pages/cidades";
import Contato from "./pages/contato";
import Local from "./pages/local";
import VerMais from "./pages/vermais";
import WebControl from "./pages/webcontrol";
import rmComentarios from "./pages/admin/rmcomentarios";
import rmImagens from "./pages/admin/rmimagens";
import rmCidades from "./pages/admin/rmcidades";
import rmLocais from "./pages/admin/rmlocais";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/tags" component={Tags} />
          <Route exact path="/cidades" component={Cidades} />
          <Route exact path="/contato" component={Contato} />
          <Route exact path="/local" component={Local} />
          <Route path="/vermais/:idLocal" component={VerMais} />
          <Route exact path="/webcontrol" component={WebControl} />
          <Route exact path="/webcontrol/rmcomentarios" component={rmComentarios} />
          <Route exact path="/webcontrol/rmimagens" component={rmImagens} />
          <Route exact path="/webcontrol/rmcidades" component={rmCidades} />
          <Route exact path="/webcontrol/rmlocais" component={rmLocais} />
        </Switch>      
      </Router>
    );
  }
}

export default App;
