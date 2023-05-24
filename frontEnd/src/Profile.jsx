import React from 'react'
import ReactDOM from 'react-dom/client'

import '../styles/modern-normalize.css';
import '../styles/index.css';
import '../styles/profile.css';
import '../styles/mobileMenu.css';
import '../styles/utils.css';

import mobileNav from '../src/mobileMenu'
import Lembretes from '../src/Tarefas/cards'
import { NovoLembrete } from './Tarefas/novoLembrete';

mobileNav();
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Lembretes />
        <NovoLembrete />
    </React.StrictMode>
)

