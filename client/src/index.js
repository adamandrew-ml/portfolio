import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './utils/reportWebVitals';
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style
import App from "./App";
import './styles/App.css'

//https://www.pexels.com/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();