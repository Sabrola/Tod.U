{ /*////////////////// Main.jsx ///////////////*/ }
import React from 'react'
import ReactDOM from 'react-dom/client'

import '../styles/modern-normalize.css';
import '../styles/index.css';
import '../styles/Login.css';
import '../styles/utils.css';

import Login_stuff from './Login_app';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Login_stuff />
    </React.StrictMode>
)