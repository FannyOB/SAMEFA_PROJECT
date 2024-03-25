// lien avec le dom:  ce code configure une application React en important les bibliothèques nécessaires, les styles, et les composants, puis en les rendant dans le DOM à l'endroit spécifié par l'ID 'root'.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
