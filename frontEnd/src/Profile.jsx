import React from 'react'
import ReactDOM from 'react-dom/client'

import '../styles/modern-normalize.css';
import '../styles/index.css';
import '../styles/profile.css';
import '../styles/utils.css';

import Lembretes from '../src/Tarefas/cards'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Lembretes />
    </React.StrictMode>
)

