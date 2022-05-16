import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux'
import store from './redux/store'



ReactDOM.render( // deux arguments à la fonction, ne pas oublier la virgule
  // Le Provider va entourer notre application et l'hydrater en données depuis notre Store.
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);