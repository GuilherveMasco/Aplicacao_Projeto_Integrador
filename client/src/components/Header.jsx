import React from 'react';
import { Link } from "react-router-dom";

export const Header = (props) => {
    return(
        <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
              <div className="container"><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                  <div className="collapse navbar-collapse" id="navcol-1">
                  <img style={{backgroundImage: "url(../assets/img/scenery/logoMeuGuia.png)", width: "90px", height: "90px", margin: "-13px", padding: "0"}} src="../assets/img/scenery/logoMeuGuia.png"/>
                      <ul className="nav navbar-nav ml-auto">
                          <li className="nav-item" role="presentation"><Link className="nav-link" activeClassName="nav-link active" to="/">início</Link></li>
                          <li className="nav-item" role="presentation"><Link className="nav-link" activeClassName="nav-link active" to="/tags">tags</Link></li>
                          <li className="nav-item" role="presentation"><Link className="nav-link" activeClassName="nav-link active" to="/cidades">cidades</Link></li>
                          <li className="nav-item" role="presentation"><Link className="nav-link" activeClassName="nav-link active" to="/admin">administração</Link></li>
                          <li className="nav-item" role="presentation"><Link className="nav-link" activeClassName="nav-link active" to="/contato">contato</Link></li>
                      </ul>
                  </div>
              </div>
        </nav>
    );
}

export default Header;