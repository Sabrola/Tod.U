import React from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom/client'

import '../styles/modern-normalize.css';
import '../styles/index.css';
import '../styles/profile.css';
import '../styles/mobileMenu.css';
import '../styles/utils.css';

import mobileNav from '../src/mobileMenu'
import Lembretes from '../src/Tarefas/cards'
import { NovoLembrete } from './Tarefas/novoLembrete';

{/* /// Novo_Lembrete /// */}
const handleSubmit = (newLembrete) =>{
    setLembretes([...notifs, newLembrete])
}
{/* /// Novo_Lembrete_End /// */}

mobileNav();
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <NovoLembrete onSubmit={handleSubmit}/>
        <Lembretes />
    </React.StrictMode>
)

