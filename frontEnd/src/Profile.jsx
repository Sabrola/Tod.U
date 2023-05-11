import React from 'react'
import ReactDOM from 'react-dom/client'

import '../styles/modern-normalize.css';
import '../styles/index.css';
import '../styles/profile.css';
import '../styles/utils.css';

import lembrete_cards from './Tarefas/cards.jsx';
{/* import Lembrete from '../src/Tarefas/cards'; */}


const tarefas = cards.map((lembretes) =>
    <li>{lembretes}</li>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ul>{tarefas}</ul>);

