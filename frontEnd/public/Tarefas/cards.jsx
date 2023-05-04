import '../styles/modern-normalize.css';
import '../styles/index.css';

import '../styles/utils.css';


export default function Cards(props) {
    return (
        <div className="tarefas_list">

            <div key="props.id" className="tarefa_card">

                {/* Titulo */} 
                <div className='display_tarefas_top'>
                    <h3 className='tarefa_tittle'>{props.nome}</h3>
                    <div className='tarefa_date'>{props.data}</div>
                </div>
                {/* Titulo */} 

                {/* Conteudo */}
                <div className='display_tarefas_content'>
                    {/* Esquerda */}
                    <div className='content_left'>
                        <article className='tarefas_description'>{props.desc}</article>

                        <article className='tarefas_btns'>
                            <button className="tarefa_btn edit"> Editar</button>
                            <button className='tarefa_btn delet'> Deletar</button>
                        </article>
                    </div>
                    {/* Direita */}
                    <div className='content_right'>
                        <section className='notifs'>Notificação em: {props.notif}</section>
                        <hr />
                        <section className='repeat'> Repetindo: {props.repete}</section>
                    </div>
                    {/* Direita */}
                </div>
                {/* Conteudo */} 
            </div>
        </div>
    )
}