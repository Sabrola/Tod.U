{ /*////////////////// Main.jsx ///////////////*/ }
import React from 'react'
import ReactDOM from 'react-dom/client'

import '../styles/modern-normalize.css';
import '../styles/index.css';
import '../styles/Login.css';
import '../styles/utils.css';

import Rotas from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Rotas />
    </React.StrictMode>
)