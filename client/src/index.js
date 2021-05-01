import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/bootstrap/js/bootstrap.min.js';
import './assets/css/styles.min.css';
import './assets/js/jquery.min.js';
import './assets/js/script.min.js';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

serviceWorker.unregister();