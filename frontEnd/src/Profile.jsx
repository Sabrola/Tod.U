import React from 'react'
import ReactDOM from 'react-dom/client'

import '../styles/modern-normalize.css';
import '../styles/index.css';
import '../styles/profile.css';
import '../styles/utils.css';

import contents from './Tarefas/cards.jsx';

function cards_contentstarefas(Props) {
    const cards_info = contents.map((contents) =>
    <li> key={contents.id}</li>
    );
    return (
        <ul> {cards_info} </ul>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render( <NumberList numbers={numbers} />);

