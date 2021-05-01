import React from 'react';

export default () => {
    return(
        <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
              <div className="container"><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                  <div className="collapse navbar-collapse" id="navcol-1">
                      <ul className="nav navbar-nav ml-auto">
                          <li className="nav-item" role="presentation"><a className="nav-link active" href="index.html">Início</a></li>
                          <li className="nav-item" role="presentation"><a className="nav-link" href="tags.html">tags</a></li>
                          <li className="nav-item" role="presentation"><a className="nav-link" href="cidades.html">cidades</a></li>
                          <li className="nav-item" role="presentation"><a className="nav-link" href="admin.html">administração</a></li>
                          <li className="nav-item" role="presentation"><a className="nav-link" href="contato.html">Contato</a></li>
                      </ul>
                  </div>
              </div>
        </nav>
    );
}