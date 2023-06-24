import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from '@auth0/auth0-react'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider 
    domain = ""
    clientId = ""
    redirectUri = {window.location.origin}
    audience = ""  // unique identifier
    scope = "openid profile email"
    >
    <App />
    </Auth0Provider>
    
  </React.StrictMode>
);

reportWebVitals();
