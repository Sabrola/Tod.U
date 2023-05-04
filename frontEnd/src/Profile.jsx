import React from 'react'
import ReactDOM from 'react-dom/client'

import '../styles/modern-normalize.css';
import '../styles/index.css';
import '../styles/profile.css';
import '../styles/utils.css';

import Tarefas from './Tarefas/cards.jsx';
import contents from './contents.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <div className='tarefa'>
        {contents.map(contents => (
            <Tarefas
                key={contents.id}
                nome={contents.notif_nome}
                data={contents.data}
                hora={contents.hora}
                desc={contents.conteudo}
                notif={contents.notif_em}
                repete={contents.tempo_id}
            />
        ))}
        </div>
    </React.StrictMode>,
  )

export default function profile(){
    return( 
        <Tarefas />
    )
}
